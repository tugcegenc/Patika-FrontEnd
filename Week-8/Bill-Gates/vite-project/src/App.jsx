import React from "react";
import "./App.css";
import { BalanceProvider } from "./contexts/balanceContext";
import ProductList from "./components/ProductList/productList";
import Header from "./components/Header/header";
import CartSummary from "./components/CartSummary/cartSummary";

function App() {
  return (
    <BalanceProvider>
      <div className="App">
        <Header />
        <ProductList />
        <CartSummary />
      </div>
    </BalanceProvider>
  );
}

export default App;
