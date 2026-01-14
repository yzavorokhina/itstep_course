import Button from "./Button";

export function List({ items }) {
  const listItems = items.map((product) => (
    <ListItem item={product} key={product.id} />
  ));

  return <ul>{listItems}</ul>;
}

export function ListItem({ item, key }) {
  return (
    <li style={{ color: item.isFruit ? "magenta" : "darkgreen" }}>
      {item.title}
    </li>
  );
}
function MainPage() {
  let content = {
    title: "Main",
    text: "This is a MAIN page with a MAIN info.",
  };

  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

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
      <Button startCount={5} btnClass="btn-danger" step={1} />
      <Button startCount={3} btnClass="btn-info" step={3} />
      <List items={products} />
    </>
  );
}

export default MainPage;
