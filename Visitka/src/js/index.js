import Element from "./element";
import ImageElement from "./image";

const el = new Element('div');
// console.log(el);

el.setId('block');
el.addClasses("border", "flex");
//el.removeClasses("flex");
el.addStyles({
    width:"100px",
    height:"100px",
    border:"1px solid black",
    backgroundColor: "purple"
});
// el.addStyles({
//     transform:"rotate(45deg)"
// });
//el.deleteStyles('transform');

const link = new Element('a');
const img = new ImageElement('img');
img.setSrc('https://i.pinimg.com/736x/7e/26/0a/7e260a57db61160303100b87d788dd6a.jpg');
img.addStyles({
    width:"100%",
    height:"auto",
    objectFit: "cover"
});
img.setAlt("Это изображение для текущего дня в календаре праздников");
console.log(img);

link.appendChilds(img);
el.appendChilds(link);

console.log(el);

document.body.append(el.createDomElement());