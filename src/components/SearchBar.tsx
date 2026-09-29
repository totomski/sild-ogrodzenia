import { Link } from 'react-router-dom'
import { Search, Clock, ArrowUpRight, Package } from 'lucide-react'
import { useSearch } from '../context/SearchContext'
import { formatPrice } from '../utils/cn'

export default function SearchBar({ compact = false }: { compact?: boolean }) {
  const { query, results, suggestions, recentSearches, setQuery, addRecentSearch } = useSearch()

  if (!query || query.length < 2) return null

  return (
    <div className={`bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-zinc-200 overflow-hidden ${compact ? '' : 'animate-scale-in'}`}>
      <div className="p-3">
        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="mb-3">
            <div className="px-3 py-2 text-[11px] font-semibold tracking-widest text-zinc-400 uppercase">Sugestie</div>
            <div className="space-y-1">
              {suggestions.map(s => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="w-full flex items-center gap-3 px-3 h-10 rounded-xl hover:bg-zinc-50 text-left transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-zinc-100 group-hover:bg-zinc-200 flex items-center justify-center"><Search className="w-4 h-4 text-zinc-500" /></div>
                  <span className="text-[14px] font-medium">{s}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Products */}
        {results.length > 0 ? (
          <div>
            <div className="px-3 py-2 flex items-center justify-between">
              <span className="text-[11px] font-semibold tracking-widest text-zinc-400 uppercase">Produkty ({results.length})</span>
              <Link to={`/sklep?q=${encodeURIComponent(query)}`} onClick={() => addRecentSearch(query)} className="text-[12px] font-medium text-[#1e3a5f] hover:underline flex items-center gap-1">Zobacz wszystkie <ArrowUpRight className="w-3 h-3" /></Link>
            </div>
            <div className="space-y-1 max-h-[320px] overflow-auto scrollbar-hide">
              {results.map(product => (
                <Link
                  key={product.id}
                  to={`/produkt/${product.slug}`}
                  onClick={() => addRecentSearch(query)}
                  className="flex items-center gap-3 p-2 pr-3 rounded-xl hover:bg-zinc-50 transition-colors group"
                >
                  <img src={product.image} alt={product.name} className="w-14 h-14 rounded-xl object-cover bg-zinc-100 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-medium leading-tight line-clamp-2 group-hover:text-[#1e3a5f]">{product.name}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[12px] font-semibold">{formatPrice(product.price)}</span>
                      <span className="text-[11px] text-zinc-500">{product.pricePer}</span>
                      {product.isBestseller && <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-medium">Bestseller</span>}
                    </div>
                  </div>
                  <Package className="w-4 h-4 text-zinc-300 group-hover:text-zinc-500 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="px-4 py-8 text-center">
            <div className="w-12 h-12 rounded-full bg-zinc-100 mx-auto flex items-center justify-center mb-3"><Search className="w-6 h-6 text-zinc-400" /></div>
            <div className="text-[14px] font-medium">Brak wyników dla "{query}"</div>
            <div className="text-[13px] text-zinc-500 mt-1">Spróbuj: panel 153, Forte, słupek, Emka</div>
          </div>
        )}

        {/* Recent */}
        {!compact && recentSearches.length > 0 && query.length < 3 && (
          <div className="mt-3 pt-3 border-t border-zinc-100">
            <div className="px-3 py-2 text-[11px] font-semibold tracking-widest text-zinc-400 uppercase">Ostatnie wyszukiwania</div>
            <div className="flex flex-wrap gap-2 px-2">
              {recentSearches.map(r => (
                <button key={r} onClick={() => setQuery(r)} className="flex items-center gap-1.5 px-3 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-[13px] transition-colors">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />{r}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-zinc-50 px-4 h-11 flex items-center justify-between text-[12px] text-zinc-500 border-t border-zinc-100">
        <span>⏎ aby wyszukać • ESC aby zamknąć</span>
        <span className="hidden sm:block">Wyszukiwarka rozumie: "panel 153 fi5 antracyt"</span>
      </div>
    </div>
  )
}
