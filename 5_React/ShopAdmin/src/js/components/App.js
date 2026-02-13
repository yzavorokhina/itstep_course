import React, { useState, useEffect } from 'react';
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

function App() {

  // State for stored products
  const [products, setProducts] = useState([]);

  const deleteProduct = (id) => {
    console.log({ deleteProduct: id });
    setProducts(prevProducts =>
      prevProducts.filter((product) => product.id !== id)
    );
  }

  return (
    <>
      <div className="left">
        <ProductForm products={products} setProducts={setProducts} />
      </div>
      <div className="right">
        <ProductList products={products} deleteProduct={deleteProduct} />
      </div>
    </>
  );
}

export default App;
