export interface CategoryTile {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  count: number;
  color: string;
  featured?: boolean;
}

export const mainCategories: CategoryTile[] = [
  {
    id: 'panele-3d',
    title: 'OGRODZENIA PANELOWE 3D',
    subtitle: 'Komplety, panele, bramy i furtki',
    description: 'Kompletne systemy od 89 zł/mb. Panele ocynkowane i malowane proszkowo.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop',
    href: '/kat-prod/ogrodzenia-panelowe',
    count: 48,
    color: 'from-slate-900 to-slate-700',
    featured: true
  },
  {
    id: 'nowoczesne',
    title: 'OGRODZENIA NOWOCZESNE',
    subtitle: 'Linea, Moderno, Forte, Strato, Verto',
    description: 'Minimalistyczny design. 5 systemów, nieskończone możliwości.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop',
    href: '/kat-prod/ogrodzenia-nowoczesne',
    count: 62,
    color: 'from-zinc-800 to-zinc-600',
    featured: true
  },
  {
    id: 'sztachety',
    title: 'SZTACHETY METALOWE',
    subtitle: '6 wzorów, konfigurator na wymiar',
    description: 'Astra, Sigma, Polo, Emka, Estetic, Standard. Cięte na wymiar.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop',
    href: '/kat-prod/sztachety-metalowe',
    count: 84,
    color: 'from-neutral-800 to-stone-700'
  },
  {
    id: 'bramy-furtki',
    title: 'BRAMY I FURTKI',
    subtitle: 'Przesuwne, dwuskrzydłowe, furtki',
    description: 'Dopasowane do każdego systemu. Automatyka w zestawie.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80&auto=format&fit=crop',
    href: '/kat-prod/bramy-furtki',
    count: 36,
    color: 'from-stone-800 to-stone-600'
  },
  {
    id: 'podmurówki-słupki',
    title: 'PODMURÓWKI I SŁUPKI',
    subtitle: 'Prefabrykowane, systemowe',
    description: 'Podmurówki 250cm, słupki 60x40, łączniki, daszki.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop',
    href: '/kat-prod/elementy-ogrodzenia',
    count: 52,
    color: 'from-zinc-700 to-zinc-500'
  },
  {
    id: 'akcesoria',
    title: 'AKCESORIA MONTAŻOWE',
    subtitle: 'Wkręty, obejmy, kotwy, farby',
    description: 'Wszystko do montażu. Komplety montażowe od 12 zł.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop',
    href: '/kat-prod/akcesoria',
    count: 128,
    color: 'from-slate-700 to-slate-500'
  }
]

export const modernSystems = [
  { id: 'linea', name: 'Linea', desc: 'Poziome lamele, minimalistyczny', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600', priceFrom: 189 },
  { id: 'moderno', name: 'Moderno', desc: 'Cienkie profile, lekka forma', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600', priceFrom: 210 },
  { id: 'forte', name: 'Forte', desc: 'Masywne profile 80x20, prestiż', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600', priceFrom: 245 },
  { id: 'strato', name: 'Strato', desc: 'Warstwowy, przestrzenny efekt', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600', priceFrom: 195 },
  { id: 'verto', name: 'Verto', desc: 'Pionowe lamele, nowoczesna klasyka', image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745b?w=600', priceFrom: 175 },
]

export const sztachetyModels = [
  { id: 'astra', name: 'Astra', width: '11,5cm', profile: 'Wypukła', price: '14,90' },
  { id: 'sigma', name: 'Sigma', width: '9,5cm', profile: 'Trapezowa', price: '12,50' },
  { id: 'polo', name: 'Polo', width: '8cm', profile: 'Prosta', price: '9,90' },
  { id: 'emka', name: 'Emka', width: '11cm', profile: 'M-kształtna', price: '13,20' },
  { id: 'estetic', name: 'Estetic', width: '12cm', profile: 'Zaokrąglona', price: '15,80' },
  { id: 'standard', name: 'Standard', width: '10cm', profile: 'Klasyczna', price: '8,90' },
]

export const calculators = [
  {
    id: 'panel-3d',
    title: 'Panel 3D → Policz komplet',
    desc: 'Podaj długość ogrodzenia, dobierzemy panele, słupki, obejmy i podmurówkę',
    icon: '📐',
    color: 'bg-blue-50 border-blue-200',
    href: '/wycena/panel-3d',
    cta: 'Policz teraz',
    time: '2 min'
  },
  {
    id: 'nowoczesne',
    title: 'Ogrodzenie nowoczesne → Wybierz system',
    desc: 'Forte, Linea, Moderno... Wybierz system, wymiar i kolor',
    icon: '🏗️',
    color: 'bg-zinc-50 border-zinc-200',
    href: '/wycena/nowoczesne',
    cta: 'Konfiguruj',
    time: '3 min'
  },
  {
    id: 'sztachety',
    title: 'Sztachety → Zaprojektuj przęsło',
    desc: 'Wybierz wzór, wysokość, rozstaw i kolor. Zobacz wizualizację',
    icon: '🎨',
    color: 'bg-amber-50 border-amber-200',
    href: '/wycena/sztachety',
    cta: 'Projektuj',
    time: '4 min'
  }
]

export const trustElements = {
  realizations: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600',
  ],
  reviews: {
    rating: 4.8,
    count: 342,
    source: 'Google'
  },
  features: [
    { title: 'Dostawa 48h', desc: 'Na terenie całej Polski', icon: '🚚' },
    { title: 'Montaż', desc: 'Ekipy w 6 województwach', icon: '🔧' },
    { title: 'Gwarancja 10 lat', desc: 'Na powłokę i konstrukcję', icon: '🛡️' },
    { title: 'Wycena gratis', desc: 'W 24h od zapytania', icon: '📋' },
  ]
}
