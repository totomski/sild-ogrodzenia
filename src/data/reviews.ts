export interface Review {
  id: string;
  productId?: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
  helpful: number;
  images?: string[];
  response?: {
    author: string;
    date: string;
    content: string;
  }
}

export const productReviews: Record<string, Review[]> = {
  'panel-3d-153-fi4': [
    {
      id: '1',
      author: 'Marek K.',
      location: 'Warszawa',
      rating: 5,
      date: '2024-11-15',
      title: 'Solidny panel, montaż w 1 dzień',
      content: 'Kupiłem 12 paneli 153cm fi4 antracyt. Przyszły w 2 dni, zapakowane na palecie. Montaż z kolegą - 20mb w 6 godzin z wkopaniem słupków. Panele sztywne, nie wyginają się. Obejmy solidne. Polecam!',
      verified: true,
      helpful: 24,
      images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400']
    },
    {
      id: '2',
      author: 'Anna i Tomasz',
      location: 'Kraków',
      rating: 5,
      date: '2024-10-28',
      title: 'Estetyka na lata',
      content: 'Mamy już 2 lata, kolor jak nowy, nic nie rdzewieje. Sąsiedzi pytają gdzie kupione. Podmurówka też SILD - rewelacja.',
      verified: true,
      helpful: 18
    },
    {
      id: '3',
      author: 'Piotr D.',
      location: 'Wrocław',
      rating: 4,
      date: '2024-10-10',
      title: 'Dobry stosunek jakość/cena',
      content: 'Panel ok, ale przydałoby się więcej obejm w zestawie. Musiałem dokupić. Poza tym wszystko super.',
      verified: true,
      helpful: 7,
      response: {
        author: 'SILD Ogrodzenia',
        date: '2024-10-11',
        content: 'Panie Piotrze, dziękujemy za opinię! W komplecie są 3 obejmy na łączenie, ale przy narożnikach faktycznie potrzeba 4. Poprawiliśmy opisy. Pozdrawiamy!'
      }
    }
  ],
  'sztacheta-emka-150-7016': [
    {
      id: '4',
      author: 'Katarzyna W.',
      location: 'Gdańsk',
      rating: 5,
      date: '2024-11-20',
      title: 'Emka - najlepszy wybór',
      content: 'Zamówiłam 180 sztachet Emka 150cm antracyt. Cięte idealnie co do mm, dwustronnie malowane. Montaż na gotowych profilach - efekt jak z katalogu. Sąsiedzi zazdroszczą.',
      verified: true,
      helpful: 31
    },
    {
      id: '5',
      author: 'Robert S.',
      location: 'Poznań',
      rating: 5,
      date: '2024-11-05',
      title: 'Precyzyjne cięcie, szybka dostawa',
      content: 'Sztachety na wymiar 143cm - przyszły po 2 dniach, wszystkie równe. Kolor zgodny ze wzornikiem. Polecam konfigurator na stronie.',
      verified: true,
      helpful: 12
    }
  ],
  'forte-przeslo-250-150': [
    {
      id: '6',
      author: 'Architekt Marcin',
      location: 'Warszawa',
      rating: 5,
      date: '2024-11-10',
      title: 'Forte to klasa premium',
      content: 'Jako architekt polecam klientom Forte od 3 lat. Profil 80x20 robi wrażenie, spawy niewidoczne, malowanie strukturalne. Dom za 1,5mln zasługuje na takie ogrodzenie.',
      verified: true,
      helpful: 45
    },
    {
      id: '7',
      author: 'Ewa K.',
      location: 'Katowice',
      rating: 5,
      date: '2024-09-22',
      title: 'Prestiż i prywatność',
      content: 'Mamy Forte 150cm + podmurówka 25cm. Z ulicy nic nie widać, a jednocześnie lekko. Brama przesuwna z automatem - bajka.',
      verified: true,
      helpful: 19,
      images: ['https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400']
    }
  ]
}

export const googleReviews = [
  {
    id: 'g1',
    author: 'Michał Nowak',
    rating: 5,
    date: '2 tygodnie temu',
    content: 'Pełen profesjonalizm. Doradzili, policzyli, dostarczyli w terminie. Ogrodzenie panelowe 60mb + brama i furtka. Montaż własny - instrukcja video super.',
    verified: true
  },
  {
    id: 'g2',
    author: 'Agnieszka Kowalska',
    rating: 5,
    date: 'miesiąc temu',
    content: 'Sztachety metalowe Emka - rewelacja! Konfigurator na stronie to strzał w 10. Wycena w 15 minut, zamówienie w 2 dni u mnie. Polecam!',
    verified: true
  },
  {
    id: 'g3',
    author: 'Tomasz Wiśniewski',
    rating: 5,
    date: 'miesiąc temu',
    content: 'Forte 80x20 - ogrodzenie robi wrażenie. Jakość premium, cena uczciwa. Kontakt z biurem wzorowy.',
    verified: true
  },
  {
    id: 'g4',
    author: 'Krzysztof J.',
    rating: 5,
    date: '2 miesiące temu',
    content: 'Drugi raz kupuję w SILD. Pierwsze ogrodzenie panelowe 5 lat temu - jak nowe. Teraz dobudówka - znowu SILD. Polecam!',
    verified: true
  }
]

export const getReviewsForProduct = (productId: string): Review[] => {
  return productReviews[productId] || [
    {
      id: 'default-1',
      author: 'Jan K.',
      location: 'Polska',
      rating: 5,
      date: '2024-10-15',
      title: 'Bardzo dobre',
      content: 'Produkt zgodny z opisem, szybka dostawa, solidne wykonanie. Polecam SILD.',
      verified: true,
      helpful: 5
    }
  ]
}
