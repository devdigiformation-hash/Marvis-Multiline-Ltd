'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { RetailProduct } from '@/data/catalogue';

export interface CartItem {
  product: RetailProduct;
  quantity: number;
  selectedVariant?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: RetailProduct, quantity?: number, variant?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('marvis_cart');
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('marvis_cart', JSON.stringify(cart));
      } catch {
        // ignore
      }
    }
  }, [cart, mounted]);

  const addToCart = (product: RetailProduct, quantity = 1, variant?: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && item.selectedVariant === variant);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.selectedVariant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, selectedVariant: variant }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
