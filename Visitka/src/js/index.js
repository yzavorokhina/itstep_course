import Element from "./element";

const el = new Element('div');
// console.log(el);

el.setId('block');

el.addClasses("border", "flex");
el.removeClasses("flex");

console.dir(el);

el.render(document.body);

