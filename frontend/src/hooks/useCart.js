import React, { createContext, useContext, useState } from "react";
import { sample_foods } from "../data";

const CartContext = createContext(null)

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(
        sample_foods
            .slice(1, 4)
            .map(food => ({ food, quantity: 1, price: food.price}))
    );
    const [totalPrice, setTotalPrice] = useState(40);
    const [totalCount, setTotalCount] = useState(3);
// Here we are filtering all the food items and returning everything but the food id. (Removing the food id from the filteredcartitems)
    const removeFromCart = foodId => {
      const filteredCartItems = cartItems.filter(item => item.food.id !== foodId);
      setCartItems(filteredCartItems);
    };

  return ( 
    <CartContext.Provider 
        value={{ cart: { items: cartItems, totalPrice, totalCount }, removeFromCart, }}
    >
        {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext)