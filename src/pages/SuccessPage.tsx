import { Link } from 'react-router-dom'
import { Check, Truck, Phone, Mail, ArrowRight } from 'lucide-react'

export default function SuccessPage() {
  const orderNumber = `SILD-${new Date().getFullYear()}-${Math.floor(Math.random()*9000+1000)}`
  
  return (
    <div className="min-h-screen bg-[#fafaf9] flex items-center justify-center p-4">
      <div className="w-full max-w-[560px] rounded-[32px] bg-white border border-zinc-200 p-8 lg:p-10 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
        <div className="w-20 h-20 rounded-full bg-emerald-100 mx-auto flex items-center justify-center"><Check className="w-10 h-10 text-emerald-600" /></div>
        <h1 className="mt-6 font-black text-[28px] leading-[0.9] tracking-tight">Dziękujemy!<br />Zamówienie przyjęte</h1>
        <p className="mt-4 text-[15px] leading-[1.6] text-zinc-600">Twoje ogrodzenie jest już w produkcji. Potwierdzenie wysłaliśmy na e-mail. Skontaktujemy się w ciągu 24h aby ustalić dostawę.</p>

        <div className="mt-8 p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-left">
          <div className="flex justify-between text-[13px]"><span className="text-zinc-500">Numer zamówienia</span><span className="font-bold">{orderNumber}</span></div>
          <div className="flex justify-between text-[13px] mt-2"><span className="text-zinc-500">Status</span><span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold">POTWIERDZONE</span></div>
          <div className="flex justify-between text-[13px] mt-2"><span className="text-zinc-500">Realizacja</span><span className="font-medium">24-48h + dostawa</span></div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 text-left">
          <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-4"><div className="flex items-center gap-2 font-semibold text-[13px]"><Truck className="w-4 h-4" /> Dostawa</div><div className="text-[12px] text-zinc-600 mt-1">Kurier 48h, śledzenie w e-mailu</div></div>
          <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-4"><div className="flex items-center gap-2 font-semibold text-[13px]"><Phone className="w-4 h-4" /> Kontakt</div><div className="text-[12px] text-zinc-600 mt-1">123 456 789 Pn-Pt 7-17</div></div>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <Link to="/sklep" className="h-12 rounded-full bg-zinc-900 text-white font-semibold flex items-center justify-center gap-2 hover:bg-black">Kontynuuj zakupy <ArrowRight className="w-4 h-4" /></Link>
          <a href="mailto:sklep@sild-ogrodzenia.pl" className="h-12 rounded-full bg-white border border-zinc-200 font-medium flex items-center justify-center gap-2 hover:bg-zinc-50"><Mail className="w-4 h-4" /> Napisz do nas</a>
        </div>

        <div className="mt-8 text-[12px] text-zinc-500">Faktura VAT • Gwarancja 10 lat • Instrukcja montażu video w e-mailu</div>
      </div>
    </div>
  )
}
