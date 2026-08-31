import { createContext } from 'react';
import { Product } from '../types/productType';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextValue | undefined>(
  undefined,
);
