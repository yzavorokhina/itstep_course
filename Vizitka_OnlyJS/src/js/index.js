import Element from "./element";
import ImageElement from "./image";
import ImageAvatar from "../images/Pepe.jpg";
//import ImageFon1 from "../images/Pepe_fon2.jpg";

// document.body.style.backgroundImage = 'url("../src/images/Pepe_fon2.jpg")';
//document.body.style.backgroundImage = 'url("../src/images/Pepe_fon3.jpg")';
document.body.style.backgroundImage = 'url("../src/images/Pepe_fon4.jpg")';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';

const el = new Element('div');
// console.log(el);

el.setId('block');
el.addClasses("border", "flex");
//el.removeClasses("flex");
el.addStyles({
    width: "1780px",
    height:"800px",
    padding: "30px",
    margin: "30px",
    position: "absolute",
    zIndex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border:"3px solid white",
    borderRadius: "20px",
    backgroundColor: "none"
});
// el.addStyles({
//     transform:"rotate(45deg)"
// });
//el.deleteStyles('transform');
//el.render(document.body);

const link = new Element('a');
const img = new ImageElement('img');

// img.setSrc(ImageFon2);
// img.addStyles({
//     width:"100%",
//     height:"auto",
//     position: "fixed",
//     zIndex: "-1",
//     objectFit: "cover"
// });

img.setSrc(ImageAvatar);
img.addStyles({
    width:"100px",
    height:"auto",
    zIndex: "10",
    border:"8px solid purple",
    objectFit: "cover",
    borderRadius: "200px"
});
img.setAlt("Это аватар");
console.log(img);

link.appendChilds(img);
el.appendChilds(link);

console.log(el);

document.body.append(el.createDomElement());