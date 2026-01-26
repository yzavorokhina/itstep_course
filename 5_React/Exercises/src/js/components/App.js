import { useState } from "react";
import Paragraph from "./Paragraph";
import Button from "./Button";
import Title from "./Title";
import Card from "./Card";
import Counter from "./Counter";

const products = [
  {id: 1, name: 'Name of smthing1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrU19hI7wyPYBvHmyarklEx4eKGsfJ6ziE6w&s', text: 'dfkbdfbj'},
  {id: 2, name: 'Name of smthing2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrU19hI7wyPYBvHmyarklEx4eKGsfJ6ziE6w&s', text: 'dfkbdfbj'},
  {id: 3, name: 'Name of smthing3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrU19hI7wyPYBvHmyarklEx4eKGsfJ6ziE6w&s', text: 'dfkbdfbj'},
  {id: 4, name: 'Name of smthing4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrU19hI7wyPYBvHmyarklEx4eKGsfJ6ziE6w&s', text: 'dfkbdfbj'}
];

function App() {
  // const tovary = products.map(function (product) {
  const tovary = products.map((product) => {
    return(
      <Card key={product.id} title={product.name} image={{src: product.image, alt: product.name}}> 
      {product.text}
      </Card>
    )
  });

  return (
    <>
    {/* <Paragraph >
      Lorem Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem Lorem
      Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
    </ Paragraph>
    <Paragraph>
      Lorem Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem Lorem
      Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
    </ Paragraph> */}
    {/* <button disabled={null}>Кнопка</button> */}
    <Button disabled={false} label="text" handleClick={() => alert('clicked button')}/>
    <Title level={4} text={'Это заголовок'} />
    {tovary}
    <Counter />
   </>
  );
}

export default App;