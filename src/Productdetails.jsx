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

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <img src={product.image} width="200" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>Category: {product.category}</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default Productdetails;
