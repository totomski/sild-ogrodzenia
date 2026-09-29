export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  system?: string;
  price: number;
  pricePer?: string;
  originalPrice?: number;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  leadTime: string;
  isNew?: boolean;
  isBestseller?: boolean;
  isPromo?: boolean;
  colors: string[];
  heights?: string[];
  specs: { label: string; value: string }[];
  description: string;
  longDescription: string;
}

const baseImages = {
  panel: [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  ],
  forte: [
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
  ],
  sztacheta: [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745b?w=800&q=80',
  ],
  brama: [
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&q=80',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
  ]
}

export const products: Product[] = [
  // PANELE 3D
  {
    id: 'panel-3d-153-fi4',
    slug: 'panel-ogrodzeniowy-3d-153cm-fi4',
    name: 'Panel ogrodzeniowy 3D 153cm fi4 antracyt',
    category: 'panele-3d',
    subcategory: 'panele',
    price: 89.90,
    pricePer: 'szt.',
    originalPrice: 109.00,
    image: baseImages.panel[0],
    images: baseImages.panel,
    rating: 4.8,
    reviews: 124,
    inStock: true,
    leadTime: '24-48h',
    isBestseller: true,
    isPromo: true,
    colors: ['RAL 7016 Antracyt', 'RAL 6005 Zielony', 'RAL 9005 Czarny', 'Ocynk'],
    heights: ['103cm', '123cm', '153cm', '173cm', '203cm'],
    specs: [
      { label: 'Wysokość', value: '153 cm' },
      { label: 'Szerokość', value: '250 cm' },
      { label: 'Średnica drutu', value: '4,0 mm' },
      { label: 'Przetłoczenia', value: '3x V' },
      { label: 'Ocynk + malowanie', value: 'RAL 7016' },
    ],
    description: 'Panel 3D ocynkowany i malowany proszkowo. Najczęściej wybierany do domów jednorodzinnych.',
    longDescription: 'Panel ogrodzeniowy 3D o wysokości 153cm to złoty środek między prywatnością a lekkością. Wykonany z drutu fi 4mm, ocynkowany ogniowo i malowany proszkowo w kolorze antracytowym RAL 7016. Trzy przetłoczenia V zapewniają sztywność. Kompatybilny ze słupkami 60x40mm i podmurówką 25cm. Montaż na obejmy lub spawy. Gwarancja 10 lat na powłokę.'
  },
  {
    id: 'panel-3d-173-fi5',
    slug: 'panel-ogrodzeniowy-3d-173cm-fi5',
    name: 'Panel 3D 173cm fi5 ocynk + RAL 7016',
    category: 'panele-3d',
    subcategory: 'panele',
    price: 119.00,
    pricePer: 'szt.',
    image: baseImages.panel[1],
    images: baseImages.panel,
    rating: 4.9,
    reviews: 89,
    inStock: true,
    leadTime: '24-48h',
    colors: ['RAL 7016', 'RAL 9005', 'RAL 6005'],
    heights: ['153cm', '173cm', '203cm'],
    specs: [
      { label: 'Wysokość', value: '173 cm' },
      { label: 'Drut', value: 'fi 5,0 mm' },
      { label: 'Szerokość', value: '250 cm' },
      { label: 'Waga', value: '14,2 kg' },
    ],
    description: 'Wzmocniony panel fi 5mm dla wymagających. Idealny na tereny wietrzne.',
    longDescription: 'Masywny panel 3D fi 5mm to wybór dla osób ceniących solidność. Grubszy drut = większa odporność na odkształcenia i próby sforsowania. Polecany na działki narożne i tereny otwarte.'
  },
  {
    id: 'komplet-3d-20m',
    slug: 'komplet-ogrodzenia-panelowego-3d-20mb',
    name: 'Komplet ogrodzenia panelowego 3D 20mb + furtka',
    category: 'panele-3d',
    subcategory: 'komplety',
    price: 1890.00,
    pricePer: 'kpl.',
    originalPrice: 2190.00,
    image: baseImages.panel[2],
    images: baseImages.panel,
    rating: 4.9,
    reviews: 56,
    inStock: true,
    leadTime: '3-5 dni',
    isBestseller: true,
    colors: ['Antracyt', 'Czarny', 'Zielony'],
    specs: [
      { label: 'Długość', value: '20 mb' },
      { label: 'Wysokość', value: '153 cm' },
      { label: 'Zawiera', value: '8 paneli, 9 słupków, furtka 100cm' },
      { label: 'Podmurówka', value: 'Opcjonalnie' },
    ],
    description: 'Gotowy zestaw na 20mb. Wszystko co potrzebne w jednym pudełku.',
    longDescription: 'Nie wiesz co kupić? Ten komplet zawiera 8 paneli 3D 153cm, 9 słupków 60x40 z daszkami, obejmy, śruby i furtkę 100x153cm z zamkiem i klamką. Wystarczy wkopanie słupków. Instrukcja montażu video w zestawie.'
  },
  {
    id: 'furtka-panel-100-153',
    slug: 'furtka-panelowa-100x153-antracyt',
    name: 'Furtka panelowa 100x153cm antracyt',
    category: 'panele-3d',
    subcategory: 'furtki',
    price: 549.00,
    pricePer: 'szt.',
    image: baseImages.brama[0],
    images: baseImages.brama,
    rating: 4.7,
    reviews: 42,
    inStock: true,
    leadTime: '5-7 dni',
    colors: ['RAL 7016', 'RAL 9005'],
    specs: [
      { label: 'Szerokość', value: '100 cm' },
      { label: 'Wysokość', value: '153 cm' },
      { label: 'Wypełnienie', value: 'Panel 3D fi4' },
      { label: 'Zamek', value: 'Zamek + klamka + 3 klucze' },
    ],
    description: 'Furtka systemowa do paneli 3D. Rama 40x40, zawiasy regulowane.',
    longDescription: 'Solidna furtka panelowa z ramą 40x40mm. Słupki furtki 80x80mm w zestawie. Regulowane zawiasy, zamek wpuszczany, klamka aluminiowa.'
  },
  {
    id: 'brama-panel-400-153',
    slug: 'brama-dwuskrzydłowa-panelowa-400x153',
    name: 'Brama dwuskrzydłowa panelowa 400x153cm',
    category: 'panele-3d',
    subcategory: 'bramy',
    price: 1890.00,
    pricePer: 'kpl.',
    image: baseImages.brama[1],
    images: baseImages.brama,
    rating: 4.8,
    reviews: 31,
    inStock: true,
    leadTime: '7-10 dni',
    colors: ['RAL 7016', 'RAL 9005'],
    specs: [
      { label: 'Szerokość', value: '400 cm' },
      { label: 'Wysokość', value: '153 cm' },
      { label: 'Skrzydła', value: '2x 200cm' },
      { label: 'Słupki', value: '100x100 w zestawie' },
    ],
    description: 'Brama dwuskrzydłowa do paneli 3D. Komplet ze słupkami i okuciami.',
    longDescription: 'Brama dwuskrzydłowa panelowa z wypełnieniem panel 3D. Rama 60x40, słupki 100x100mm. Zawiasy regulowane, zasuwa, uchwyt na kłódkę. Możliwość montażu automatu.'
  },

  // NOWOCZESNE - FORTE
  {
    id: 'forte-przeslo-250-150',
    slug: 'przeslo-forte-250x150-antracyt',
    name: 'Przęsło Forte 250x150cm RAL 7016',
    category: 'nowoczesne',
    subcategory: 'przesla',
    system: 'forte',
    price: 845.00,
    pricePer: 'szt.',
    image: baseImages.forte[0],
    images: baseImages.forte,
    rating: 4.9,
    reviews: 38,
    inStock: true,
    leadTime: '10-14 dni',
    isBestseller: true,
    colors: ['RAL 7016 Antracyt', 'RAL 9005 Czarny', 'RAL 9006 Srebrny'],
    heights: ['100cm', '120cm', '150cm', '180cm'],
    specs: [
      { label: 'System', value: 'Forte 80x20' },
      { label: 'Szerokość', value: '250 cm' },
      { label: 'Wysokość', value: '150 cm' },
      { label: 'Profil', value: '80x20mm' },
      { label: 'Prześwit', value: '20mm' },
    ],
    description: 'Przęsło Forte - masywne profile 80x20mm. Flagowy system SILD.',
    longDescription: 'System Forte to kwintesencja nowoczesnego ogrodzenia. Profile 80x20mm zamknięte, spawane, malowane proszkowo. Prześwit 20mm daje prywatność przy zachowaniu lekkości. Słupki 100x100mm. Najczęściej wybierany przez architektów.'
  },
  {
    id: 'forte-furtka-100-150',
    slug: 'furtka-forte-100x150',
    name: 'Furtka Forte 100x150cm z elektrozaczepem',
    category: 'nowoczesne',
    subcategory: 'furtki',
    system: 'forte',
    price: 1450.00,
    pricePer: 'szt.',
    image: baseImages.forte[1],
    images: baseImages.forte,
    rating: 5.0,
    reviews: 21,
    inStock: true,
    leadTime: '10-14 dni',
    colors: ['RAL 7016', 'RAL 9005'],
    specs: [
      { label: 'Szerokość', value: '100 cm' },
      { label: 'Wysokość', value: '150 cm' },
      { label: 'Rama', value: '60x40mm' },
      { label: 'Elektrozaczep', value: 'W zestawie' },
    ],
    description: 'Furtka Forte z elektrozaczepem. Gotowa pod domofon.',
    longDescription: 'Furtka systemowa Forte z ramą 60x40mm. Elektrozaczep 12V, miejsce na domofon, zamek magnetyczny. Słupki 100x100mm z daszkami płaskimi.'
  },
  {
    id: 'forte-brama-przesuwna-400-150',
    slug: 'brama-przesuwna-forte-400x150-automat',
    name: 'Brama przesuwna Forte 400x150 + automat',
    category: 'nowoczesne',
    subcategory: 'bramy',
    system: 'forte',
    price: 5890.00,
    pricePer: 'kpl.',
    image: baseImages.forte[2],
    images: baseImages.forte,
    rating: 4.9,
    reviews: 17,
    inStock: true,
    leadTime: '14-21 dni',
    isNew: true,
    colors: ['RAL 7016', 'RAL 9005', 'RAL 7016 struktura'],
    specs: [
      { label: 'Światło wjazdu', value: '400 cm' },
      { label: 'Wysokość', value: '150 cm' },
      { label: 'Automat', value: 'Nice Robus 600 + 2 piloty' },
      { label: 'Fundament', value: 'Bloczki w zestawie' },
    ],
    description: 'Brama przesuwna Forte z automatem Nice. Komplet do montażu.',
    longDescription: 'Kompletna brama przesuwna Forte 400cm z automatem Nice Robus 600. Wózki jezdne, rolki, zamek, fotokomórki. Bloczki fundamentowe w zestawie. Montaż w 1 dzień.'
  },

  // NOWOCZESNE - LINEA, MODERNO, STRATO, VERTO
  {
    id: 'linea-przeslo-250-150',
    slug: 'przeslo-linea-250x150',
    name: 'Przęsło Linea 250x150 poziome lamele',
    category: 'nowoczesne',
    subcategory: 'przesla',
    system: 'linea',
    price: 695.00,
    pricePer: 'szt.',
    image: baseImages.forte[1],
    images: baseImages.forte,
    rating: 4.8,
    reviews: 44,
    inStock: true,
    leadTime: '10-14 dni',
    colors: ['RAL 7016', 'RAL 9005', 'Dąb złoty'],
    specs: [
      { label: 'System', value: 'Linea 80x20 poziomo' },
      { label: 'Prześwit', value: '15mm' },
    ],
    description: 'Poziome lamele Linea - optycznie poszerza działkę.',
    longDescription: 'Linea to poziome lamele 80x20mm z prześwitem 15mm. Efekt nowoczesnej stodoły. Bardzo sztywne, nie wymaga dodatkowych wzmocnień.'
  },
  {
    id: 'moderno-przeslo-250-150',
    slug: 'przeslo-moderno-250x150',
    name: 'Przęsło Moderno 250x150 cienki profil',
    category: 'nowoczesne',
    subcategory: 'przesla',
    system: 'moderno',
    price: 725.00,
    pricePer: 'szt.',
    image: baseImages.forte[2],
    images: baseImages.forte,
    rating: 4.7,
    reviews: 29,
    inStock: true,
    leadTime: '10-14 dni',
    colors: ['RAL 7016', 'RAL 9005'],
    specs: [
      { label: 'Profil', value: '60x20mm' },
      { label: 'Design', value: 'Lekki, ażurowy' },
    ],
    description: 'Moderno - lekkość i minimalizm. Profil 60x20mm.',
    longDescription: 'Najlżejszy wizualnie system nowoczesny. Profile 60x20mm, prześwit 30mm. Idealny do nowoczesnych domów z dużymi przeszkleniami.'
  },

  // SZTACHETY
  {
    id: 'sztacheta-emka-150-7016',
    slug: 'sztacheta-metalowa-emka-150cm-7016',
    name: 'Sztacheta metalowa Emka 150cm RAL 7016',
    category: 'sztachety',
    subcategory: 'emka',
    price: 18.90,
    pricePer: 'szt.',
    originalPrice: 21.50,
    image: baseImages.sztacheta[0],
    images: baseImages.sztacheta,
    rating: 4.9,
    reviews: 156,
    inStock: true,
    leadTime: '24-48h',
    isBestseller: true,
    colors: ['RAL 7016 Antracyt', 'RAL 9005 Czarny', 'RAL 8017 Brąz', 'Złoty Dąb', 'Orzech'],
    heights: ['80cm', '100cm', '120cm', '150cm', '180cm', '200cm'],
    specs: [
      { label: 'Wzór', value: 'Emka - M-kształtna' },
      { label: 'Szerokość', value: '110mm' },
      { label: 'Grubość blachy', value: '0,5mm' },
      { label: 'Zakończenie', value: 'Proste / Łuk' },
      { label: 'Cięcie', value: 'Na wymiar co 1cm' },
    ],
    description: 'Najpopularniejsza sztacheta Emka. M-kształtna, sztywna, dwustronnie malowana.',
    longDescription: 'Sztacheta Emka to bestseller SILD. Przetłoczenie M daje sztywność bez dodatkowych kosztów. Blacha 0,5mm, ocynk 275g/m2, malowanie proszkowe dwustronne. Cięta na wymiar co 1cm. Dostępna w 12 kolorach RAL i 4 drewnopodobnych. Cena za sztukę 150cm.'
  },
  {
    id: 'sztacheta-astra-150-7016',
    slug: 'sztacheta-astra-150cm',
    name: 'Sztacheta Astra 115mm wypukła 150cm',
    category: 'sztachety',
    subcategory: 'astra',
    price: 21.90,
    pricePer: 'szt.',
    image: baseImages.sztacheta[1],
    images: baseImages.sztacheta,
    rating: 4.8,
    reviews: 72,
    inStock: true,
    leadTime: '24-48h',
    colors: ['RAL 7016', 'RAL 9005', 'Dąb złoty'],
    specs: [
      { label: 'Szerokość', value: '115mm' },
      { label: 'Profil', value: 'Wypukły' },
    ],
    description: 'Astra - szeroka, wypukła, elegancka. 115mm szerokości.',
    longDescription: 'Sztacheta Astra o szerokości 115mm i wypukłym profilu. Daje efekt pełnego ogrodzenia przy zachowaniu przewiewności. Bardzo sztywna.'
  },
  {
    id: 'sztacheta-polo-150',
    slug: 'sztacheta-polo-80mm',
    name: 'Sztacheta Polo 80mm prosta 150cm',
    category: 'sztachety',
    subcategory: 'polo',
    price: 14.50,
    pricePer: 'szt.',
    image: baseImages.sztacheta[2],
    images: baseImages.sztacheta,
    rating: 4.6,
    reviews: 38,
    inStock: true,
    leadTime: '24h',
    colors: ['RAL 7016', 'RAL 9005', 'RAL 6005'],
    specs: [
      { label: 'Szerokość', value: '80mm' },
      { label: 'Cena', value: 'Najtańsza w ofercie' },
    ],
    description: 'Polo - wąska, ekonomiczna, prosta forma. Od 9,90 zł/szt.',
    longDescription: 'Najtańsza sztacheta w ofercie. Szerokość 80mm, profil prosty. Idealna na duże metraże i ogrodzenia tymczasowe.'
  },

  // ELEMENTY
  {
    id: 'slupek-60x40-200-7016',
    slug: 'slupek-ogrodzeniowy-60x40-200cm-7016',
    name: 'Słupek ogrodzeniowy 60x40 200cm RAL 7016',
    category: 'elementy',
    subcategory: 'slupki',
    price: 69.00,
    pricePer: 'szt.',
    image: baseImages.panel[0],
    images: baseImages.panel,
    rating: 4.8,
    reviews: 203,
    inStock: true,
    leadTime: '24h',
    isBestseller: true,
    colors: ['RAL 7016', 'RAL 9005', 'RAL 6005', 'Ocynk'],
    specs: [
      { label: 'Profil', value: '60x40x1,5mm' },
      { label: 'Wysokość', value: '200cm (150+50)' },
      { label: 'Daszek', value: 'Plastikowy w zestawie' },
    ],
    description: 'Słupek 60x40 do paneli 3D. Ocynk + RAL 7016. Daszek gratis.',
    longDescription: 'Podstawowy słupek do paneli 3D. Profil zamknięty 60x40x1,5mm, ocynkowany i malowany proszkowo. Otwory pod obejmy. Daszek plastikowy w kolorze.'
  },
  {
    id: 'podmurówka-250-25',
    slug: 'podmurówka-prefabrykowana-250x25',
    name: 'Podmurówka prefabrykowana 250x25cm',
    category: 'elementy',
    subcategory: 'podmurówki',
    price: 49.00,
    pricePer: 'szt.',
    image: baseImages.panel[1],
    images: baseImages.panel,
    rating: 4.7,
    reviews: 98,
    inStock: true,
    leadTime: '48h',
    colors: ['Beton szary', 'Antracyt barwiony'],
    specs: [
      { label: 'Długość', value: '250cm' },
      { label: 'Wysokość', value: '25cm' },
      { label: 'Grubość', value: '5cm' },
      { label: 'Zbrojenie', value: 'Tak, 2x fi6' },
    ],
    description: 'Podmurówka betonowa zbrojona. Chroni panel przed ziemią.',
    longDescription: 'Prefabrykowana podmurówka betonowa zbrojona prętami fi6. Długość 250cm, wysokość 25cm. Montaż na łącznikach betonowych. Wydłuża żywotność ogrodzenia o lata.'
  },
  {
    id: 'bloczek-fini-50x20x20',
    slug: 'bloczek-ogrodzeniowy-fini-50x20x20',
    name: 'Bloczek ogrodzeniowy Fini 50x20x20 antracyt',
    category: 'elementy',
    subcategory: 'bloczki',
    price: 12.90,
    pricePer: 'szt.',
    image: baseImages.panel[2],
    images: baseImages.panel,
    rating: 4.9,
    reviews: 67,
    inStock: true,
    leadTime: '48h',
    colors: ['Antracyt', 'Grafit', 'Piaskowy'],
    specs: [
      { label: 'Wymiary', value: '50x20x20cm' },
      { label: 'Waga', value: '22kg' },
      { label: 'Faktura', value: 'Łupana' },
    ],
    description: 'Bloczek Fini łupany - pod słupki i mury. System bez zaprawy.',
    longDescription: 'Bloczek ogrodzeniowy Fini z fakturą łupaną. System murowania na sucho z prętami. Pod słupki, mury oporowe, ogrodzenia pełne. Kolor antracytowy barwiony w masie.'
  },
  {
    id: 'obejma-60x40-startowa',
    slug: 'obejma-startowa-60x40-ocynk',
    name: 'Obejma startowa 60x40 ocynkowana',
    category: 'elementy',
    subcategory: 'akcesoria',
    price: 3.90,
    pricePer: 'szt.',
    image: baseImages.panel[0],
    images: baseImages.panel,
    rating: 4.8,
    reviews: 312,
    inStock: true,
    leadTime: '24h',
    colors: ['Ocynk', 'RAL 7016', 'RAL 9005'],
    specs: [
      { label: 'Typ', value: 'Startowa' },
      { label: 'Profil słupka', value: '60x40' },
      { label: 'Śruba', value: 'M8x40 w zestawie' },
    ],
    description: 'Obejma startowa do paneli 3D. Niezbędna do montażu.',
    longDescription: 'Obejma startowa do mocowania panela do słupka. Ocynkowana, z śrubą M8 i nakrętką zrywalną antykradzieżową. 3 sztuki na słupek.'
  },
  {
    id: 'wkrety-farmerskie-48x35-7016',
    slug: 'wkrety-farmerskie-48x35-ral-7016-250szt',
    name: 'Wkręty farmerskie 4,8x35 RAL 7016 250szt',
    category: 'elementy',
    subcategory: 'wkrety',
    price: 39.90,
    pricePer: 'op.',
    image: baseImages.panel[1],
    images: baseImages.panel,
    rating: 4.9,
    reviews: 145,
    inStock: true,
    leadTime: '24h',
    colors: ['RAL 7016', 'RAL 9005', 'RAL 8017'],
    specs: [
      { label: 'Wymiar', value: '4,8x35mm' },
      { label: 'Ilość', value: '250 szt.' },
      { label: 'Podkładka', value: 'EPDM 14mm' },
    ],
    description: 'Wkręty farmerskie w kolorze ogrodzenia. Z podkładką EPDM.',
    longDescription: 'Wkręty samowiercące farmerskie 4,8x35mm w kolorze RAL 7016. Podkładka EPDM uszczelniająca. Do mocowania sztachet do profili.'
  },
  {
    id: 'brama-przesuwna-panel-400',
    slug: 'brama-przesuwna-panelowa-400x153',
    name: 'Brama przesuwna panelowa 400x153 + wózki',
    category: 'bramy',
    subcategory: 'przesuwne',
    price: 2450.00,
    pricePer: 'kpl.',
    image: baseImages.brama[0],
    images: baseImages.brama,
    rating: 4.7,
    reviews: 28,
    inStock: true,
    leadTime: '7 dni',
    colors: ['RAL 7016', 'RAL 9005'],
    specs: [
      { label: 'Światło', value: '400cm' },
      { label: 'Wózki', value: '2x rolkowe ocynk' },
    ],
    description: 'Brama przesuwna panelowa. Wózki jezdne w zestawie.',
    longDescription: 'Brama przesuwna z wypełnieniem panel 3D. Prowadnica 6m ocynkowana, wózki rolkowe, rolka najazdowa, gniazdo. Gotowa do automatyzacji.'
  },
]

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug)
export const getProductsByCategory = (cat: string) => products.filter(p => p.category === cat)
export const getProductsBySystem = (system: string) => products.filter(p => p.system === system)
export const getFeaturedProducts = () => products.filter(p => p.isBestseller).slice(0, 8)
export const getBestsellers = () => products.filter(p => p.isBestseller)
export const getNewProducts = () => products.filter(p => p.isNew)
