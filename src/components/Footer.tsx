import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Shield, Truck, Award } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white mt-16">
      {/* Trust bar */}
      <div className="border-b border-white/10">
        <div className="container-sild py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Truck, title: 'Dostawa 48h', desc: 'Na terenie całej Polski, własny transport' },
            { icon: Shield, title: 'Gwarancja 10 lat', desc: 'Na konstrukcję i powłokę malarską' },
            { icon: Award, title: '4.8/5 na Google', desc: '342 opinie zweryfikowanych klientów' },
            { icon: Clock, title: 'Wycena w 24h', desc: 'Indywidualne projekty i kalkulacje gratis' },
          ].map(item => (
            <div key={item.title} className="flex gap-3">
              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0"><item.icon className="w-5 h-5" /></div>
              <div>
                <div className="font-semibold text-[14px]">{item.title}</div>
                <div className="text-[12px] text-white/60 leading-tight mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-sild py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand - Official logo from https://sild-ogrodzenia.pl/wp-content/uploads/2023/12/cropped-logonazwisko.png */}
          <div className="col-span-2 lg:col-span-4">
            <div className="bg-white rounded-2xl p-4 inline-block">
              <img src="/logosild_strona.png" alt="SILD Systemy Ogrodzeń Strzeszewski" className="h-auto w-full max-w-[400px] object-contain" />
            </div>
            <p className="mt-5 text-[14px] leading-[1.6] text-white/70 max-w-[360px]">
              Producent ogrodzeń metalowych od 2008 roku. Panele 3D, systemy nowoczesne Forte, Linea, Moderno, sztachety cięte na wymiar. Własna lakiernia proszkowa, dostawa 48h.
            </p>
            <div className="mt-6 space-y-3 text-[13px]">
              <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-white/40" /> <span className="text-white/80">37-XXX Podkarpacie, ul. Ogrodzeniowa 12</span></div>
              <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-white/40" /> <a href="tel:+48123456789" className="hover:text-white">123 456 789</a> <span className="text-white/40">•</span> <span className="text-white/60">Pn-Pt 7:00-17:00</span></div>
              <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-white/40" /> <a href="mailto:sklep@sild-ogrodzenia.pl" className="hover:text-white">sklep@sild-ogrodzenia.pl</a></div>
            </div>
            <div className="mt-6 flex gap-2">
              {['FB','IG','YT'].map((label, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-[12px] font-bold">{label}</a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <div className="font-semibold text-[13px] tracking-widest uppercase text-white/40 mb-4">Sklep</div>
            <div className="space-y-2.5 text-[14px]">
              {[
                ['Ogrodzenia panelowe 3D', '/kat-prod/ogrodzenia-panelowe'],
                ['Ogrodzenia nowoczesne', '/kat-prod/ogrodzenia-nowoczesne'],
                ['Sztachety metalowe', '/kat-prod/sztachety-metalowe'],
                ['Bramy i furtki', '/kat-prod/bramy-furtki'],
                ['Słupki i podmurówki', '/kat-prod/elementy-ogrodzenia'],
                ['Akcesoria montażowe', '/kat-prod/akcesoria'],
                ['Wszystkie produkty', '/sklep'],
              ].map(([label, href]) => (
                <Link key={label} to={href} className="block text-white/70 hover:text-white transition-colors">{label}</Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="font-semibold text-[13px] tracking-widest uppercase text-white/40 mb-4">Wycena</div>
            <div className="space-y-2.5 text-[14px]">
              {[
                ['Kalkulator panel 3D', '/wycena/panel-3d'],
                ['Konfigurator Forte', '/wycena/nowoczesne'],
                ['Konfigurator sztachet', '/wycena/sztachety'],
                ['Wycena indywidualna', '/kontakt'],
                ['Realizacje', '/realizacje'],
                ['Poradnik', '/porady'],
              ].map(([label, href]) => (
                <Link key={label} to={href} className="block text-white/70 hover:text-white transition-colors">{label}</Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="font-semibold text-[13px] tracking-widest uppercase text-white/40 mb-4">Newsletter -10% na pierwsze zakupy</div>
            <p className="text-[13px] text-white/60 mb-4">Porady montażowe, nowości, promocje. Max 2 maile w miesiącu.</p>
            <div className="flex gap-2">
              <input placeholder="Twój e-mail" className="flex-1 h-11 px-4 rounded-full bg-white/10 border border-white/10 placeholder:text-white/40 focus:outline-none focus:border-white/30 text-[14px]" />
              <button className="h-11 px-6 rounded-full bg-white text-[#0a1628] font-semibold text-[14px] hover:bg-zinc-100 transition-colors">Zapisz</button>
            </div>
            <div className="mt-8 p-4 rounded-2xl bg-white/[0.06] border border-white/10">
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200" alt="Realizacja" className="w-16 h-16 rounded-xl object-cover" />
                <div>
                  <div className="text-[12px] font-semibold tracking-widest uppercase text-white/40">Ostatnia realizacja</div>
                  <div className="font-semibold text-[14px] mt-1">Forte 80x20 + brama przesuwna 4m</div>
                  <div className="text-[12px] text-white/60">Warszawa, 45mb • 2 dni montażu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-sild py-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-[12px] text-white/50">
          <div>© {new Date().getFullYear()} SILD Ogrodzenia. Producent ogrodzeń metalowych. NIP: 000-000-00-00. Wszelkie prawa zastrzeżone.</div>
          <div className="flex gap-6">
            <Link to="/regulamin" className="hover:text-white">Regulamin</Link>
            <Link to="/polityka-prywatnosci" className="hover:text-white">Prywatność</Link>
            <Link to="/zwroty" className="hover:text-white">Zwroty</Link>
            <Link to="/kontakt" className="hover:text-white">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
