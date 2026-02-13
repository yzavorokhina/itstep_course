import React, { useState, useEffect } from 'react';

const ProductForm = ({ products, setProducts }) => {
  // State for form fields
  const [product, setProduct] = useState({
    name: '',
    price: '',
    newPrice: '',
    description: '',
    category: '',
    inStock: true,
    imageUrl: ''
  });

  // Load products from localStorage on mount
  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  // Save products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!product.name || !product.price) {
      alert('Name and price are required!');
      return;
    }

    // Create new product with ID
    const newProduct = {
      ...product,
      id: Date.now(), // Simple ID generation
      createdAt: new Date().toISOString()
    };

    // Add to products list
    setProducts(prev => [...prev, newProduct]);

    // Reset form
    setProduct({
      name: '',
      price: '',
      description: '',
      category: '',
      inStock: true,
      imageUrl: ''
    });

    alert('Product added successfully!');
  };

  // Delete product
  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    alert('Product deleted!');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px' }} className='add-item-form'>
      <h2>Add New Product</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Product Name:
          </label>
          <input className='input-style'
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd' }}
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Price ($):
          </label>
          <input className='input-style'
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            step="0.01"
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd' }}
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            New Price ($):
          </label>
          <input className='input-style'
            type="number"
            name="newPrice"
            value={product.newPrice}
            onChange={handleChange}
            step="0.01"
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Category:
          </label>
          <select className='input-style'
            name="category"
            value={product.category}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd' }}
          >
            <option value="">Select category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
            <option value="home">Home & Garden</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Description:
          </label>
          <textarea className='input-style'
            maxLength="120"
            name="description"
            value={product.description}
            onChange={handleChange}
            rows={4}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              resize: 'vertical'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Image URL:
          </label>
          <input className='input-style'
            type="url"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd' }}
          />
        </div>

        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            name="inStock"
            checked={product.inStock}
            onChange={handleChange}
            style={{ marginRight: '10px' }}
          />
          <span>In Stock</span>
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
