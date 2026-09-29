import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ShoppingBag, Menu, X, Phone, User, Search, ChevronDown, MapPin } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useSearch } from '../context/SearchContext'
import SearchBar from './SearchBar'

const menuItems = [
  { label: 'Ogrodzenia panelowe', href: '/kat-prod/ogrodzenia-panelowe', children: [
    { label: 'Komplety 3D', href: '/kat-prod/ogrodzenia-panelowe/komplety' },
    { label: 'Panele 3D', href: '/kat-prod/ogrodzenia-panelowe/panele' },
    { label: 'Bramy panelowe', href: '/kat-prod/ogrodzenia-panelowe/bramy' },
    { label: 'Furtki panelowe', href: '/kat-prod/ogrodzenia-panelowe/furtki' },
  ]},
  { label: 'Ogrodzenia nowoczesne', href: '/kat-prod/ogrodzenia-nowoczesne', children: [
    { label: 'Linea', href: '/kat-prod/ogrodzenia-nowoczesne/linea' },
    { label: 'Moderno', href: '/kat-prod/ogrodzenia-nowoczesne/moderno' },
    { label: 'Forte', href: '/kat-prod/ogrodzenia-nowoczesne/forte' },
    { label: 'Strato', href: '/kat-prod/ogrodzenia-nowoczesne/strato' },
    { label: 'Verto', href: '/kat-prod/ogrodzenia-nowoczesne/verto' },
  ]},
  { label: 'Sztachety metalowe', href: '/kat-prod/sztachety-metalowe', children: [
    { label: 'Astra', href: '/kat-prod/sztachety-metalowe/astra' },
    { label: 'Emka', href: '/kat-prod/sztachety-metalowe/emka' },
    { label: 'Polo', href: '/kat-prod/sztachety-metalowe/polo' },
    { label: 'Wszystkie wzory', href: '/kat-prod/sztachety-metalowe' },
  ]},
  { label: 'Bramy i furtki', href: '/kat-prod/bramy-furtki' },
  { label: 'Elementy ogrodzenia', href: '/kat-prod/elementy-ogrodzenia', children: [
    { label: 'Słupki', href: '/kat-prod/elementy-ogrodzenia/slupki' },
    { label: 'Podmurówki', href: '/kat-prod/elementy-ogrodzenia/podmurówki' },
    { label: 'Bloczki Fini', href: '/kat-prod/elementy-ogrodzenia/bloczki' },
    { label: 'Akcesoria', href: '/kat-prod/elementy-ogrodzenia/akcesoria' },
  ]},
  { label: 'Wycena ogrodzenia', href: '/wycena', highlight: true },
]

const secondaryMenu = [
  { label: 'Realizacje', href: '/realizacje' },
  { label: 'Porady', href: '/porady' },
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { itemCount, toggleCart } = useCart()
  const { query, setQuery } = useSearch()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0f1f33] text-white text-[13px] hidden lg:block">
        <div className="container-sild flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> Produkcja: Podkarpacie • Dostawa 48h w całej PL</span>
            <span className="opacity-60">|</span>
            <span>⭐ 4.8/5 na Google (342 opinie)</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/dostawa" className="hover:text-white/80">Dostawa i płatność</Link>
            <Link to="/montaz" className="hover:text-white/80">Montaż</Link>
            <Link to="/gwarancja" className="hover:text-white/80">Gwarancja 10 lat</Link>
            <a href="tel:+48123456789" className="font-semibold flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> 123 456 789</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b transition-all ${scrolled ? 'shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-zinc-200' : 'border-zinc-100'}`}>
        <div className="container-sild">
          <div className="flex items-center gap-4 lg:gap-8 h-[68px] lg:h-[84px]">
            {/* Logo - Official SILD */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <div className="hidden lg:block">
                <img src="/logo-sild-compact.svg" alt="SILD Systemy Ogrodzeń Strzeszewski" className="h-[52px] w-auto object-contain group-hover:opacity-90 transition-opacity" />
              </div>
              <div className="lg:hidden flex items-center gap-2.5">
                <div className="w-10 h-[42px] bg-[#12395A] shrink-0" />
                <div className="w-[42px] h-[42px] relative shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <g stroke="#000" strokeWidth="2.4" fill="none" strokeLinecap="square">
                      <path d="M0 0 H85 V85"/>
                      <path d="M8 8 H77 V77"/>
                      <path d="M16 16 H69 V69"/>
                      <path d="M24 24 H61 V61"/>
                      <path d="M32 32 H53 V53"/>
                      <rect x="36" y="36" width="13" height="13" strokeWidth="2.4"/>
                      <line x1="0" y1="58" x2="45" y2="58"/>
                      <line x1="0" y1="64" x2="45" y2="64"/>
                      <line x1="0" y1="70" x2="45" y2="70"/>
                      <line x1="0" y1="76" x2="45" y2="76"/>
                      <line x1="0" y1="82" x2="45" y2="82"/>
                    </g>
                  </svg>
                </div>
                <div className="leading-none">
                  <div className="font-light text-[28px] tracking-[0.02em] text-black -mb-1">SILD</div>
                  <div className="text-[8px] tracking-[0.18em] font-semibold text-zinc-600">SYSTEMY OGRODZEŃ</div>
                </div>
              </div>
            </Link>

            {/* Big Search - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-[640px] mx-8 relative">
              <div className="relative w-full group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-[#1e3a5f] transition-colors" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && query.trim()) {
                      navigate(`/sklep?q=${encodeURIComponent(query)}`)
                    }
                  }}
                  placeholder="Czego szukasz? np. panel 3D 153 cm, słupek, Forte..."
                  className="w-full h-[48px] pl-12 pr-4 rounded-full bg-zinc-100 border border-zinc-200 focus:bg-white focus:border-[#1e3a5f] focus:ring-4 focus:ring-[#1e3a5f]/10 outline-none transition-all text-[15px] placeholder:text-zinc-500"
                />
                {query && (
                  <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-zinc-200 hover:bg-zinc-300 flex items-center justify-center">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              {/* Search dropdown */}
              {query.length >= 2 && (
                <div className="absolute top-[56px] left-0 right-0 z-50">
                  <SearchBar compact={false} />
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 lg:gap-2 ml-auto">
              <a href="tel:+48123456789" className="hidden xl:flex items-center gap-3 pl-3 pr-5 h-[44px] rounded-full bg-zinc-900 text-white hover:bg-black transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center"><Phone className="w-4 h-4" /></div>
                <div className="text-left leading-tight">
                  <div className="text-[11px] opacity-70">Zadzwoń</div>
                  <div className="text-[13px] font-semibold -mt-0.5">123 456 789</div>
                </div>
              </a>

              <button className="w-11 h-11 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors">
                <User className="w-5 h-5 text-zinc-700" />
              </button>

              <button onClick={toggleCart} className="relative w-11 h-11 rounded-full bg-[#1e3a5f] hover:bg-[#152a45] text-white flex items-center justify-center transition-colors shadow-[0_4px_12px_rgba(30,58,95,0.25)]">
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-amber-400 text-[#1e3a5f] text-[11px] font-bold flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>

              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-11 h-11 rounded-full bg-zinc-100 flex items-center justify-center">
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-1 h-[52px] border-t border-zinc-100 -mx-2">
            {menuItems.map(item => (
              <div key={item.label} className="relative" onMouseEnter={() => setActiveDropdown(item.label)} onMouseLeave={() => setActiveDropdown(null)}>
                <Link
                  to={item.href}
                  className={`flex items-center gap-1.5 px-3.5 h-9 rounded-full text-[14px] font-medium transition-all ${
                    item.highlight
                      ? 'bg-amber-400 text-zinc-900 hover:bg-amber-300 font-semibold'
                      : activeDropdown === item.label || location.pathname.startsWith(item.href)
                        ? 'bg-zinc-900 text-white'
                        : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-zinc-200 p-2 min-w-[240px] animate-scale-in">
                      {item.children.map(child => (
                        <Link key={child.label} to={child.href} className="flex items-center px-4 h-11 rounded-xl hover:bg-zinc-50 text-[14px] font-medium text-zinc-700 hover:text-zinc-900 transition-colors">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="w-px h-6 bg-zinc-200 mx-3" />
            {secondaryMenu.map(item => (
              <Link key={item.label} to={item.href} className="px-3.5 h-9 flex items-center rounded-full text-[14px] font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-zinc-100 bg-white animate-fade-in max-h-[calc(100vh-68px)] overflow-auto">
            <div className="p-4">
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Szukaj np. panel 3D 153 cm..."
                  className="w-full h-12 pl-12 pr-4 rounded-full bg-zinc-100 border border-zinc-200 focus:bg-white focus:border-zinc-900 outline-none"
                />
              </div>
              {query.length >= 2 && <div className="mb-4"><SearchBar compact /></div>}

              <div className="space-y-1">
                {menuItems.map(item => (
                  <div key={item.label}>
                    <Link to={item.href} className={`flex items-center justify-between px-4 h-12 rounded-xl font-medium ${item.highlight ? 'bg-amber-400 text-zinc-900' : 'bg-zinc-50 text-zinc-900'}`}>
                      {item.label}
                      {item.children && <ChevronDown className="w-4 h-4" />}
                    </Link>
                    {item.children && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.children.map(child => (
                          <Link key={child.label} to={child.href} className="flex items-center px-4 h-10 rounded-xl bg-zinc-50/70 text-[14px] text-zinc-600">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3 mt-3 border-t border-zinc-100 flex gap-2">
                  {secondaryMenu.map(item => (
                    <Link key={item.label} to={item.href} className="flex-1 h-11 rounded-xl bg-zinc-100 flex items-center justify-center text-[14px] font-medium">
                      {item.label}
                    </Link>
                  ))}
                </div>
                <a href="tel:+48123456789" className="mt-4 flex items-center justify-center gap-2 h-12 rounded-xl bg-zinc-900 text-white font-medium">
                  <Phone className="w-4 h-4" /> Zadzwoń: 123 456 789
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
