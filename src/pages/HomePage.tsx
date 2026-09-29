import { Link } from 'react-router-dom'
import { ArrowRight, Check, Star, Truck, Calculator, Ruler, Palette, Clock, Phone, Award, Users, Zap } from 'lucide-react'
import { mainCategories, calculators, trustElements, modernSystems } from '../data/categories'
import { getFeaturedProducts } from '../data/products'
import CategoryTile from '../components/CategoryTile'
import ProductCard from '../components/ProductCard'
import { googleReviews } from '../data/reviews'

export default function HomePage() {
  const featured = getFeaturedProducts()

  return (
    <div className="min-h-screen">
      {/* Hero - Task oriented */}
      <section className="relative overflow-hidden bg-[#fafaf9]">
        <div className="container-sild py-8 lg:py-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e3a5f]/10 border border-[#1e3a5f]/10 text-[#1e3a5f] text-[12px] font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> PRODUCENT • DOSTAWA 48H • MONTAŻ
              </div>
              <h1 className="mt-6 font-black text-[36px] sm:text-[48px] lg:text-[64px] leading-[0.9] tracking-[-0.04em] text-zinc-900">
                Znajdź ogrodzenie
                <br />
                <span className="text-[#1e3a5f]">lub element</span>
                <br />
                w 60 sekund
              </h1>
              <p className="mt-6 text-[17px] leading-[1.6] text-zinc-600 max-w-[560px]">
                Nie musisz rozumieć różnicy między „Ofertą” a „Sklepem”. Wybierz co chcesz kupić — resztą zajmiemy się my. Panele 3D, systemy nowoczesne Forte, sztachety cięte na wymiar.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/sklep" className="h-12 px-7 rounded-full bg-zinc-900 text-white font-semibold flex items-center gap-2 hover:bg-black hover:-translate-y-0.5 shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all">
                  Przeglądaj wszystkie produkty <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/wycena" className="h-12 px-7 rounded-full bg-white border border-zinc-200 font-semibold flex items-center gap-2 hover:bg-zinc-50 transition-colors">
                  <Calculator className="w-4 h-4" /> Wycena w 2 min
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${10+i}`} alt="" className="w-9 h-9 rounded-full border-2 border-white" />
                  ))}
                </div>
                <div className="text-[13px]">
                  <div className="flex items-center gap-1 font-semibold"><Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.8/5 na Google • 342 opinie</div>
                  <div className="text-zinc-500">Klienci budujący domy jednorodzinne</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[32px] overflow-hidden bg-zinc-900 aspect-[4/3] lg:aspect-[4/3.5] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.4)]">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Ogrodzenie Forte" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <div className="inline-flex px-2.5 py-1 rounded-full bg-white/15 backdrop-blur text-[11px] font-semibold tracking-widest">REALIZACJA • WARSZAWA</div>
                  <div className="mt-3 font-bold text-[20px] leading-tight">Forte 80x20 + brama przesuwna 4m<br />45mb • Montaż 2 dni</div>
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1.5 flex items-center gap-2 shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[12px] font-semibold">Dostępny od ręki</span>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-zinc-100 p-4 hidden lg:flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center"><Truck className="w-6 h-6 text-emerald-600" /></div>
                <div>
                  <div className="font-bold text-[14px]">Dostawa 48h</div>
                  <div className="text-[12px] text-zinc-500">Zamów dziś, jutro wysyłka</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-zinc-900 text-white rounded-2xl shadow-xl p-4 hidden lg:block">
                <div className="text-[11px] tracking-widest opacity-60">OD 2008</div>
                <div className="font-black text-[24px] leading-none mt-1">16k+</div>
                <div className="text-[12px] opacity-70">ogrodzeń</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tiles - Main entry */}
      <section className="py-10 lg:py-16">
        <div className="container-sild">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-black text-[28px] lg:text-[36px] tracking-[-0.02em] leading-[0.95]">Co chcesz kupić?</h2>
              <p className="mt-3 text-[15px] text-zinc-600 max-w-[560px]">Sześć jednoznacznych ścieżek. Kliknij cały kafel, nie szukaj drobnego napisu. Tak powinno wyglądać wejście do sklepu.</p>
            </div>
            <Link to="/sklep" className="hidden lg:flex items-center gap-2 text-[14px] font-semibold hover:gap-3 transition-all">Zobacz wszystkie kategorie <ArrowRight className="w-4 h-4" /></Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {mainCategories.map((cat, i) => (
              <CategoryTile key={cat.id} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Calculators - Second entry */}
      <section className="py-10 lg:py-16 bg-white border-y border-zinc-100">
        <div className="container-sild">
          <div className="max-w-[720px] mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[12px] font-semibold"><Calculator className="w-3.5 h-3.5" /> NARZĘDZIA SILD • UŻYWANE 2,4K RAZY W MIESIĄCU</div>
            <h2 className="mt-4 font-black text-[28px] lg:text-[40px] leading-[0.95] tracking-[-0.02em]">Nie wiesz, czego potrzebujesz?<br />Policz kompletne ogrodzenie</h2>
            <p className="mt-4 text-[15px] text-zinc-600">To najmocniejszy element SILD. Nie chowamy kalkulatorów w strukturze kategorii. Robimy z nich główną metodę wejścia.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
            {calculators.map(calc => (
              <Link key={calc.id} to={calc.href} className={`group relative rounded-[24px] border-2 p-6 lg:p-7 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all ${calc.color}`}>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-zinc-200 flex items-center justify-center text-[20px]">{calc.icon}</div>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-[11px] font-semibold flex items-center gap-1"><Clock className="w-3 h-3" /> {calc.time}</span>
                </div>
                <h3 className="mt-5 font-bold text-[18px] leading-tight">{calc.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-zinc-600">{calc.desc}</p>
                <div className="mt-6 flex items-center gap-2">
                  <span className="h-10 px-5 rounded-full bg-zinc-900 text-white font-semibold text-[14px] flex items-center gap-2 group-hover:bg-black group-hover:gap-3 transition-all">{calc.cta} <ArrowRight className="w-4 h-4" /></span>
                  <span className="text-[12px] text-zinc-500">Bez rejestracji</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Modern systems */}
      <section className="py-10 lg:py-16">
        <div className="container-sild">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-black text-[24px] lg:text-[32px] tracking-tight">Ogrodzenia nowoczesne</h2>
              <p className="text-zinc-600 mt-2">Linea, Moderno, Forte, Strato, Verto — 5 systemów, jedna jakość</p>
            </div>
            <Link to="/kat-prod/ogrodzenia-nowoczesne" className="hidden lg:flex h-10 px-5 rounded-full bg-white border border-zinc-200 font-medium text-[14px] items-center gap-2 hover:bg-zinc-50">Porównaj systemy <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
            {modernSystems.map(sys => (
              <Link key={sys.id} to={`/kat-prod/ogrodzenia-nowoczesne/${sys.id}`} className="group rounded-[20px] overflow-hidden bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all">
                <div className="aspect-[4/3] overflow-hidden bg-zinc-100"><img src={sys.image} alt={sys.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
                <div className="p-4">
                  <div className="font-bold text-[16px]">{sys.name}</div>
                  <div className="text-[12px] text-zinc-500 mt-1 line-clamp-1">{sys.desc}</div>
                  <div className="mt-3 flex items-center justify-between"><span className="text-[13px] font-semibold">od {sys.priceFrom} zł/mb</span><span className="w-7 h-7 rounded-full bg-zinc-100 group-hover:bg-zinc-900 group-hover:text-white flex items-center justify-center transition-colors"><ArrowRight className="w-3.5 h-3.5" /></span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular products */}
      <section className="py-10 lg:py-16 bg-white border-y border-zinc-100">
        <div className="container-sild">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-black text-[24px] lg:text-[32px] tracking-tight flex items-center gap-3"><Zap className="w-7 h-7 text-amber-500" /> Najczęściej wybierane</h2>
              <p className="text-zinc-600 mt-2">Produkty z wystarczającą ilością informacji na karcie — nie musisz otwierać każdego</p>
            </div>
            <Link to="/sklep" className="hidden lg:flex h-10 px-5 rounded-full bg-zinc-900 text-white font-medium text-[14px] items-center gap-2 hover:bg-black">Zobacz wszystkie <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Help choosing */}
      <section className="py-12 lg:py-20">
        <div className="container-sild">
          <div className="rounded-[32px] bg-[#0f1f33] text-white p-8 lg:p-12 overflow-hidden relative">
            <div className="absolute inset-0 opacity-20"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200" alt="" className="w-full h-full object-cover" /></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f33] via-[#0f1f33]/90 to-[#0f1f33]/60" />
            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <h2 className="font-black text-[28px] lg:text-[40px] leading-[0.9] tracking-tight">Nie wiesz, jakie ogrodzenie wybrać?</h2>
                <p className="mt-4 text-[15px] leading-[1.6] text-white/70">Pomożemy dobrać system do domu, budżetu i potrzeb. 15 minut rozmowy oszczędza tygodnie wahania.</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { label: 'Panelowe 3D', desc: 'Najtańsze, szybki montaż', href: '/porady/panelowe-czy-nowoczesne' },
                    { label: 'Nowoczesne', desc: 'Design, prestiż, prywatność', href: '/porady/nowoczesne' },
                    { label: 'Sztachety', desc: 'Klasyka, przewiewne', href: '/porady/sztachety' },
                    { label: 'Z montażem', desc: 'Kompleksowo, pod klucz', href: '/montaz' },
                  ].map(item => (
                    <Link key={item.label} to={item.href} className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 backdrop-blur text-[13px] font-medium transition-colors">
                      <span className="font-semibold">{item.label}</span> <span className="opacity-60">• {item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Ruler, title: 'Pomiar gratis', desc: 'W promieniu 50km od produkcji', cta: 'Umów pomiar' },
                  { icon: Palette, title: 'Wzornik kolorów', desc: '12 kolorów RAL + 4 drewnopodobne', cta: 'Zobacz kolory' },
                  { icon: Phone, title: 'Doradca SILD', desc: '123 456 789 • Pn-Pt 7-17', cta: 'Zadzwoń teraz' },
                ].map(card => (
                  <div key={card.title} className="rounded-2xl bg-white text-zinc-900 p-5">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center"><card.icon className="w-5 h-5" /></div>
                    <div className="font-bold mt-4">{card.title}</div>
                    <div className="text-[13px] text-zinc-600 mt-1">{card.desc}</div>
                    <button className="mt-4 h-9 px-4 rounded-full bg-zinc-900 text-white text-[13px] font-medium w-full">{card.cta}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-10 lg:py-16 bg-white border-y border-zinc-100">
        <div className="container-sild">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-black text-[24px] lg:text-[32px] tracking-tight">Realizacje SILD • {trustElements.reviews.rating}/5 na Google</h2>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {trustElements.realizations.map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-100"><img src={img} alt="Realizacja" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" /></div>
                ))}
              </div>
              <Link to="/realizacje" className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold hover:gap-3 transition-all">Zobacz 120+ realizacji <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {googleReviews.map(r => (
                  <div key={r.id} className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50/50">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-[13px]">{r.author[0]}</div>
                      <div><div className="font-semibold text-[13px]">{r.author}</div><div className="flex items-center gap-1"><Star className="w-3 h-3 fill-amber-400 text-amber-400" /><span className="text-[11px]">{r.rating} • {r.date}</span></div></div>
                    </div>
                    <p className="mt-3 text-[13px] leading-[1.5] text-zinc-700">"{r.content}"</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
                {trustElements.features.map(f => (
                  <div key={f.title} className="rounded-2xl border border-zinc-200 p-4">
                    <div className="text-[20px]">{f.icon}</div>
                    <div className="font-bold text-[14px] mt-2">{f.title}</div>
                    <div className="text-[12px] text-zinc-600">{f.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-8 text-[13px]">
                <div className="flex items-center gap-2"><Users className="w-4 h-4" /> <span><strong>16 342</strong> ogrodzenia od 2008</span></div>
                <div className="flex items-center gap-2"><Award className="w-4 h-4" /> <span><strong>10 lat</strong> gwarancji</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> <span>Faktura VAT 23%</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
