import Button from "./Button";

function List() {
    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
      ];

  const listItems = products.map((product) => (
    <li key={product.id} style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}>
        {product.title}
    </li>
  ));

  return (<ul>{listItems}</ul>);
}

function MainPage() {
  let content = {
    title: "Main",
    text: "This is a MAIN page with a MAIN info.",
  };

  let styles = {
    textAlign: "center",
    backgroundColor: "pink",
  };

  return (
    <>
      <h1>{content.title}</h1>
      <p>{content.text}</p>
      {/* <p>{content.text + "???"}</p> */}
      {/* <p style={styles}>{`${content.text}`}</p> */}
      <Button />
      <List />
    </>
  );
}

export default MainPage;
