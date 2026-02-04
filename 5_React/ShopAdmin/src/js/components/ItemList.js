// MY TODO:
// ItemList
// Описание: Компонент отображения списка.
// Требования: - принимает массив строк - использует key
// Ожидаемые навыки: - рендеринг списков
/*********************************************************************************************/

import React from "react";
// import Card from './Card';

// function ItemList() {
//   const cars = ['Ford', 'BMW', 'Audi']; // The data array

//   // Map over the array to create list items
//   const carListItems = cars.map((car, index) => (
//     // A unique key is required for each element
//     <li key={index}>I am a {car}</li>
//   ));

//   return (
//     <>
//       <h1>ItemList:</h1>
//       <ul>{carListItems}</ul> {/* Render the new array of elements */}
//     </>
//   );
// }

// export default ItemList;

export default function ProductList() {

const style = {
    priceStyles: {
        textDecoration: "line-through"
    },
};

  const products = [
    {
      id: 1,
      name: "Laptop",
      description: "The best of the best",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrU19hI7wyPYBvHmyarklEx4eKGsfJ6ziE6w&s",
      price: 1200,
      newPrice: 300,
    },
    {
      id: 2,
      name: "Phone",
      description: "The best of the best",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrU19hI7wyPYBvHmyarklEx4eKGsfJ6ziE6w&s",
      price: 800,
      newPrice: 300,
    },
    {
      id: 3,
      name: "Headphones",
      description: "The best of the best",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrU19hI7wyPYBvHmyarklEx4eKGsfJ6ziE6w&s",
      price: 150,
      newPrice: 300,
    },
  ];

  return (
    <div>
      <h2>New Products Info:</h2>
      <ul>
        {/* add className="strike" to price */}
        {products.map((product) => (
          <li key={product.id}>
            {product.name} {product.description} {product.image} - $
            {product.price} {product.newPrice}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* example: */
// function ProductList() {
//   const products = [
//     { id: 1, name: 'Laptop', price: 1200 },
//     { id: 2, name: 'Phone', price: 800 },
//     { id: 3, name: 'Headphones', price: 150 },
//   ];

//   return (
//     <div>
//       <h2>Products</h2>
//       <ul>
//         {products.map((product) => (
//           // Use a unique ID from the data as the key (best practice)
//           <li key={product.id}>
//             {product.name} - ${product.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductList;
