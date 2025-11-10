import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

function CartPage({ items, setItems }) {
  const navigate = useNavigate();
  
  const removeItem = (index) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      
      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button onClick={() => removeItem(index)}>Remove</button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>
            <button onClick={() => navigate('/')}>Continue Shopping</button>
            <button onClick={() => alert('Checkout functionality coming soon!')}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;