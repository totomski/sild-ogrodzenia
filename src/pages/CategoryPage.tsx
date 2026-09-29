import { useParams, Link } from 'react-router-dom'
import { ArrowRight, Check, Calculator } from 'lucide-react'
import { mainCategories, modernSystems } from '../data/categories'
import { getProductsByCategory, getProductsBySystem, products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function CategoryPage() {
  const { category, system } = useParams()
  
  const categoryData = mainCategories.find(c => c.id === category || c.href.includes(category || ''))
  const isModern = category === 'ogrodzenia-nowoczesne' || category === 'nowoczesne'
  const systemData = system ? modernSystems.find(s => s.id === system) : null
  
  let displayProducts: typeof products = []
  let title = 'Kategoria'
  let desc = ''
  let image = ''
  
  if (system && isModern) {
    displayProducts = getProductsBySystem(system)
    title = `Ogrodzenie ${systemData?.name || system}`
    desc = systemData?.desc || ''
    image = systemData?.image || ''
  } else if (category) {
    const catId = category.includes('panelowe') ? 'panele-3d' : category.includes('nowoczesne') ? 'nowoczesne' : category.includes('sztachety') ? 'sztachety' : category.includes('bramy') ? 'bramy' : category.includes('elementy') ? 'elementy' : category
    displayProducts = getProductsByCategory(catId)
    if (displayProducts.length === 0) displayProducts = products.filter(p => p.category.includes(catId) || p.subcategory.includes(catId))
    title = categoryData?.title || category.replace(/-/g, ' ')
    desc = categoryData?.description || ''
    image = categoryData?.image || ''
  }

  if (isModern && !system) {
    return (
      <div className="min-h-screen bg-[#fafaf9]">
        <div className="bg-white border-b border-zinc-100">
          <div className="container-sild py-8 lg:py-12">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h1 className="font-black text-[32px] lg:text-[48px] leading-[0.9] tracking-[-0.04em]">Ogrodzenia nowoczesne</h1>
                <p className="mt-4 text-[16px] leading-[1.6] text-zinc-600 max-w-[560px]">Linea, Moderno, Forte, Strato, Verto — 5 systemów, jedna jakość. Profile zamknięte, spawy niewidoczne, malowanie strukturalne. Wybierz system, a potem produkt.</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {modernSystems.map(s => (
                    <Link key={s.id} to={`/kat-prod/ogrodzenia-nowoczesne/${s.id}`} className="px-4 h-10 rounded-full bg-zinc-900 text-white text-[14px] font-medium flex items-center gap-2 hover:bg-black">{s.name} <span className="opacity-60">od {s.priceFrom} zł/mb</span></Link>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 rounded-[24px] overflow-hidden aspect-[4/3] bg-zinc-100"><img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800" alt="" className="w-full h-full object-cover" /></div>
            </div>
          </div>
        </div>

        <div className="container-sild py-10">
          <h2 className="font-bold text-[20px] mb-6">Wybierz system</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modernSystems.map(sys => (
              <Link key={sys.id} to={`/kat-prod/ogrodzenia-nowoczesne/${sys.id}`} className="group rounded-[24px] overflow-hidden bg-white border border-zinc-200 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all">
                <div className="aspect-[16/10] overflow-hidden bg-zinc-100"><img src={sys.image} alt={sys.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
                <div className="p-6">
                  <div className="font-black text-[22px]">{sys.name}</div>
                  <div className="text-[14px] text-zinc-600 mt-1">{sys.desc}</div>
                  <div className="mt-4 flex items-center justify-between"><span className="font-semibold">od {sys.priceFrom} zł / mb</span><span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center group-hover:bg-black"><ArrowRight className="w-4 h-4" /></span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (systemData) {
    const systemProducts = displayProducts
    const types = [
      { id: 'przeslo', label: 'Przęsło', count: systemProducts.filter(p => p.subcategory === 'przesla').length },
      { id: 'furtka', label: 'Furtka', count: systemProducts.filter(p => p.subcategory === 'furtki').length },
      { id: 'brama-przesuwna', label: 'Brama przesuwna', count: systemProducts.filter(p => p.subcategory === 'bramy').length },
      { id: 'brama-dwuskrzydlowa', label: 'Brama dwuskrzydłowa', count: 0 },
    ]

    return (
      <div className="min-h-screen bg-[#fafaf9]">
        <div className="bg-white border-b border-zinc-100">
          <div className="container-sild py-8 lg:py-10">
            <div className="flex items-center gap-2 text-[13px] text-zinc-500 mb-4">
              <Link to="/" className="hover:text-zinc-900">Strona główna</Link> / <Link to="/kat-prod/ogrodzenia-nowoczesne" className="hover:text-zinc-900">Nowoczesne</Link> / <span className="text-zinc-900 font-medium">{systemData.name}</span>
            </div>
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                <h1 className="font-black text-[32px] lg:text-[44px] leading-[0.9] tracking-[-0.04em]">Ogrodzenie {systemData.name}</h1>
                <p className="mt-4 text-[15px] leading-[1.6] text-zinc-600 max-w-[560px]">System {systemData.name} — {systemData.desc}. Profile zamknięte, spawane, malowane proszkowo strukturalnie. Prześwit 20mm. Słupki 100x100mm. Najczęściej wybierany przez architektów.</p>
                
                <div className="mt-8">
                  <div className="font-bold text-[14px] tracking-widest uppercase text-zinc-500 mb-4">Co chcesz kupić?</div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {types.map(t => (
                      <div key={t.id} className="rounded-2xl border-2 border-zinc-900 bg-zinc-900 text-white p-4">
                        <div className="font-bold">{t.label}</div>
                        <div className="text-[12px] opacity-70 mt-1">{t.count > 0 ? `${t.count} produkty` : 'Na zamówienie'}</div>
                        <div className="mt-3 text-[13px] font-semibold">od {systemData.priceFrom} zł/mb</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="rounded-[24px] overflow-hidden aspect-[4/3] bg-zinc-100"><img src={systemData.image} alt={systemData.name} className="w-full h-full object-cover" /></div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-[12px]">
                  <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-3 text-center"><div className="font-bold">80x20mm</div><div className="text-zinc-500">Profil</div></div>
                  <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-3 text-center"><div className="font-bold">10 lat</div><div className="text-zinc-500">Gwarancja</div></div>
                  <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-3 text-center"><div className="font-bold">48h</div><div className="text-zinc-500">Dostawa</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-sild py-8">
          {systemProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {systemProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-[24px] border border-zinc-200">
              <div className="font-bold text-[18px]">Produkty {systemData.name} wkrótce</div>
              <div className="text-[14px] text-zinc-600 mt-2">Skonfiguruj wycenę lub zadzwoń 123 456 789</div>
              <Link to="/wycena/nowoczesne" className="mt-6 inline-flex h-11 px-6 rounded-full bg-zinc-900 text-white font-medium items-center gap-2"><Calculator className="w-4 h-4" /> Konfigurator {systemData.name}</Link>
            </div>
          )}

          <div className="mt-12 rounded-[24px] bg-white border border-zinc-200 p-8">
            <h2 className="font-bold text-[18px]">System {systemData.name} — specyfikacja</h2>
            <div className="mt-4 grid lg:grid-cols-3 gap-6 text-[14px] leading-[1.6] text-zinc-600">
              <div><h4 className="font-semibold text-zinc-900">Konstrukcja</h4><p className="mt-2">Profile zamknięte 80x20mm (Forte) lub 60x20mm (Moderno). Spawane, szlifowane, malowane proszkowo. Brak widocznych spawów.</p></div>
              <div><h4 className="font-semibold text-zinc-900">Montaż</h4><p className="mt-2">Słupki 100x100mm zabetonowane 80cm. Przęsła na uchwytach regulowanych. Bramy na wózkach jezdnych lub zawiasach.</p></div>
              <div><h4 className="font-semibold text-zinc-900">Kolory</h4><p className="mt-2">RAL 7016 antracyt, RAL 9005 czarny, RAL 9006 srebrny, struktura. Inne RAL-e na zamówienie +10%.</p></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <div className="bg-white border-b border-zinc-100">
        <div className="container-sild py-8 lg:py-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-black text-[32px] lg:text-[48px] leading-[0.9] tracking-[-0.04em] uppercase">{title}</h1>
              <p className="mt-4 text-[16px] leading-[1.6] text-zinc-600 max-w-[600px]">{desc || 'Kompletne systemy ogrodzeniowe. Panele, słupki, obejmy, podmurówki, bramy i furtki. Wszystko od producenta.'}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/wycena" className="h-11 px-5 rounded-full bg-amber-400 text-zinc-900 font-semibold flex items-center gap-2"><Calculator className="w-4 h-4" /> Policz komplet</Link>
                <span className="h-11 px-5 rounded-full bg-zinc-100 border border-zinc-200 flex items-center gap-2 text-[14px]"><Check className="w-4 h-4" /> {displayProducts.length} produktów • od ręki</span>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-[24px] overflow-hidden aspect-[16/10] bg-zinc-100"><img src={image || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'} alt={title} className="w-full h-full object-cover" /></div>
          </div>
        </div>
      </div>

      <div className="container-sild py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-[18px]">Produkty • {displayProducts.length}</h2>
          <Link to="/sklep" className="text-[14px] font-medium flex items-center gap-1 hover:gap-2 transition-all">Wszystkie produkty <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {displayProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        <div className="mt-12 rounded-[24px] bg-white border border-zinc-200 p-8">
          <h3 className="font-bold text-[18px]">Jak uprościliśmy panele 3D?</h3>
          <p className="mt-3 text-[14px] leading-[1.6] text-zinc-600">Zamiast: Ogrodzenia panelowe → Ogrodzenia panelowe 3D → Komplety ogrodzeń panelowych 3D → produkt. Teraz: Ogrodzenia panelowe 3D → Co chcesz kupić? Kompletne ogrodzenie 3D / Same panele / Brama / Furtka / Słupki i akcesoria. Jeden ekran, 5 jasnych ścieżek. Kalkulator wysoko na stronie.</p>
        </div>
      </div>
    </div>
  )
}
