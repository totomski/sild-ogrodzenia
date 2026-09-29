import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Truck, Shield, CreditCard, Check, MapPin, Phone, Mail, Building, Lock } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/cn'

export default function CheckoutPage() {
  const { items, subtotal, shipping, total, itemCount } = useCart()
  const [step, setStep] = useState<'shipping' | 'payment' | 'review'>('shipping')
  const [shippingData, setShippingData] = useState({
    firstName: '', lastName: '', email: '', phone: '', address: '', city: '', postalCode: '', company: ''
  })
  const [shippingMethod, setShippingMethod] = useState('courier')
  const [paymentMethod, setPaymentMethod] = useState('blik')

  if (items.length === 0) {
    return (
      <div className="container-sild py-20 text-center">
        <div className="font-bold text-[24px]">Koszyk jest pusty</div>
        <Link to="/sklep" className="mt-4 inline-flex h-11 px-6 rounded-full bg-zinc-900 text-white items-center">Wróć do sklepu</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <div className="bg-white border-b border-zinc-100">
        <div className="container-sild h-[68px] flex items-center justify-between">
          <Link to="/sklep" className="flex items-center gap-2 text-[14px] font-medium hover:gap-3 transition-all"><ArrowLeft className="w-4 h-4" /> Wróć do sklepu</Link>
          <div className="flex items-center gap-2 text-[12px]">
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> Bezpieczne zakupy</span>
            <span className="w-px h-4 bg-zinc-200" />
            <span>SSL • Faktura VAT</span>
          </div>
        </div>
      </div>

      <div className="container-sild py-8 lg:py-12">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-8">
          {/* Form */}
          <div className="lg:col-span-7">
            {/* Steps */}
            <div className="flex items-center gap-2 mb-8">
              {[
                { id: 'shipping', label: 'Dostawa', num: 1 },
                { id: 'payment', label: 'Płatność', num: 2 },
                { id: 'review', label: 'Podsumowanie', num: 3 },
              ].map((s, i) => (
                <div key={s.id} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold transition-colors ${step === s.id ? 'bg-zinc-900 text-white' : i < ['shipping','payment','review'].indexOf(step) ? 'bg-emerald-500 text-white' : 'bg-zinc-200 text-zinc-500'}`}>
                    {i < ['shipping','payment','review'].indexOf(step) ? <Check className="w-4 h-4" /> : s.num}
                  </div>
                  <span className={`text-[14px] font-medium ${step === s.id ? 'text-zinc-900' : 'text-zinc-500'}`}>{s.label}</span>
                  {i < 2 && <div className="w-8 h-px bg-zinc-200 mx-2 hidden sm:block" />}
                </div>
              ))}
            </div>

            {step === 'shipping' && (
              <div className="rounded-[24px] bg-white border border-zinc-200 p-6 lg:p-8 animate-fade-in">
                <h2 className="font-bold text-[20px] flex items-center gap-2"><MapPin className="w-5 h-5" /> Dane dostawy</h2>
                
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div><label className="text-[12px] font-semibold tracking-wide uppercase text-zinc-500">Imię *</label><input value={shippingData.firstName} onChange={e => setShippingData({...shippingData, firstName: e.target.value})} className="mt-1.5 input-sild" placeholder="Jan" /></div>
                  <div><label className="text-[12px] font-semibold tracking-wide uppercase text-zinc-500">Nazwisko *</label><input value={shippingData.lastName} onChange={e => setShippingData({...shippingData, lastName: e.target.value})} className="mt-1.5 input-sild" placeholder="Kowalski" /></div>
                  <div><label className="text-[12px] font-semibold tracking-wide uppercase text-zinc-500 flex items-center gap-1"><Mail className="w-3 h-3" /> E-mail *</label><input value={shippingData.email} onChange={e => setShippingData({...shippingData, email: e.target.value})} className="mt-1.5 input-sild" placeholder="jan@example.pl" /></div>
                  <div><label className="text-[12px] font-semibold tracking-wide uppercase text-zinc-500 flex items-center gap-1"><Phone className="w-3 h-3" /> Telefon *</label><input value={shippingData.phone} onChange={e => setShippingData({...shippingData, phone: e.target.value})} className="mt-1.5 input-sild" placeholder="123 456 789" /></div>
                  <div className="sm:col-span-2"><label className="text-[12px] font-semibold tracking-wide uppercase text-zinc-500">Adres *</label><input value={shippingData.address} onChange={e => setShippingData({...shippingData, address: e.target.value})} className="mt-1.5 input-sild" placeholder="ul. Ogrodowa 12" /></div>
                  <div><label className="text-[12px] font-semibold tracking-wide uppercase text-zinc-500">Miasto *</label><input value={shippingData.city} onChange={e => setShippingData({...shippingData, city: e.target.value})} className="mt-1.5 input-sild" placeholder="Warszawa" /></div>
                  <div><label className="text-[12px] font-semibold tracking-wide uppercase text-zinc-500">Kod pocztowy *</label><input value={shippingData.postalCode} onChange={e => setShippingData({...shippingData, postalCode: e.target.value})} className="mt-1.5 input-sild" placeholder="00-000" /></div>
                  <div className="sm:col-span-2"><label className="text-[12px] font-semibold tracking-wide uppercase text-zinc-500 flex items-center gap-1"><Building className="w-3 h-3" /> Firma (opcjonalnie)</label><input value={shippingData.company} onChange={e => setShippingData({...shippingData, company: e.target.value})} className="mt-1.5 input-sild" placeholder="NIP do faktury" /></div>
                </div>

                <h3 className="font-bold text-[16px] mt-8 flex items-center gap-2"><Truck className="w-5 h-5" /> Metoda dostawy</h3>
                <div className="mt-4 space-y-3">
                  {[
                    { id: 'courier', name: 'Kurier DPD / DHL', price: 149, desc: '48h, paleta do 300kg, wniesienie', time: '1-2 dni' },
                    { id: 'own', name: 'Transport własny SILD', price: 249, desc: 'Dostawa z rozładunkiem HDS, do 10km wniesienie gratis', time: '2-3 dni', recommended: true },
                    { id: 'pickup', name: 'Odbiór osobisty', price: 0, desc: 'Podkarpacie, ul. Ogrodzeniowa 12, Pn-Pt 7-17', time: '24h' },
                  ].map(m => (
                    <label key={m.id} className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${shippingMethod === m.id ? 'border-zinc-900 bg-zinc-50' : 'border-zinc-200 hover:border-zinc-300 bg-white'}`}>
                      <input type="radio" name="shipping" checked={shippingMethod === m.id} onChange={() => setShippingMethod(m.id)} className="w-5 h-5" />
                      <div className="flex-1"><div className="font-semibold text-[14px] flex items-center gap-2">{m.name} {m.recommended && <span className="px-2 py-0.5 rounded-full bg-amber-400 text-zinc-900 text-[10px] font-bold">POLECANE</span>}</div><div className="text-[12px] text-zinc-600">{m.desc}</div></div>
                      <div className="text-right"><div className="font-bold">{m.price === 0 ? 'Gratis' : formatPrice(m.price)}</div><div className="text-[11px] text-zinc-500">{m.time}</div></div>
                    </label>
                  ))}
                </div>

                <button onClick={() => setStep('payment')} className="mt-8 w-full h-[52px] rounded-full bg-zinc-900 text-white font-semibold hover:bg-black transition-colors">Dalej: Płatność →</button>
              </div>
            )}

            {step === 'payment' && (
              <div className="rounded-[24px] bg-white border border-zinc-200 p-6 lg:p-8 animate-fade-in">
                <h2 className="font-bold text-[20px] flex items-center gap-2"><CreditCard className="w-5 h-5" /> Płatność</h2>
                <div className="mt-6 space-y-3">
                  {[
                    { id: 'blik', name: 'BLIK', desc: 'Płatność jednym kodem, natychmiastowa', icon: '⚡' },
                    { id: 'card', name: 'Karta płatnicza', desc: 'Visa, Mastercard, szybki przelew', icon: '💳' },
                    { id: 'transfer', name: 'Przelew tradycyjny', desc: '14 dni na płatność, rezerwacja towaru', icon: '🏦' },
                    { id: 'cod', name: 'Pobranie', desc: '+50 zł, płatność przy odbiorze', icon: '📦' },
                  ].map(m => (
                    <label key={m.id} className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === m.id ? 'border-zinc-900 bg-zinc-50' : 'border-zinc-200 hover:border-zinc-300'}`}>
                      <input type="radio" name="payment" checked={paymentMethod === m.id} onChange={() => setPaymentMethod(m.id)} className="w-5 h-5" />
                      <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-[18px]">{m.icon}</div>
                      <div className="flex-1"><div className="font-semibold text-[14px]">{m.name}</div><div className="text-[12px] text-zinc-600">{m.desc}</div></div>
                    </label>
                  ))}
                </div>

                {paymentMethod === 'card' && (
                  <div className="mt-6 p-4 rounded-2xl bg-zinc-50 border border-zinc-200 grid sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2"><label className="text-[12px] font-semibold uppercase text-zinc-500">Numer karty</label><input className="mt-1 input-sild" placeholder="0000 0000 0000 0000" /></div>
                    <div><label className="text-[12px] font-semibold uppercase text-zinc-500">Data ważności</label><input className="mt-1 input-sild" placeholder="MM/RR" /></div>
                    <div><label className="text-[12px] font-semibold uppercase text-zinc-500">CVC</label><input className="mt-1 input-sild" placeholder="123" /></div>
                  </div>
                )}

                <div className="mt-8 flex gap-3">
                  <button onClick={() => setStep('shipping')} className="h-[52px] px-6 rounded-full bg-white border border-zinc-200 font-medium">Wstecz</button>
                  <button onClick={() => setStep('review')} className="flex-1 h-[52px] rounded-full bg-zinc-900 text-white font-semibold hover:bg-black">Dalej: Podsumowanie →</button>
                </div>
              </div>
            )}

            {step === 'review' && (
              <div className="rounded-[24px] bg-white border border-zinc-200 p-6 lg:p-8 animate-fade-in">
                <h2 className="font-bold text-[20px]">Podsumowanie zamówienia</h2>
                <div className="mt-6 space-y-4">
                  <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                    <div className="font-semibold text-[13px] uppercase tracking-wide text-zinc-500">Dostawa</div>
                    <div className="mt-2 text-[14px]">{shippingData.firstName} {shippingData.lastName}, {shippingData.address}, {shippingData.city}</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                    <div className="font-semibold text-[13px] uppercase tracking-wide text-zinc-500">Płatność</div>
                    <div className="mt-2 text-[14px] capitalize">{paymentMethod} • Faktura VAT 23%</div>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex gap-3">
                  <Shield className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div className="text-[13px] leading-[1.5] text-emerald-900"><span className="font-semibold">Bezpieczne zakupy • Gwarancja 10 lat • Zwrot 14 dni</span><br />Zamówienie realizujemy w {items[0]?.leadTime || '48h'}. Otrzymasz e-mail z potwierdzeniem i linkiem do śledzenia przesyłki.</div>
                </div>

                <div className="mt-8 flex gap-3">
                  <button onClick={() => setStep('payment')} className="h-[52px] px-6 rounded-full bg-white border border-zinc-200 font-medium">Wstecz</button>
                  <Link to="/checkout/success" className="flex-1 h-[52px] rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center justify-center gap-2">Zamawiam i płacę {formatPrice(total)} <Check className="w-5 h-5" /></Link>
                </div>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-[100px] rounded-[24px] bg-white border border-zinc-200 p-6">
              <h3 className="font-bold text-[16px]">Twoje zamówienie • {itemCount} {itemCount === 1 ? 'produkt' : 'produkty'}</h3>
              <div className="mt-4 space-y-3 max-h-[320px] overflow-auto pr-1">
                {items.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover bg-zinc-100 border border-zinc-100 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-medium leading-tight line-clamp-2">{item.name}</div>
                      <div className="text-[11px] text-zinc-500 mt-1">{item.variant.color} {item.variant.height && `• ${item.variant.height}`} • x{item.quantity}</div>
                    </div>
                    <div className="font-semibold text-[13px]">{formatPrice(item.price * item.quantity)}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-100 space-y-2 text-[14px]">
                <div className="flex justify-between"><span className="text-zinc-600">Suma</span><span>{formatPrice(subtotal)}</span></div>
                <div className="flex justify-between"><span className="text-zinc-600">Dostawa</span><span>{shipping === 0 ? <span className="text-emerald-600 font-semibold">Gratis</span> : formatPrice(shipping)}</span></div>
                <div className="flex justify-between font-bold text-[18px] pt-3 border-t border-zinc-100"><span>Razem</span><span>{formatPrice(total)}</span></div>
                <div className="text-[11px] text-zinc-500">Z VAT 23% • Faktura VAT</div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-[11px] text-zinc-500">
                <Shield className="w-4 h-4" /> Bezpieczne płatności • Szyfrowanie SSL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
