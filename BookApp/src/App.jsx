import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Book from './components/Book.jsx'
import Login from './components/Login';
import Register from './components/Register';
import CartPage from './components/CartPage';
import './App.css';

function NavBar({ cartItems, onLogout }) {
  const navigate = useNavigate();
  
  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => navigate('/')}>BookApp</div>
      <div className="nav-actions">
        <button className="logout-btn" onClick={onLogout}>Logout</button>
        <button className="cart-btn" onClick={() => navigate('/cart')}>
          Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      </div>
    </nav>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const handleLogin = (email, password) => {
    console.log('Logging in with:', email, password);
    setIsAuthenticated(true);
  };

  const handleRegister = (name, email, password) => {
    console.log('Registering:', name, email, password);
    setIsAuthenticated(true);
  };

  const handleAddToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };

  if (!isAuthenticated) {
    return (
      <div>
        {showLogin ? (
          <Login 
            onLogin={handleLogin} 
            switchToRegister={() => setShowLogin(false)} 
          />
        ) : (
          <Register 
            onRegister={handleRegister} 
            switchToLogin={() => setShowLogin(true)} 
          />
        )}
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div id="adi">
        <NavBar 
          cartItems={cartItems} 
          onLogout={() => setIsAuthenticated(false)} 
        />
        
        <Routes>
          <Route path="/" element={
            <main className="books">
              <Book title="Math" price={200} onAddToCart={handleAddToCart} />
              <Book title="Physics" price={500} onAddToCart={handleAddToCart} />
              <Book title="Chemistry" price={900} onAddToCart={handleAddToCart} />
            </main>
          } />
          
          <Route path="/cart" element={
            <CartPage items={cartItems} setItems={setCartItems} />
          } />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;