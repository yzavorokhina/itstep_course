import React, { useState } from 'react';
import ProductForm from './ProductForm';

export default function ProductList({ products, deleteProduct }) {
    return (
        <div className='output-field'>
            <h2>Products List ({products.length})</h2>
            {products.length === 0 ? (
                <p>No products added yet.</p>
            ) : (
                <div className='cards-wrapper'>
                    {products.map(product => (
                        <div key={product.id} style={{
                            border: '1px solid #eee',
                            // padding: '15px',
                            marginBottom: '10px',
                            borderRadius: '5px'
                        }} className='card'>

                            {product.imageUrl && <div><img src={product.imageUrl} className='item-image' /></div>}


                            <div className='item-info'>
                                <div className='item-name'><strong>{product.name}</strong></div>

                                {product.newPrice && <div className='striked'>$ {parseFloat(product.price).toFixed(2)}</div>}
                                {!product.newPrice && <div>$ {parseFloat(product.price).toFixed(2)}</div>}


                                {product.newPrice &&
                                    <div>$ {parseFloat(product.newPrice).toFixed(2)}</div>
                                }
                                {product.category && <div>Category: {product.category}</div>}
                                {/* MY TODO: trim the text output to a specified number of characters, trim by words, and add three dots if the text is not displayed completely */}
                                {product.description && <div className='item-description'>{product.description}</div>}

                                <div>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</div>
                                <button
                                    onClick={() => deleteProduct(product.id)}
                                    style={{
                                        marginTop: '10px',
                                        backgroundColor: '#dc3545',
                                        color: 'white',
                                        border: 'none',
                                        padding: '5px 10px',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}