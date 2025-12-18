import React, { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item._id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>No item has been added.</p>
          <p>Start shopping now!</p>
        </div>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">₹{item.price}</p>
                  <p className="item-quantity">Quantity: {item.quantity}</p>
                </div>
                <button onClick={() => handleRemove(item._id)} className="remove-btn">
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ₹{getTotalPrice()}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;