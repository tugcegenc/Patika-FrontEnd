import React, { useState, useContext } from "react";
import { BalanceContext } from "../../contexts/balanceContext"; // BalanceContext'in doğru yolu görecek şekilde düzenleyin
import "./productCardStyle.css";

const ProductCard = ({ id, name, price, image, description, addProduct }) => {
  const [quantity, setQuantity] = useState(0);
  const { balance, addToCart } = useContext(BalanceContext);

  // Butonun aktif olup olmamasını kontrol etmek için bir değişken tanımlayın
  const canBuy = balance - price >= 0; // Bakiye yeterliyse satın alma yapılabilir
  const buy = () => {
    if (canBuy) {
      setQuantity((prev) => prev + 1);
      addToCart({ id, name, price }, 1);
    }
  };

  const sell = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
      addToCart({ id, name, price }, -1);
    }
  };

  return (
    <div className="product-card">
      <img src={`src/assets/${image}`} alt={name} style={{ height: "40%" }} />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-description">{description}</p>
        <p className="price">${price.toLocaleString("en-US")}</p>
        <div className="buttons-container">
          <button
            className="button sell-button"
            onClick={sell}
            disabled={quantity <= 0}
          >
            Sell
          </button>
          <div className="quantity-display">{quantity}</div>
          <button
            disabled={!canBuy}
            className="button buy-button"
            onClick={buy}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
