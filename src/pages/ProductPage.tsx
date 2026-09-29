import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Heart, Share2, Truck, Shield, Clock, Check, ChevronRight, Minus, Plus, ShoppingBag, Ruler, Palette, Award, MessageCircle, ChevronDown } from 'lucide-react'
import { getProductBySlug, products } from '../data/products'
import { formatPrice } from '../utils/cn'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'
import { getReviewsForProduct } from '../data/reviews'

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug || '')
  const [activeImage, setActiveImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedHeight, setSelectedHeight] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [showFullDesc, setShowFullDesc] = useState(false)
  const { addItem } = useCart()

  if (!product) {
    return (
      <div className="container-sild py-20 text-center">
        <div className="font-bold text-[24px]">Produkt nie znaleziony</div>
        <Link to="/sklep" className="mt-4 inline-flex h-11 px-6 rounded-full bg-zinc-900 text-white items-center">Wróć do sklepu</Link>
      </div>
    )
  }

  const reviews = getReviewsForProduct(product.id)
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAdd = () => {
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: product.images[activeImage],
      price: product.price,
      originalPrice: product.originalPrice,
      variant: {
        color: product.colors[selectedColor],
        height: product.heights?.[selectedHeight]
      },
      leadTime: product.leadTime,
      quantity
    })
  }

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-zinc-100">
        <div className="container-sild py-3 flex items-center gap-2 text-[13px] text-zinc-500 overflow-auto scrollbar-hide">
          <Link to="/" className="hover:text-zinc-900">Strona główna</Link><ChevronRight className="w-3 h-3" />
          <Link to="/sklep" className="hover:text-zinc-900">Sklep</Link><ChevronRight className="w-3 h-3" />
          <Link to={`/kat-prod/${product.category}`} className="hover:text-zinc-900 capitalize">{product.category.replace('-', ' ')}</Link><ChevronRight className="w-3 h-3" />
          <span className="text-zinc-900 font-medium truncate">{product.name}</span>
        </div>
      </div>

      <div className="container-sild py-6 lg:py-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div className="rounded-[24px] bg-white border border-zinc-200 overflow-hidden">
              <div className="aspect-[4/3] lg:aspect-[4/3] relative bg-zinc-50">
                <img src={product.images[activeImage]} alt={product.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isBestseller && <span className="px-3 py-1.5 rounded-full bg-zinc-900 text-white text-[11px] font-bold tracking-wide">BESTSELLER</span>}
                  {product.isPromo && <span className="px-3 py-1.5 rounded-full bg-red-500 text-white text-[11px] font-bold">PROMO -{product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : ''}%</span>}
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow flex items-center justify-center hover:bg-white"><Heart className="w-5 h-5" /></button>
                  <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow flex items-center justify-center hover:bg-white"><Share2 className="w-5 h-5" /></button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur text-white text-[12px] font-medium">Zdjęcie {activeImage + 1} / {product.images.length}</div>
                  <div className="hidden lg:flex gap-2">
                    {product.specs.slice(0, 2).map(s => (
                      <span key={s.label} className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[12px] font-medium">{s.label}: {s.value}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-3 flex gap-3 overflow-auto scrollbar-hide">
                {product.images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImage(i)} className={`w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${activeImage === i ? 'border-zinc-900' : 'border-zinc-100 hover:border-zinc-300'}`}>
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Trust below gallery - desktop */}
            <div className="mt-6 hidden lg:grid grid-cols-3 gap-3">
              {[
                { icon: Truck, title: 'Dostawa 48h', desc: 'Kurier lub własny transport' },
                { icon: Shield, title: 'Gwarancja 10 lat', desc: 'Na konstrukcję i powłokę' },
                { icon: Award, title: 'Montaż', desc: 'Ekipy w 6 województwach' },
              ].map(item => (
                <div key={item.title} className="rounded-2xl bg-white border border-zinc-200 p-4 flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0"><item.icon className="w-5 h-5" /></div>
                  <div><div className="font-semibold text-[13px]">{item.title}</div><div className="text-[12px] text-zinc-500 leading-tight">{item.desc}</div></div>
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5">
            <div className="rounded-[24px] bg-white border border-zinc-200 p-6 lg:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-zinc-500">
                    <span>{product.category}</span><span>•</span><span className="text-[#1e3a5f]">{product.subcategory}</span>{product.system && <><span>•</span><span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">{product.system}</span></>}
                  </div>
                  <h1 className="mt-3 font-black text-[24px] lg:text-[28px] leading-[1.1] tracking-[-0.02em]">{product.name}</h1>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-zinc-300'}`} />
                  ))}
                </div>
                <span className="font-semibold text-[14px]">{product.rating}</span>
                <span className="text-[13px] text-zinc-500">({product.reviews} opinii)</span>
                <span className="w-px h-4 bg-zinc-200" />
                <span className="text-[13px] text-emerald-600 font-medium flex items-center gap-1"><Check className="w-4 h-4" /> Dostępny</span>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <div className="flex items-baseline gap-3">
                  <span className="font-black text-[32px] tracking-tight">{formatPrice(product.price)}</span>
                  <span className="text-zinc-500">/ {product.pricePer}</span>
                  {product.originalPrice && <span className="ml-auto text-[14px] line-through text-zinc-400">{formatPrice(product.originalPrice)}</span>}
                </div>
                <div className="mt-2 flex items-center gap-2 text-[12px]">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200"><Clock className="w-3.5 h-3.5" /> Realizacja: {product.leadTime}</span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200"><Truck className="w-3.5 h-3.5" /> Darmowa dostawa od 1500 zł</span>
                </div>
              </div>

              {/* Variants */}
              <div className="mt-6 space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-[13px] tracking-wide uppercase text-zinc-600 flex items-center gap-2"><Palette className="w-4 h-4" /> Kolor: <span className="text-zinc-900 normal-case tracking-normal">{product.colors[selectedColor]}</span></span>
                    <button className="text-[12px] font-medium text-[#1e3a5f] hover:underline">Wzornik kolorów</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, i) => (
                      <button key={color} onClick={() => setSelectedColor(i)} className={`group relative px-4 h-10 rounded-full border-2 text-[13px] font-medium transition-all ${selectedColor === i ? 'border-zinc-900 bg-zinc-900 text-white' : 'border-zinc-200 bg-white hover:border-zinc-300'}`}>
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full border border-black/10" style={{ backgroundColor: color.includes('7016') ? '#383E42' : color.includes('9005') ? '#0A0A0A' : color.includes('6005') ? '#0B3D2E' : color.includes('8017') ? '#5C4033' : '#D4A574' }} />
                          {color}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {product.heights && (
                  <div>
                    <div className="font-semibold text-[13px] tracking-wide uppercase text-zinc-600 mb-3 flex items-center gap-2"><Ruler className="w-4 h-4" /> Wysokość</div>
                    <div className="flex flex-wrap gap-2">
                      {product.heights.map((h, i) => (
                        <button key={h} onClick={() => setSelectedHeight(i)} className={`px-4 h-10 rounded-full border text-[13px] font-medium transition-all ${selectedHeight === i ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white border-zinc-200 hover:border-zinc-300'}`}>{h}</button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Quantity + Add */}
              <div className="mt-8 flex gap-3">
                <div className="flex items-center gap-2 h-[52px] px-2 rounded-full bg-zinc-100 border border-zinc-200">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center hover:bg-zinc-50"><Minus className="w-4 h-4" /></button>
                  <span className="w-10 text-center font-bold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center hover:bg-zinc-50"><Plus className="w-4 h-4" /></button>
                </div>
                <button onClick={handleAdd} className="flex-1 h-[52px] rounded-full bg-zinc-900 hover:bg-black text-white font-semibold flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all">
                  <ShoppingBag className="w-5 h-5" /> Dodaj do koszyka • {formatPrice(product.price * quantity)}
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-[12px]">
                <div className="flex items-center gap-2 text-zinc-600"><Check className="w-4 h-4 text-emerald-600" /> Faktura VAT 23%</div>
                <div className="flex items-center gap-2 text-zinc-600"><Check className="w-4 h-4 text-emerald-600" /> Zwrot 14 dni</div>
                <div className="flex items-center gap-2 text-zinc-600"><Check className="w-4 h-4 text-emerald-600" /> Gwarancja 10 lat</div>
                <div className="flex items-center gap-2 text-zinc-600"><Check className="w-4 h-4 text-emerald-600" /> Instrukcja video</div>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 flex gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center shrink-0"><MessageCircle className="w-5 h-5" /></div>
                <div className="text-[13px] leading-[1.5]"><span className="font-semibold">Nie wiesz ile potrzebujesz?</span> Zadzwoń 123 456 789 — policzymy komplet w 10 minut. Wycena gratis, bez zobowiązań.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Description + Specs */}
        <div className="mt-8 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-8">
            {/* Short then long - as per brief: products first, SEO later */}
            <div className="rounded-[24px] bg-white border border-zinc-200 p-6 lg:p-8">
              <h2 className="font-bold text-[20px]">Opis produktu</h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-zinc-700">{product.description}</p>
              <div className={`mt-4 text-[14px] leading-[1.7] text-zinc-600 ${!showFullDesc ? 'line-clamp-3' : ''}`}>{product.longDescription}</div>
              <button onClick={() => setShowFullDesc(!showFullDesc)} className="mt-4 text-[13px] font-semibold text-[#1e3a5f] flex items-center gap-1 hover:gap-2 transition-all">
                {showFullDesc ? 'Zwiń opis' : 'Czytaj więcej'} <ChevronDown className={`w-4 h-4 transition-transform ${showFullDesc ? 'rotate-180' : ''}`} />
              </button>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {product.specs.map(spec => (
                  <div key={spec.label} className="flex justify-between py-3 border-b border-zinc-100 text-[14px]">
                    <span className="text-zinc-500">{spec.label}</span><span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="rounded-[24px] bg-white border border-zinc-200 p-6 lg:p-8">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-[20px]">Opinie klientów • {product.rating} / 5</h2>
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-[12px] font-medium">{reviews.length} opinii</span>
              </div>
              <div className="mt-6 space-y-6">
                {reviews.map(r => (
                  <div key={r.id} className="pb-6 border-b border-zinc-100 last:border-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-[13px]">{r.author[0]}</div>
                        <div>
                          <div className="font-semibold text-[14px] flex items-center gap-2">{r.author} {r.verified && <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">ZWERYFIKOWANY ZAKUP</span>}</div>
                          <div className="text-[12px] text-zinc-500">{r.location} • {r.date}</div>
                          <div className="flex gap-0.5 mt-1">{[...Array(5)].map((_, i) => <Star key={i} className={`w-3.5 h-3.5 ${i < r.rating ? 'fill-amber-400 text-amber-400' : 'text-zinc-300'}`} />)}</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="font-semibold text-[14px]">{r.title}</div>
                      <p className="mt-2 text-[14px] leading-[1.6] text-zinc-700">{r.content}</p>
                      {r.images && <div className="mt-3 flex gap-2">{r.images.map((img, i) => <img key={i} src={img} alt="" className="w-20 h-20 rounded-xl object-cover border border-zinc-200" />)}</div>}
                    </div>
                    {r.response && (
                      <div className="mt-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                        <div className="text-[12px] font-semibold tracking-widest uppercase text-zinc-500">Odpowiedź SILD • {r.response.date}</div>
                        <p className="mt-2 text-[13px] leading-[1.5] text-zinc-700">{r.response.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-[24px] bg-[#0f1f33] text-white p-6">
              <h3 className="font-bold text-[16px]">Co zawiera zestaw?</h3>
              <div className="mt-4 space-y-3 text-[14px]">
                {[
                  'Produkt główny z powłoką RAL',
                  'Komplet śrub i obejm (jeśli dotyczy)',
                  'Daszki i zaślepki',
                  'Instrukcja montażu + video',
                  'Karta gwarancyjna 10 lat',
                  'Faktura VAT 23%'
                ].map(item => (
                  <div key={item} className="flex gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span className="text-white/80">{item}</span></div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] bg-white border border-zinc-200 p-6">
              <h3 className="font-bold">Często kupowane razem</h3>
              <div className="mt-4 space-y-3">
                {products.filter(p => p.category === 'elementy').slice(0, 3).map(p => (
                  <Link key={p.id} to={`/produkt/${p.slug}`} className="flex gap-3 p-2 rounded-xl hover:bg-zinc-50 border border-transparent hover:border-zinc-200 transition-colors">
                    <img src={p.image} alt={p.name} className="w-14 h-14 rounded-xl object-cover bg-zinc-100" />
                    <div className="flex-1 min-w-0"><div className="text-[13px] font-medium line-clamp-2">{p.name}</div><div className="text-[12px] font-bold mt-1">{formatPrice(p.price)}</div></div>
                    <button className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0"><Plus className="w-4 h-4" /></button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-12">
          <h2 className="font-bold text-[20px] mb-6">Podobne produkty • {product.category}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
