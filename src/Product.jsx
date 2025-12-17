import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map(p => (
        <div key={p._id} className="card">
          <img src={p.image} width="150" />
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <p>₹{p.price}</p>
          <p>Stock: {p.stock}</p>
          <p>Category: {p.category}</p>

          <Link to={`/product/${p._id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Product;
