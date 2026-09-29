import React, { createContext, useContext, useEffect, useState, useMemo } from 'react'

export interface CartItem {
  id: string
  productId: string
  slug: string
  name: string
  image: string
  price: number
  originalPrice?: number
  quantity: number
  variant: {
    color: string
    height?: string
    customLength?: number
  }
  leadTime: string
}

interface CartContextType {
  items: CartItem[]
  isOpen: boolean
  itemCount: number
  subtotal: number
  shipping: number
  tax: number
  total: number
  freeShippingProgress: number
  freeShippingRemaining: number
  addItem: (item: Omit<CartItem, 'id' | 'quantity'> & { quantity?: number }) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

const FREE_SHIPPING_THRESHOLD = 1500
const SHIPPING_COST = 149
const TAX_RATE = 0.23

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sild-cart')
      if (saved) {
        try { return JSON.parse(saved) } catch { return [] }
      }
    }
    return []
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('sild-cart', JSON.stringify(items))
  }, [items])

  const itemCount = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items])
  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.price * i.quantity, 0), [items])
  const shipping = useMemo(() => subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_COST, [subtotal])
  const tax = useMemo(() => subtotal * TAX_RATE, [subtotal])
  const total = useMemo(() => subtotal + shipping, [subtotal, shipping])
  const freeShippingProgress = useMemo(() => Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100), [subtotal])
  const freeShippingRemaining = useMemo(() => Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0), [subtotal])

  const addItem = (newItem: Omit<CartItem, 'id' | 'quantity'> & { quantity?: number }) => {
    setItems(prev => {
      const existingIndex = prev.findIndex(
        i => i.productId === newItem.productId && 
             i.variant.color === newItem.variant.color && 
             i.variant.height === newItem.variant.height
      )
      if (existingIndex > -1) {
        const updated = [...prev]
        updated[existingIndex].quantity += newItem.quantity || 1
        return updated
      }
      return [...prev, { 
        ...newItem, 
        id: `${newItem.productId}-${newItem.variant.color}-${newItem.variant.height || ''}-${Date.now()}`,
        quantity: newItem.quantity || 1 
      }]
    })
    setIsOpen(true)
  }

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity } : i))
  }

  const clearCart = () => setItems([])
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  const toggleCart = () => setIsOpen(v => !v)

  return (
    <CartContext.Provider value={{
      items, isOpen, itemCount, subtotal, shipping, tax, total,
      freeShippingProgress, freeShippingRemaining,
      addItem, removeItem, updateQuantity, clearCart,
      openCart, closeCart, toggleCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
