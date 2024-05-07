import React from "react";
import { useBalance } from "../../contexts/balanceContext";
import "./cartSummary.css";

const CartSummary = () => {
  const { cart, balance } = useBalance();

  const totalSpent = Object.values(cart).reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="cart-summary">
      <h2>Your Receipt</h2>
      <ul>
        {Object.values(cart).map((product) => (
          <li key={product.id} className="cart-item">
            <span className="product-name">{product.name}</span>
            <span className="product-quantity">x{product.quantity}</span>
            <span className="product-price">
              ${product.price * product.quantity}
            </span>
          </li>
        ))}
      </ul>
      <p className="total-spent">
        TOTAL:
        <span className="price">${totalSpent.toLocaleString()}</span>
      </p>
    </div>
  );
};

export default CartSummary;
