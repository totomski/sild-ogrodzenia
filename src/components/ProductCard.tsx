import { Link } from 'react-router-dom'
import { Star, Heart, ShoppingBag, Zap, Eye } from 'lucide-react'
import { Product } from '../data/products'
import { formatPrice } from '../utils/cn'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product, variant = 'default' }: { product: Product, variant?: 'default' | 'compact' | 'featured' }) {
  const { addItem } = useCart()

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: product.image,
      price: product.price,
      originalPrice: product.originalPrice,
      variant: { color: product.colors[0], height: product.heights?.[0] },
      leadTime: product.leadTime
    })
  }

  if (variant === 'compact') {
    return (
      <Link to={`/produkt/${product.slug}`} className="group flex gap-3 p-3 rounded-2xl hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-transparent hover:border-zinc-200 transition-all">
        <img src={product.image} alt={product.name} className="w-20 h-20 rounded-xl object-cover bg-zinc-100" />
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-medium leading-tight line-clamp-2 group-hover:text-[#1e3a5f]">{product.name}</div>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-[12px] font-medium">{product.rating}</span>
            <span className="text-[11px] text-zinc-500">({product.reviews})</span>
          </div>
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="text-[15px] font-bold">{formatPrice(product.price)}</span>
            {product.originalPrice && <span className="text-[12px] line-through text-zinc-400">{formatPrice(product.originalPrice)}</span>}
          </div>
        </div>
      </Link>
    )
  }

  return (
    <div className="group relative bg-white rounded-[20px] border border-zinc-200 overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:border-zinc-300 hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image */}
      <Link to={`/produkt/${product.slug}`} className="relative aspect-[4/3] overflow-hidden bg-zinc-50">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isBestseller && <span className="px-2.5 py-1 rounded-full bg-zinc-900 text-white text-[11px] font-semibold tracking-wide flex items-center gap-1"><Zap className="w-3 h-3" /> BESTSELLER</span>}
          {product.isNew && <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-semibold">NOWOŚĆ</span>}
          {product.isPromo && product.originalPrice && <span className="px-2.5 py-1 rounded-full bg-red-500 text-white text-[11px] font-semibold">-{Math.round((1 - product.price / product.originalPrice) * 100)}%</span>}
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-white hover:scale-110 transition-all">
            <Heart className="w-4 h-4 text-zinc-700" />
          </button>
          <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-[0_4px_12px_rgba(0,0,0,0.1)] hidden group-hover:flex items-center justify-center">
            <Eye className="w-4 h-4 text-zinc-700" />
          </div>
        </div>

        {/* Quick specs overlay */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex flex-wrap gap-1.5">
            {product.specs.slice(0, 3).map(s => (
              <span key={s.label} className="px-2 py-1 rounded-full bg-white/90 backdrop-blur text-[11px] font-medium text-zinc-900">{s.value}</span>
            ))}
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="text-[11px] font-semibold tracking-widest text-zinc-400 uppercase">{product.subcategory} {product.system ? `• ${product.system}` : ''}</span>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-[12px] font-semibold">{product.rating}</span>
            <span className="text-[11px] text-zinc-500">({product.reviews})</span>
          </div>
        </div>

        <Link to={`/produkt/${product.slug}`} className="font-semibold text-[15px] leading-[1.3] line-clamp-2 hover:text-[#1e3a5f] transition-colors min-h-[40px]">
          {product.name}
        </Link>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {product.colors.slice(0, 3).map(c => (
            <span key={c} className="w-5 h-5 rounded-full border-2 border-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]" style={{ backgroundColor: c.includes('7016') ? '#383E42' : c.includes('9005') ? '#0A0A0A' : c.includes('6005') ? '#0B3D2E' : '#D4A574' }} title={c} />
          ))}
          {product.colors.length > 3 && <span className="text-[11px] text-zinc-500 px-1">+{product.colors.length - 3}</span>}
        </div>

        <div className="mt-auto pt-4 flex items-end justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-[20px] font-bold tracking-tight">{formatPrice(product.price)}</span>
              <span className="text-[12px] text-zinc-500">/ {product.pricePer}</span>
            </div>
            {product.originalPrice && <div className="text-[12px] line-through text-zinc-400">{formatPrice(product.originalPrice)}</div>}
            <div className="mt-1 flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              <span className="text-[11px] text-zinc-600">{product.inStock ? `Dostępny • ${product.leadTime}` : 'Na zamówienie'}</span>
            </div>
          </div>

          <button onClick={handleAdd} className="w-11 h-11 rounded-full bg-zinc-900 text-white hover:bg-[#1e3a5f] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:translate-y-0 transition-all">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
