import React, { useState, useEffect } from 'react';
import ProductForm from "./ProductForm";
import StripedRowExample from "./Table";
import AdvancedExample from "./Pagination";

function App() {

  
  const itemsOnPage = 10;

  // State for stored products
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
        <StripedRowExample itemsOnPage={itemsOnPage} products={products} currentPage={currentPage} deleteProduct={deleteProduct}></StripedRowExample>
        <AdvancedExample 
          className="pagination" 
          itemsOnPage={itemsOnPage}
          products={products} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
        ></AdvancedExample>
      </div>
    </>
  );
}

export default App;
