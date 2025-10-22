import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], total: 0, itemCount: 0 });
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchCart();
    } else {
      setCart({ items: [], total: 0, itemCount: 0 });
    }
  }, [user]);

  const fetchCart = async () => {
    if (!user) return;
    
    try {
      setLoading(true);
      const response = await axios.get(`/api/cart/${user.id}`);
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId, size, color, quantity = 1) => {
    if (!user) {
      return { success: false, message: 'Please login to add items to cart' };
    }

    try {
      setLoading(true);
      const response = await axios.post(`/api/cart/${user.id}/add`, {
        productId,
        size,
        color,
        quantity
      });
      setCart(response.data);
      return { success: true, message: 'Item added to cart' };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Failed to add item to cart' 
      };
    } finally {
      setLoading(false);
    }
  };

  const updateCartItem = async (itemId, quantity) => {
    if (!user) return;

    try {
      setLoading(true);
      const response = await axios.put(`/api/cart/${user.id}/update/${itemId}`, {
        quantity
      });
      setCart(response.data);
    } catch (error) {
      console.error('Error updating cart item:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (itemId) => {
    if (!user) return;

    try {
      setLoading(true);
      const response = await axios.delete(`/api/cart/${user.id}/remove/${itemId}`);
      setCart(response.data);
    } catch (error) {
      console.error('Error removing cart item:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    if (!user) return;

    try {
      setLoading(true);
      const response = await axios.delete(`/api/cart/${user.id}/clear`);
      setCart(response.data);
    } catch (error) {
      console.error('Error clearing cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    cart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    loading
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};