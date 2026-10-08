import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

function App() {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="navbar-logo">
            <Link to="/">Paradise Nursery</Link>
          </div>
          <div className="navbar-links">
            <Link to="/products">Plants</Link>
            <Link to="/cart" className="cart-icon">
              🛒 <span className="cart-count">{totalQuantity}</span>
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;