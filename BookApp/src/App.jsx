import React, { useState } from 'react';
import Book from './components/Book.jsx'
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (email, password) => {
    // Add your login logic here
    console.log('Logging in with:', email, password);
    setIsAuthenticated(true);
  };

  const handleRegister = (name, email, password) => {
    // Add your registration logic here
    console.log('Registering:', name, email, password);
    setIsAuthenticated(true);
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
    <div id="adi">
      <button onClick={() => setIsAuthenticated(false)}>Logout</button>
      <Book title="Math" price={200} />
      <Book title="Physics" price={500} />
      <Book title="Chemistry" price={900} />
    </div>
  );
}

export default App;