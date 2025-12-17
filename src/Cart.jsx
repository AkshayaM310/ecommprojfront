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

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <>
          <p>No item has been added.</p>
          <p>Start shopping now!</p>
        </>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} style={{ marginBottom: "20px" }}>
              <img src={item.image} alt={item.name} width="120" />
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>

              <button onClick={() => handleRemove(item._id)}>
                Remove Item
              </button>

              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;