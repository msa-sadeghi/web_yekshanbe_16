import { useState } from "react";
import CartContext from "./CartContext";
export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCard = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };
  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const value = {
    cart,
    addToCard,
    removeFromCart,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}


