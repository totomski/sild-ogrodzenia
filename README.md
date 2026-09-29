# SILD Ogrodzenia — Nowy Sklep Zadaniowy

**Live preview:** `npm run dev` → http://localhost:3000

## Co zostało zrobione — zgodnie z audytem

### Problem, który rozwiązujemy
Na starej stronie klient musiał zrozumieć różnicę między **„Ofertą” a „Sklepem” i „Wyceną”**. Droga do zakupu Forte: Sklep → Ogrodzenia nowoczesne → Forte → Przęsło/Furtka/Brama + tekst SEO przed produktami. To odwrotna kolejność.

**Nowe podejście: sklep prowadzony zadaniowo.** Od pierwszej sekundy użytkownik odpowiada na pytanie **„Co chcę kupić?”**

### Nowe menu (usunięta „Oferta”)
- **Ogrodzenia panelowe 3D** → Komplety, Panele, Bramy, Furtki
- **Ogrodzenia nowoczesne** → Linea, Moderno, Forte, Strato, Verto
- **Sztachety metalowe** → Astra, Sigma, Polo, Emka, Estetic, Standard
- **Bramy i furtki** → Panelowe, Nowoczesne
- **Elementy ogrodzenia** → Słupki, Podmurówki, Bloczki Fini, Akcesoria, Wkręty
- **Wycena ogrodzenia** → kalkulatory i konfiguratory (główne wejście, nie schowane)
- **Realizacje / Porady / Kontakt**

### Nowy `/sklep/` — 6 sekcji wg briefu

1. **Nagłówek:** Logo SILD po lewej, **duża wyszukiwarka** na środku „Czego szukasz? np. panel 3D 153 cm, słupek, Forte…”, konto/koszyk/telefon po prawej.

2. **Pierwszy ekran — Znajdź ogrodzenie lub element:** 6 dużych kafli ze zdjęciami (cały kafel klikalny, nie tylko napis):
   - OGRODZENIA PANELOWE 3D
   - OGRODZENIA NOWOCZESNE
   - SZTACHETY METALOWE
   - BRAMY I FURTKI
   - PODMURÓWKI I SŁUPKI
   - AKCESORIA MONTAŻOWE

3. **Druga sekcja — Nie wiesz, czego potrzebujesz? Policz kompletne ogrodzenie:** 3 narzędzia, które SILD już ma:
   - Panel 3D → Policz komplet (2 min)
   - Ogrodzenie nowoczesne → Wybierz system i wymiar (3 min)
   - Sztachety → Zaprojektuj przęsło (4 min)

4. **Popularne produkty:** 4-8 kart z wystarczającą ilością informacji (kolor, wysokość, cena/mb, dostępność, rating) — użytkownik nie musi otwierać każdego produktu.

5. **Pomoc w wyborze:** Panelowe 3D / Nowoczesne / Sztachety / Z montażem — linki do poradników, nie zwykły blok SEO.

6. **Zaufanie:** Realizacje, opinie Google 4.8/5 (342 opinie), dostawa 48h, montaż, gwarancja 10 lat, płatności.

### Kategorie — odwrócona kolejność
**Przykład Forte:**
- H1: Ogrodzenie Forte
- 1 zdjęcie systemu + 2 zdania opisu
- Od razu: Przęsło | Furtka | Brama przesuwna | Brama dwuskrzydłowa — zdjęcia + cena/m² + CTA
- **Dopiero pod produktami:** opis systemu, parametry, zastosowanie, realizacje, FAQ, treść SEO (nie usuwamy SEO, przesuwamy).

**Panele 3D — uproszczenie:**
Zamiast: Ogrodzenia panelowe → Ogrodzenia panelowe 3D → Komplety → produkt
Teraz: Ogrodzenia panelowe 3D → Co chcesz kupić? Kompletne ogrodzenie 3D / Same panele 3D / Brama panelowa / Furtka panelowa / Słupki i akcesoria. Kalkulator wysoko.

### Wyszukiwarka
Rozumie: „panel 153 fi5”, „antracyt panel”, „brama forte”, „słupek do paneli”, „podmurówka 250”, „sztacheta czarna”. Podpowiedzi podczas wpisywania, recent searches, produkty live (max 8).

## Stack
- Vite 5 + React 18 + TypeScript + React Router 6
- Tailwind CSS 3 — design system SILD: #1e3a5f primary, #0f1f33 dark, amber-400 accent
- Lucide Icons, persistent cart (localStorage), slide-out cart, checkout 3-step
- Realistyczne dane: 19 produktów (panele 3D, Forte, Linea, Moderno, Emka, Astra, Polo, słupki 60x40, podmurówka 250, bloczki Fini, obejmy, wkręty farmerskie), recenzje, Google reviews

## Uruchomienie
```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm run preview
```

## Struktura
```
src/
  data/products.ts      # 19 realnych produktów SILD
  data/categories.ts    # 6 kafli + systemy + kalkulatory
  data/reviews.ts       # Opinie produktowe + Google
  context/CartContext   # Koszyk + localStorage + free shipping
  context/SearchContext # Wyszukiwarka z sugestiami
  components/Header     # Duża wyszukiwarka + mega menu
  components/CategoryTile
  components/ProductCard # Karta z kolorami, dostępnością, CTA
  components/CartDrawer  # Slide-out z progressem darmowej dostawy
  components/SearchBar   # Live search
  pages/HomePage         # 6 sekcji wg briefu
  pages/ShopPage         # Filtry, sortowanie, kafelki, SEO poniżej
  pages/ProductPage      # Galeria, warianty, opinie, często kupowane razem
  pages/CategoryPage     # Forte: produkty najpierw, SEO później
  pages/CheckoutPage     # 3 kroki: dostawa / płatność / podsumowanie
```

## Kolejność prac (wg audytu)
Etap 1: architektura + nowe menu ✓
Etap 2: makieta /sklep/, kategorii i karty produktu ✓
Etap 3: design system SILD ✓
Etap 4: wdrożenie na WooCommerce bez niszczenia URL-i i SEO (do zrobienia — zachować /kat-prod/ i /produkt/)
Etap 5: mobile ✓ (wszystko responsive)
Etap 6: testy ścieżek: „znajdź panel”, „kup komplet”, „znajdź Forte”, „kup furtkę”, „kup podmurówkę” ✓
Etap 7: publikacja po testach

## Co dalej
- Podpięcie pod WooCommerce REST API (zachować /kat-prod/ i /ogrodzenia-panelowe/ jako landing SEO)
- Konfiguratory: Panel 3D (metry → panele + słupki + obejmy), Forte (system + wymiar + kolor), Sztachety (wzór + wysokość + rozstaw)
- Wzornik RAL + drewnopodobne
- Integracja z Baselinker / płatności Przelewy24 + BLIK
- Realizacje z filtrem po systemie
