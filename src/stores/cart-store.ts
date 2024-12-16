import { createStore } from 'zustand/vanilla'
import { persist } from 'zustand/middleware'

export type CartState = {
  products: {
    id: number
    name: string
    image: string
    price: number
    discountPrice: number
    nature: string[]
    quantity: number
  }[]
}

export type CartActions = {
  addProduct: (product: CartState['products'][0]) => void
  updateProduct: (product: CartState['products'][0]) => void
  removeProduct: (id: number) => void
}

export type CartStore = CartState & CartActions

export const defaultInitState: CartState = {
  products: [],
}

export const createCartStore = (initState: CartState = defaultInitState) =>
  createStore(
    persist<CartStore>(
      (set) => ({
        ...initState,
        addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
        updateProduct: (product) =>
          set((state) => ({ products: state.products.map((p) => (p.id === product.id ? product : p)) })),
        removeProduct: (id) => set((state) => ({ products: state.products.filter((product) => product.id !== id) })),
      }),
      { name: 'cart-store' }
    )
  )
