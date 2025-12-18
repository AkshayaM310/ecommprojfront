import React, { useState } from 'react';

function AddProduct({ onProductAdded }) {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    stock: '',
    category: ''
  });

  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...product,
          price: Number(product.price),
          stock: Number(product.stock)
        }),
      });
      
      if (response.ok) {
        alert('Product added successfully!');
        setProduct({
          name: '',
          description: '',
          price: '',
          image: '',
          stock: '',
          category: ''
        });
        setShowForm(false);
        onProductAdded && onProductAdded();
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add Product'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Product Name *"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <textarea
              name="description"
              placeholder="Description"
              value={product.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="number"
              name="price"
              placeholder="Price *"
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="url"
              name="image"
              placeholder="Image URL"
              value={product.image}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="number"
              name="stock"
              placeholder="Stock Quantity"
              value={product.stock}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={product.category}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
      )}
    </div>
  );
}

export default AddProduct;