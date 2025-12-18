import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Productdetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err));
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item._id === product._id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  const buyNow = () => {
    addToCart();
    window.location.href = '/cart';
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">₹{product.price}</p>
        <div className="description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
        <div className="product-meta">
          <p><span>Stock:</span> {product.stock} units available</p>
          <p><span>Category:</span> {product.category}</p>
        </div>
        <div className="product-buttons">
          <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
          <button className="buy-now" onClick={buyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Productdetails;
