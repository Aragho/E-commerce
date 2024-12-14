
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [deliveryFee,  setDeliveryFee] = useState(5)
  const [discountPercentage, setDiscountPercentage] = useState(20)

  const calculateSubtotal = () => {
    return cart.reduce((total,item) => total + item.finalPrice,0)
  };
  const calculateSubTotalBeforeDiscount = () => {
    return calculateSubtotal() + deliveryFee
  };
  const calculateDiscountAmount = () => {
    return (calculateSubTotalBeforeDiscount() * discountPercentage) /100
  };
  const  calculateFinalTotal = () => {
    return  calculateSubTotalBeforeDiscount() - calculateDiscountAmount()
  };


  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        subtotal: calculateSubtotal(),
        deliveryFee,
        discountPercentage,
        totalBeforeDiscount: calculateSubTotalBeforeDiscount(),
        discountAmount: calculateDiscountAmount(),
        finalTotal: calculateFinalTotal(),
        setDeliveryFee,
        setDiscountPercentage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
