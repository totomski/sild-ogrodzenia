import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { SearchProvider } from './context/SearchContext'
import Header from './components/Header'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import CategoryPage from './pages/CategoryPage'
import CheckoutPage from './pages/CheckoutPage'
import SuccessPage from './pages/SuccessPage'

function Placeholder({ title }: { title: string }) {
  return (
    <div className="container-sild py-20 text-center">
      <h1 className="font-black text-[32px] tracking-tight">{title}</h1>
      <p className="mt-4 text-zinc-600 max-w-[560px] mx-auto">Ta strona jest w budowie. W docelowym wdrożeniu na WooCommerce zachowamy obecne URL-e i SEO. Tutaj pokazujemy nową architekturę informacji: zadaniowy sklep, 6 kafli, kalkulatory jako główne wejście.</p>
      <div className="mt-8 flex justify-center gap-3">
        <a href="/sklep" className="h-11 px-6 rounded-full bg-zinc-900 text-white font-medium flex items-center">Przejdź do sklepu</a>
        <a href="/" className="h-11 px-6 rounded-full bg-white border border-zinc-200 font-medium flex items-center">Strona główna</a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <CartDrawer />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sklep" element={<ShopPage />} />
                <Route path="/produkt/:slug" element={<ProductPage />} />
                <Route path="/kat-prod/:category" element={<CategoryPage />} />
                <Route path="/kat-prod/:category/:system" element={<CategoryPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/checkout/success" element={<SuccessPage />} />
                <Route path="/wycena" element={<Placeholder title="Wycena ogrodzenia — kalkulatory" />} />
                <Route path="/wycena/:type" element={<Placeholder title="Konfigurator — wycena w 2 minuty" />} />
                <Route path="/realizacje" element={<Placeholder title="Realizacje SILD — 120+ zdjęć" />} />
                <Route path="/porady" element={<Placeholder title="Porady — jak wybrać ogrodzenie" />} />
                <Route path="/kontakt" element={<Placeholder title="Kontakt — wycena indywidualna" />} />
                <Route path="*" element={<Placeholder title="Strona nie znaleziona — wróć do sklepu" />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </SearchProvider>
    </BrowserRouter>
  )
}
