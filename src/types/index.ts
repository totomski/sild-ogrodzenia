export interface Product {
  id: string;
  name: string;
  namePl: string;
  category: Category;
  subcategory: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  currency: 'PLN' | 'EUR';
  images: string[];
  thumbnail: string;
  specifications: Specification[];
  variants: ProductVariant[];
  reviews: Review[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  leadTime: string;
  tags: string[];
  featured: boolean;
  isNew: boolean;
  isBestseller: boolean;
}

export interface ProductVariant {
  id: string;
  name: string;
  namePl: string;
  price: number;
  attributes: Record<string, string>;
  inStock: boolean;
  sku: string;
}

export interface Specification {
  name: string;
  namePl: string;
  value: string;
  unit?: string;
}

export interface Review {
  id: string;
  author: string;
  authorInitials: string;
  rating: number;
  title: string;
  titlePl: string;
  content: string;
  contentPl: string;
  date: string;
  verified: boolean;
  helpful: number;
  images?: string[];
}

export interface Category {
  id: string;
  name: string;
  namePl: string;
  description: string;
  descriptionPl: string;
  icon: string;
  image: string;
  subcategories: Subcategory[];
  configurator?: Configurator;
}

export interface Subcategory {
  id: string;
  name: string;
  namePl: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Configurator {
  id: string;
  name: string;
  namePl: string;
  description: string;
  steps: ConfiguratorStep[];
}

export interface ConfiguratorStep {
  id: string;
  title: string;
  titlePl: string;
  type: 'select' | 'input' | 'range' | 'toggle';
  options?: ConfiguratorOption[];
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
}

export interface ConfiguratorOption {
  id: string;
  label: string;
  labelPl: string;
  value: string;
  priceDelta: number;
  image?: string;
}

export interface CartItem {
  id: string;
  productId: string;
  variantId: string;
  quantity: number;
  price: number;
  name: string;
  namePl: string;
  image: string;
  variantName: string;
  variantAttributes: Record<string, string>;
}

export interface CartState {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  currency: 'PLN' | 'EUR';
  isOpen: boolean;
}

export interface CheckoutState {
  step: 'shipping' | 'payment' | 'review' | 'complete';
  shipping: ShippingInfo;
  payment: PaymentInfo;
  order?: Order;
}

export interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  method: ShippingMethod;
}

export interface ShippingMethod {
  id: string;
  name: string;
  namePl: string;
  price: number;
  days: string;
  description: string;
}

export interface PaymentInfo {
  method: PaymentMethod;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvc?: string;
  cardName?: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  namePl: string;
  icon: string;
  type: 'card' | 'blik' | 'transfer' | 'cod';
}

export interface Order {
  id: string;
  number: string;
  date: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  items: CartItem[];
  shippingInfo: ShippingInfo;
  payment: PaymentInfo;
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  currency: 'PLN' | 'EUR';
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  addresses: Address[];
  orders: Order[];
  wishlist: string[];
}

export interface Address {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
}

export interface FilterState {
  categories: string[];
  subcategories: string[];
  priceRange: [number, number];
  inStockOnly: boolean;
  rating: number;
  tags: string[];
  sortBy: SortOption;
}

export type SortOption = 
  | 'featured' 
  | 'price-asc' 
  | 'price-desc' 
  | 'rating' 
  | 'newest' 
  | 'bestselling' 
  | 'name-asc' 
  | 'name-desc';

export interface SearchResult {
  products: Product[];
  suggestions: string[];
  total: number;
  query: string;
}

export interface AppConfig {
  currency: 'PLN' | 'EUR';
  language: 'pl' | 'en';
  freeShippingThreshold: number;
  taxRate: number;
  companyName: string;
  companyAddress: string;
  companyNip: string;
  supportEmail: string;
  supportPhone: string;
}