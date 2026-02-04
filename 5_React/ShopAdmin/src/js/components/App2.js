import Title from "./Title";
import Button from "./Button";
import Card from "./Card";
import TextInput from "./TextInput";
import ItemList from "./ItemList";
// import ProductList from "./ItemList";

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

export default function App2() {
  //   const tovary = products.map((product) => {
  //     return (
  //       <Card
  //         key={product.id}
  //         title={product.name}
  //         name={product.name}
  //         image={{ src: product.image, alt: product.name }}
  //         price={product.price}
  //         newPrice={product.newPrice}
  //       >
  //         {product.description}
  //       </Card>
  //     );
  //   });

  return (
    <>
      {/* <Title level={1} text={"New Product Info:"} /> */}

      <ItemList />
      {/* <ProductList /> */}
      {/* <Card /> */}
    </>
  );
}
