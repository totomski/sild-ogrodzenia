import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { CategoryTile as CategoryTileType } from '../data/categories'

export default function CategoryTile({ category, index = 0 }: { category: CategoryTileType, index?: number }) {
  return (
    <Link
      to={category.href}
      className="group relative rounded-[24px] overflow-hidden bg-zinc-900 min-h-[280px] lg:min-h-[360px] flex flex-col justify-end p-6 lg:p-7 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] hover:-translate-y-1"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Image */}
      <img src={category.image} alt={category.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
      <div className={`absolute inset-0 bg-gradient-to-t ${category.color} via-black/40 to-black/10 opacity-90 group-hover:opacity-[0.85] transition-opacity`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white font-black text-[11px] tracking-widest">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="w-10 h-10 rounded-full bg-white text-zinc-900 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-black text-[18px] lg:text-[20px] leading-[0.95] tracking-[-0.02em] text-white">{category.title}</h3>
          <p className="text-[13px] font-medium text-white/70 leading-tight">{category.subtitle}</p>
          <p className="text-[13px] text-white/60 leading-[1.4] line-clamp-2 hidden lg:block">{category.description}</p>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-white text-[12px] font-medium border border-white/10">
            {category.count} produktów
          </span>
          <span className="text-[13px] font-medium text-white/80 group-hover:text-white flex items-center gap-1.5 transition-colors">
            Zobacz <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </span>
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute -inset-px rounded-[24px] bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </Link>
  )
}

export function CategoryTileSmall({ category }: { category: CategoryTileType }) {
  return (
    <Link to={category.href} className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200 p-4 hover:border-zinc-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all flex gap-4">
      <img src={category.image} alt={category.title} className="w-20 h-20 rounded-xl object-cover bg-zinc-100 group-hover:scale-[1.02] transition-transform" />
      <div className="flex-1 min-w-0">
        <div className="font-bold text-[13px] leading-tight tracking-wide">{category.title}</div>
        <div className="text-[12px] text-zinc-500 mt-1 line-clamp-2">{category.description}</div>
        <div className="text-[12px] font-medium text-[#1e3a5f] mt-2 group-hover:gap-1.5 flex items-center gap-1">Sprawdź <ArrowUpRight className="w-3 h-3" /></div>
      </div>
    </Link>
  )
}
