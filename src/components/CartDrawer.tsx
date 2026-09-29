import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag, Truck, Shield, ArrowRight, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/cn'

export default function CartDrawer() {
  const { items, isOpen, closeCart, itemCount, subtotal, shipping, total, freeShippingProgress, freeShippingRemaining, updateQuantity, removeItem } = useCart()

  return (
    <>
      {/* Backdrop */}
      <div className={`fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-[60] transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closeCart} />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white z-[61] shadow-[-20px_0_80px_rgba(0,0,0,0.15)] flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="h-[68px] px-6 flex items-center justify-between border-b border-zinc-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-zinc-900 text-white flex items-center justify-center"><ShoppingBag className="w-4 h-4" /></div>
            <div>
              <div className="font-bold text-[16px] leading-none">Koszyk</div>
              <div className="text-[12px] text-zinc-500">{itemCount} {itemCount === 1 ? 'produkt' : itemCount < 5 ? 'produkty' : 'produktów'}</div>
            </div>
          </div>
          <button onClick={closeCart} className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors"><X className="w-4 h-4" /></button>
        </div>

        {/* Free shipping progress */}
        {items.length > 0 && (
          <div className="px-6 py-4 bg-amber-50 border-b border-amber-100">
            <div className="flex items-center justify-between text-[13px] mb-2">
              <span className="flex items-center gap-1.5 font-medium"><Truck className="w-4 h-4" /> {freeShippingRemaining > 0 ? `Do darmowej dostawy brakuje ${formatPrice(freeShippingRemaining)}` : 'Masz darmową dostawę!'}</span>
              <span className="text-[11px] font-bold px-2 py-1 rounded-full bg-amber-400 text-zinc-900">{Math.round(freeShippingProgress)}%</span>
            </div>
            <div className="h-2 rounded-full bg-amber-100 overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full transition-all duration-500" style={{ width: `${freeShippingProgress}%` }} />
            </div>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-zinc-100 flex items-center justify-center mb-4"><ShoppingBag className="w-8 h-8 text-zinc-400" /></div>
              <div className="font-bold text-[18px]">Koszyk jest pusty</div>
              <div className="text-[14px] text-zinc-500 mt-2 max-w-[280px]">Dodaj produkty, a pojawią się tutaj. Darmowa dostawa od 1500 zł!</div>
              <Link to="/sklep" onClick={closeCart} className="mt-6 btn-primary rounded-full px-8">Przeglądaj sklep</Link>
              <div className="mt-8 grid grid-cols-3 gap-4 w-full max-w-[320px]">
                {[
                  { icon: Truck, label: 'Dostawa 48h' },
                  { icon: Shield, label: 'Gwarancja 10 lat' },
                  { icon: ShoppingBag, label: 'Zwrot 14 dni' },
                ].map(f => (
                  <div key={f.label} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 mx-auto flex items-center justify-center mb-1.5"><f.icon className="w-4 h-4" /></div>
                    <div className="text-[11px] font-medium">{f.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-4 space-y-3">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 p-3 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50/50 transition-colors group">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover bg-white border border-zinc-100 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-[13px] leading-tight line-clamp-2">{item.name}</div>
                    <div className="mt-1 flex flex-wrap gap-1">
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200">{item.variant.color}</span>
                      {item.variant.height && <span className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200">{item.variant.height}</span>}
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center hover:bg-zinc-50"><Minus className="w-3 h-3" /></button>
                        <span className="w-8 text-center text-[13px] font-semibold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center hover:bg-zinc-50"><Plus className="w-3 h-3" /></button>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-[14px]">{formatPrice(item.price * item.quantity)}</div>
                        <div className="text-[11px] text-zinc-500">{formatPrice(item.price)} / szt.</div>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-red-50 hover:text-red-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shrink-0 self-start">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-zinc-100 bg-white shrink-0">
            <div className="space-y-2 text-[14px]">
              <div className="flex justify-between"><span className="text-zinc-600">Suma częściowa</span><span className="font-medium">{formatPrice(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-zinc-600">Dostawa</span><span className="font-medium">{shipping === 0 ? <span className="text-emerald-600 font-semibold">Gratis!</span> : formatPrice(shipping)}</span></div>
              <div className="h-px bg-zinc-100 my-3" />
              <div className="flex justify-between text-[18px]"><span className="font-bold">Razem</span><span className="font-black">{formatPrice(total)}</span></div>
              <div className="text-[11px] text-zinc-500">Z VAT • Faktura VAT 23%</div>
            </div>

            <Link to="/checkout" onClick={closeCart} className="mt-5 w-full h-[52px] rounded-full bg-zinc-900 hover:bg-black text-white font-semibold flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all">
              Przejdź do kasy <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-zinc-500">
              <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Bezpieczne płatności</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Truck className="w-3 h-3" /> Dostawa 48h</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
