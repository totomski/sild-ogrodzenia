import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, Search, ChevronDown, Grid3X3, List } from 'lucide-react'
import { products, Product } from '../data/products'
import ProductCard from '../components/ProductCard'
import { mainCategories, calculators } from '../data/categories'
import { useSearch } from '../context/SearchContext'
import CategoryTile from '../components/CategoryTile'

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest'

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const queryParam = searchParams.get('q') || ''
  const categoryParam = searchParams.get('cat') || ''
  const { query: searchQuery } = useSearch()

  const [activeCategory, setActiveCategory] = useState(categoryParam)
  const [activeSubcategory, setActiveSubcategory] = useState('')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 6000])
  const [inStockOnly, setInStockOnly] = useState(false)
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const effectiveQuery = queryParam || searchQuery

  const filtered = useMemo(() => {
    let result = [...products] as Product[]

    if (effectiveQuery) {
      const q = effectiveQuery.toLowerCase()
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.category.includes(q) ||
        p.subcategory.includes(q) ||
        p.system?.toLowerCase().includes(q) ||
        p.colors.some(c => c.toLowerCase().includes(q))
      )
    }

    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory)
    }
    if (activeSubcategory) {
      result = result.filter(p => p.subcategory === activeSubcategory)
    }
    if (inStockOnly) {
      result = result.filter(p => p.inStock)
    }
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Sort
    switch (sortBy) {
      case 'price-asc': result.sort((a,b) => a.price - b.price); break
      case 'price-desc': result.sort((a,b) => b.price - a.price); break
      case 'rating': result.sort((a,b) => b.rating - a.rating); break
      case 'newest': result.sort((a,b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break
      default: result.sort((a,b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0))
    }

    return result
  }, [effectiveQuery, activeCategory, activeSubcategory, inStockOnly, priceRange, sortBy])

  const subcategories = useMemo(() => {
    const cats = activeCategory ? products.filter(p => p.category === activeCategory) : products
    return [...new Set(cats.map(p => p.subcategory))]
  }, [activeCategory])

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      {/* Header */}
      <div className="bg-white border-b border-zinc-100">
        <div className="container-sild py-6 lg:py-8">
          <div className="flex flex-wrap items-baseline gap-3">
            <h1 className="font-black text-[32px] lg:text-[44px] tracking-[-0.03em] leading-none">
              {effectiveQuery ? `Wyniki: "${effectiveQuery}"` : activeCategory ? mainCategories.find(c => c.id === activeCategory)?.title || 'Sklep' : 'Sklep'}
            </h1>
            <span className="px-3 py-1 rounded-full bg-zinc-100 text-[13px] font-medium">{filtered.length} produktów</span>
          </div>

          {!effectiveQuery && !activeCategory && (
            <p className="mt-3 text-[15px] text-zinc-600 max-w-[640px]">
              Nowa architektura: 6 jednoznacznych kafli zamiast labiryntu kategorii. Wybierz co chcesz kupić — resztą zajmiemy się my.
            </p>
          )}

          {/* Category tiles if no filter */}
          {!effectiveQuery && !activeCategory && (
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mainCategories.map((cat, i) => <CategoryTile key={cat.id} category={cat} index={i} />)}
            </div>
          )}

          {/* Calculators teaser */}
          {!effectiveQuery && !activeCategory && (
            <div className="mt-10 grid lg:grid-cols-3 gap-4">
              {calculators.map(calc => (
                <Link key={calc.id} to={calc.href} className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-200 hover:bg-white hover:shadow-sm transition-all group">
                  <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-[20px] shrink-0">{calc.icon}</div>
                  <div className="flex-1 min-w-0"><div className="font-semibold text-[14px]">{calc.title}</div><div className="text-[12px] text-zinc-600 line-clamp-1">{calc.desc}</div></div>
                  <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center group-hover:bg-black shrink-0">→</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="container-sild py-6 lg:py-8">
        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className={`hidden lg:block w-[280px] shrink-0 ${!effectiveQuery && !activeCategory ? 'mt-0' : ''}`}>
            <div className="sticky top-[140px] space-y-6">
              {/* Categories */}
              <div className="rounded-2xl bg-white border border-zinc-200 p-5">
                <h3 className="font-bold text-[13px] tracking-widest uppercase text-zinc-500 mb-4">Kategoria</h3>
                <div className="space-y-1">
                  <button onClick={() => { setActiveCategory(''); setActiveSubcategory('') }} className={`w-full text-left px-3 h-10 rounded-xl text-[14px] font-medium transition-colors ${!activeCategory ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-50'}`}>Wszystkie</button>
                  {mainCategories.map(cat => (
                    <button key={cat.id} onClick={() => { setActiveCategory(cat.id); setActiveSubcategory('') }} className={`w-full text-left px-3 h-10 rounded-xl text-[14px] font-medium flex items-center justify-between transition-colors ${activeCategory === cat.id ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-50'}`}>
                      <span className="truncate">{cat.title}</span><span className="text-[11px] opacity-60">{products.filter(p => p.category === cat.id).length}</span>
                    </button>
                  ))}
                </div>

                {subcategories.length > 0 && (
                  <>
                    <h4 className="font-bold text-[12px] tracking-widest uppercase text-zinc-400 mt-6 mb-3">Podkategoria</h4>
                    <div className="space-y-1">
                      <button onClick={() => setActiveSubcategory('')} className={`w-full text-left px-3 h-9 rounded-xl text-[13px] transition-colors ${!activeSubcategory ? 'bg-zinc-100 font-medium' : 'hover:bg-zinc-50 text-zinc-600'}`}>Wszystkie</button>
                      {subcategories.map(sub => (
                        <button key={sub} onClick={() => setActiveSubcategory(sub)} className={`w-full text-left px-3 h-9 rounded-xl text-[13px] capitalize transition-colors ${activeSubcategory === sub ? 'bg-zinc-100 font-medium' : 'hover:bg-zinc-50 text-zinc-600'}`}>{sub}</button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Price */}
              <div className="rounded-2xl bg-white border border-zinc-200 p-5">
                <h3 className="font-bold text-[13px] tracking-widest uppercase text-zinc-500 mb-4">Cena</h3>
                <div className="flex items-center gap-3">
                  <input type="number" value={priceRange[0]} onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])} className="w-full h-10 px-3 rounded-xl border border-zinc-200 bg-zinc-50 text-[14px]" placeholder="Od" />
                  <span className="text-zinc-400">—</span>
                  <input type="number" value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])} className="w-full h-10 px-3 rounded-xl border border-zinc-200 bg-zinc-50 text-[14px]" placeholder="Do" />
                </div>
                <div className="mt-4">
                  <input type="range" min={0} max={6000} step={50} value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])} className="w-full" />
                </div>
                <label className="mt-4 flex items-center gap-2 text-[14px] cursor-pointer">
                  <input type="checkbox" checked={inStockOnly} onChange={e => setInStockOnly(e.target.checked)} className="rounded" /> Tylko dostępne od ręki
                </label>
              </div>

              <div className="rounded-2xl bg-[#1e3a5f] text-white p-5">
                <div className="font-bold">Potrzebujesz pomocy?</div>
                <div className="text-[13px] text-white/70 mt-1">Doradzimy, policzymy, wyślemy wzornik</div>
                <a href="tel:+48123456789" className="mt-4 flex h-10 rounded-full bg-white text-[#1e3a5f] font-semibold text-[14px] items-center justify-center">Zadzwoń 123 456 789</a>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2">
                <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden h-10 px-4 rounded-full bg-white border border-zinc-200 flex items-center gap-2 text-[14px] font-medium">
                  <SlidersHorizontal className="w-4 h-4" /> Filtry { (activeCategory || activeSubcategory || inStockOnly) && <span className="w-5 h-5 rounded-full bg-zinc-900 text-white text-[11px] flex items-center justify-center">!</span>}
                </button>
                {(activeCategory || activeSubcategory || effectiveQuery) && (
                  <div className="flex items-center gap-2 flex-wrap">
                    {effectiveQuery && <span className="inline-flex items-center gap-1.5 pl-3 pr-1 h-8 rounded-full bg-zinc-900 text-white text-[13px]">"{effectiveQuery}" <button onClick={() => window.location.href='/sklep'} className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center"><X className="w-3 h-3" /></button></span>}
                    {activeCategory && <span className="inline-flex items-center gap-1.5 pl-3 pr-1 h-8 rounded-full bg-zinc-100 border border-zinc-200 text-[13px]">{activeCategory} <button onClick={() => setActiveCategory('')} className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center"><X className="w-3 h-3" /></button></span>}
                    {activeSubcategory && <span className="inline-flex items-center gap-1.5 pl-3 pr-1 h-8 rounded-full bg-zinc-100 border border-zinc-200 text-[13px] capitalize">{activeSubcategory} <button onClick={() => setActiveSubcategory('')} className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center"><X className="w-3 h-3" /></button></span>}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <div className="hidden sm:flex items-center gap-1 p-1 rounded-full bg-zinc-100">
                  <button onClick={() => setViewMode('grid')} className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-zinc-500'}`}><Grid3X3 className="w-4 h-4" /></button>
                  <button onClick={() => setViewMode('list')} className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-zinc-500'}`}><List className="w-4 h-4" /></button>
                </div>
                <div className="relative">
                  <select value={sortBy} onChange={e => setSortBy(e.target.value as SortOption)} className="h-10 pl-4 pr-9 rounded-full bg-white border border-zinc-200 text-[14px] font-medium appearance-none focus:outline-none focus:border-zinc-900">
                    <option value="featured">Polecane</option>
                    <option value="price-asc">Cena: rosnąco</option>
                    <option value="price-desc">Cena: malejąco</option>
                    <option value="rating">Najlepiej oceniane</option>
                    <option value="newest">Nowości</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-zinc-500" />
                </div>
              </div>
            </div>

            {/* Mobile filters */}
            {showFilters && (
              <div className="lg:hidden rounded-2xl bg-white border border-zinc-200 p-5 mb-6 animate-fade-in">
                <div className="flex items-center justify-between mb-4"><h3 className="font-bold">Filtry</h3><button onClick={() => setShowFilters(false)} className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center"><X className="w-4 h-4" /></button></div>
                <div className="grid grid-cols-2 gap-2">
                  {mainCategories.map(cat => (
                    <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`h-12 rounded-xl border text-[13px] font-medium px-3 text-left ${activeCategory === cat.id ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-zinc-50 border-zinc-200'}`}>{cat.title}</button>
                  ))}
                </div>
                <label className="mt-4 flex items-center gap-2 text-[14px]"><input type="checkbox" checked={inStockOnly} onChange={e => setInStockOnly(e.target.checked)} /> Tylko dostępne</label>
              </div>
            )}

            {/* Results */}
            {filtered.length === 0 ? (
              <div className="rounded-[24px] bg-white border border-zinc-200 p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-zinc-100 mx-auto flex items-center justify-center mb-4"><Search className="w-8 h-8 text-zinc-400" /></div>
                <div className="font-bold text-[18px]">Brak produktów</div>
                <div className="text-[14px] text-zinc-600 mt-2">Spróbuj zmienić filtry lub wyszukaj np. "panel 153", "Forte", "Emka"</div>
                <button onClick={() => { setActiveCategory(''); setActiveSubcategory(''); setPriceRange([0,6000]); setInStockOnly(false) }} className="mt-6 h-11 px-6 rounded-full bg-zinc-900 text-white font-medium">Wyczyść filtry</button>
              </div>
            ) : (
              <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                {filtered.map(p => <ProductCard key={p.id} product={p} variant={viewMode === 'list' ? 'compact' : 'default'} />)}
              </div>
            )}

            {/* SEO content below products - as per brief */}
            {!effectiveQuery && (
              <div className="mt-16 rounded-[24px] bg-white border border-zinc-200 p-8 lg:p-10">
                <h2 className="font-bold text-[20px]">Ogrodzenia metalowe SILD - producent od 2008</h2>
                <div className="mt-4 grid lg:grid-cols-2 gap-6 text-[14px] leading-[1.7] text-zinc-600">
                  <p>Ogrodzenia panelowe 3D to najpopularniejszy wybór wśród klientów budujących domy jednorodzinne. Panele ocynkowane ogniowo i malowane proszkowo w kolorze RAL 7016 antracyt są odporne na korozję i nie wymagają konserwacji. W ofercie SILD znajdziesz panele fi4 i wzmocnione fi5, wysokości od 103 do 203cm, komplety z furtkami i bramami.</p>
                  <p>Systemy nowoczesne Forte, Linea, Moderno, Strato i Verto to propozycja dla wymagających. Profile zamknięte 80x20mm, spawy niewidoczne, malowanie strukturalne. Sztachety metalowe Emka, Astra, Polo cięte na wymiar co 1cm, dwustronnie malowane. Słupki 60x40, podmurówki prefabrykowane 250cm, bloczki Fini, akcesoria montażowe.</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['panel 3D 153cm', 'ogrodzenie Forte', 'sztacheta Emka', 'słupek 60x40', 'podmurówka 250', 'brama przesuwna', 'bloczki Fini'].map(tag => (
                    <Link key={tag} to={`/sklep?q=${encodeURIComponent(tag)}`} className="px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-[12px] font-medium transition-colors">#{tag}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
