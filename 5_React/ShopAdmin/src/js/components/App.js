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

function App() {
  const tovary = products.map((product) => {
    return (
      <Card
        key={product.id}
        title={product.name}
        name={product.name}
        image={{ src: product.image, alt: product.name }}
        price={product.price}
        newPrice={product.newPrice}
      >
        {product.description}
      </Card>
    );
  });

  return (
    <>
      <Title level={1} text={"Add a New Product:"} />
      {/* 
      <form action="/submit_page.php" method="post">
        <label for="name">name:</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="description">description:</label>
        <input type="text" id="description" name="description" required>
        <br>
        <label for="image">image:</label>
        <input type="text" id="image" name="image" required>
        <br>
        <label for="price">price:</label>
        <input type="text" id="price" name="price" required>
        <br>
        <label for="newPrice">price:</label>
        <input type="text" id="newPrice" name="newPrice" required>
        <br>

        <button type="submit">Add New Product</button>
      </form> */}

      <form action="/submit_page.php" method="post">
        <TextInput placeholder={"Product name"} />
        <TextInput placeholder={"Product description"} />
        <TextInput placeholder={"Product image url"} />
        <TextInput placeholder={"Product Price"} />
        <TextInput placeholder={"Product New Price"} />

        <div className="buttons">
          <Button
            disabled={false}
            label="Add product"
            handleClick={() => alert("clicked button")}
          />
        </div>
      </form>

      {/* <div className="card-wrapper">
        {tovary}
      </div> */}

      {/* <ItemList /> */}
      {/* <ProductList /> */}
      {/* <Card /> */}
    </>
  );
}

export default App;
