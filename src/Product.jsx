import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";

function Product() {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, [refresh]);

  return (
    <div>
      <h2>Products</h2>
      <AddProduct onProductAdded={() => setRefresh(prev => prev + 1)} />

      <div className="productlist">
        {products.map(p => (
          <div key={p._id} className="card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <Link to={`/product/${p._id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
