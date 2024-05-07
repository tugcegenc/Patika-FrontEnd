import React, { createContext, useContext, useState } from "react";

export const BalanceContext = createContext();

export const useBalance = () => useContext(BalanceContext);

export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(1000000); // Başlangıç bakiyesi
  const [totalSpent, setTotalSpent] = useState(0);
  const [cart, setCart] = useState({}); // Sepet

  const addToCart = (product, quantityToAdd) => {
    if (balance < product.price * quantityToAdd) {
      console.log("Not enough balance");
      return; // Yetersiz bakiye varsa işlemi durdur
    }

    setCart((prevCart) => {
      const existingProduct = prevCart[product.id] || {
        name: product.name,
        quantity: 0,
        totalSpent: 0,
        price: product.price,
      };

      const newQuantity = existingProduct.quantity + quantityToAdd;
      const newTotalSpent =
        existingProduct.totalSpent + product.price * quantityToAdd;

      setTotalSpent(
        (prevTotalSpent) => prevTotalSpent + product.price * quantityToAdd
      );
      setBalance((prevBalance) => prevBalance - product.price * quantityToAdd);

      return {
        ...prevCart,
        [product.id]: {
          ...existingProduct,
          quantity: newQuantity,
          totalSpent: newTotalSpent,
        },
      };
    });
  };

  const removeFromCart = (productId) => {
    const currentProduct = cart[productId];
    if (!currentProduct || currentProduct.quantity === 0) {
      console.log("Product not found in cart or zero quantity:", productId);
      return;
    }

    const newQuantity = currentProduct.quantity - 1;
    const priceReduction = currentProduct.price;
    const newTotalSpent = currentProduct.totalSpent - priceReduction;

    if (newQuantity > 0) {
      setCart((prevCart) => ({
        ...prevCart,
        [productId]: {
          ...currentProduct,
          quantity: newQuantity,
          totalSpent: newTotalSpent,
        },
      }));
    } else {
      const { [productId]: _, ...rest } = cart;
      setCart(rest);
    }

    setTotalSpent((prevTotalSpent) => prevTotalSpent - priceReduction);
    setBalance((prevBalance) => prevBalance + priceReduction);
  };

  return (
    <BalanceContext.Provider
      value={{ balance, cart, totalSpent, addToCart, removeFromCart }}
    >
      {children}
    </BalanceContext.Provider>
  );
};
