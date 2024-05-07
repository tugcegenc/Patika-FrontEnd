import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/productCard";
import "./productListStyle.css";
import { useBalance } from "../../contexts/balanceContext";

const ProductList = () => {
  const products = [
    { id: 1, name: "Big Mag", image: "big-mac.jpg", price: 2 },
    { id: 2, name: "Flip Flops", image: "flip-flops.jpg", price: 3 },
    { id: 3, name: "Coca-Cola Pack", image: "coca-cola-pack.jpg", price: 5 },
    { id: 4, name: "Video Game", image: "video-game.jpg", price: 60 },
    { id: 5, name: "Airpods", image: "airpods.jpg", price: 199 },
    { id: 6, name: "Gaming Console", image: "gaming-console.jpg", price: 299 },
    { id: 7, name: "Smartphone", image: "smartphone.jpg", price: 699 },
    { id: 8, name: "Ford F-150", image: "ford-f-150.jpg", price: 30_000 },
    { id: 9, name: "Tesla", image: "tesla.jpg", price: 75_000 },
    {
      id: 10,
      name: "Single Family Home",
      image: "single-family-home.jpg",
      price: 300_000,
    },
    { id: 11, name: "Yacht", image: "yacht.jpg", price: 7_500_000 },
    {
      id: 12,
      name: "Cruise Ship",
      image: "cruise-ship.jpg",
      price: 930_000_000,
    },
  ];

  const { addToCart } = useBalance(); // addToCart fonksiyonunu kullan

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          addProduct={() => addToCart(product, 1)} // Ürün ekleme işlemi için addToCart kullan
        />
      ))}
    </div>
  );
};

export default ProductList;
