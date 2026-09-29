import React, { createContext, useContext, useState, useMemo } from 'react'
import { products, Product } from '../data/products'

interface SearchContextType {
  query: string
  setQuery: (q: string) => void
  results: Product[]
  suggestions: string[]
  isSearching: boolean
  recentSearches: string[]
  addRecentSearch: (q: string) => void
}

const SearchContext = createContext<SearchContextType | null>(null)

const allSuggestions = [
  'panel 3D 153cm',
  'panel 3D 173cm fi5',
  'słupek 60x40',
  'podmurówka 250',
  'sztacheta Emka',
  'sztacheta Astra',
  'brama Forte',
  'furtka panelowa',
  'ogrodzenie Forte',
  'ogrodzenie Linea',
  'bloczki Fini',
  'obejma startowa',
  'wkręty farmerskie',
  'brama przesuwna',
  'komplet ogrodzenia 20m'
]

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState('')
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sild-recent-searches')
      return saved ? JSON.parse(saved) : ['panel 153', 'Forte', 'sztacheta czarna']
    }
    return []
  })

  const { results, suggestions } = useMemo(() => {
    if (!query.trim() || query.length < 2) {
      return { results: [], suggestions: [] }
    }
    const q = query.toLowerCase()
    
    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q) ||
      p.system?.toLowerCase().includes(q) ||
      p.specs.some(s => s.value.toLowerCase().includes(q)) ||
      p.colors.some(c => c.toLowerCase().includes(q))
    ).slice(0, 8)

    const sug = allSuggestions.filter(s => 
      s.toLowerCase().includes(q) && s.toLowerCase() !== q
    ).slice(0, 5)

    return { results: filtered, suggestions: sug }
  }, [query])

  const addRecentSearch = (q: string) => {
    if (!q.trim()) return
    setRecentSearches(prev => {
      const updated = [q, ...prev.filter(s => s !== q)].slice(0, 5)
      localStorage.setItem('sild-recent-searches', JSON.stringify(updated))
      return updated
    })
  }

  return (
    <SearchContext.Provider value={{
      query, setQuery, results, suggestions,
      isSearching: query.length >= 2,
      recentSearches, addRecentSearch
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  const ctx = useContext(SearchContext)
  if (!ctx) throw new Error('useSearch must be used within SearchProvider')
  return ctx
}
