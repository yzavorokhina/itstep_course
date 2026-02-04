import Paragraph from "./Paragraph";
import Button from "./Button";
import Title from "./Title";
import Card from "./Card";
import Counter from "./Counter";
import TextInput from "./TextInput";
import LoginForm from "./LoginForm";
import Timer from './Timer';
import ToggleButton from "./Toggle";
// import SimpleAlert from "./Alert";
import Alert from "./Alert";


const products = [
  { id: 1, name: 'Name of smthing1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrU19hI7wyPYBvHmyarklEx4eKGsfJ6ziE6w&s', text: 'text1' },
  { id: 2, name: 'Name of smthing2', image: 'https://the-challenger.ru/wp-content/uploads/2017/12/shutterstock_1022224348-800x534.jpg', text: 'text2' },
  { id: 3, name: 'Name of smthing3', image: 'https://s0.rbk.ru/v6_top_pics/media/img/5/34/347350386436345.jpeg', text: 'text3' },
  { id: 4, name: 'Name of smthing4', image: 'https://doninturflot.com/upload/dev2fun.imagecompress/webp/uf/259/259e77caabd4ed25f603ae099510e754/dd00421575cf7720c6a0a0012e21d1cb.webp', text: 'text4' }
];


function App() {
  // const tovary = products.map(function (product) {
  const tovary = products.map((product) => {
    return (
      <Card key={product.id} title={product.name} image={{ src: product.image, alt: product.name }}>
        {product.text}
      </Card>
    )
  });

  return (
    <>
      <Timer />
      <Title level={1} text={'Header'} />
      <Paragraph >
        Lorem Lorem Lorem LoremLorem
        LoremLorem Lorem Lorem Lorem
      </ Paragraph>
      <Paragraph>
        Lorem Lorem Lorem LoremLorem
        LoremLorem Lorem Lorem Lorem
      </ Paragraph>

      <div className="buttons">
        <button disabled={null}>Disabled button</button>
        <Button disabled={false} label="Button text" handleClick={() => alert('clicked button')} />
        <Button disabled={false} label="Button text" handleClick={() => alert('clicked button')} />
      </div>

      <div className="card-wrapper">
        {tovary}
      </div>

      <Counter />
      <ToggleButton />

      <TextInput placeholder={"Write something here :-)"} />
      {/* <TextInput value={10} onChange={(event) => console.log(event.target.value) /> */}

      <LoginForm />
    
    {/* <SimpleAlert /> */}
    {/* <Alert type = {'warning'} title = {'Arert Title'} message = {'Alert Messages'} onClose = {'onClose'} /> */}
    <Alert type="success" title="Success!" message="Your action was completed." onClose={true} />

    </>
  );
}

export default App;