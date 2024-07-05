// src/CartContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Fetch cart items from the database when the component mounts
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost/netflix/get_cart.php');
        const data = await response.json();
        setCart(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const addToCart = async (item) => {
    setCart([...cart, item]);
    try {
      await fetch('http://localhost/netflix/add_to_cart.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const removeFromCart = async (itemToRemove) => {
    setCart(cart.filter(item => item !== itemToRemove));
    try {
      await fetch('http://localhost/netflix/remove_from_cart.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemToRemove),
      });
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
