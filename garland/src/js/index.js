import Light from './garland';
import '../scss/index.scss';

let rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}
let lights = [];


function init() {
  let position = 20;
  console.log(window.outerWidth);
  while (position < window.outerWidth - 50) {
    let light = new Light({ red: rand(0, 255), green: rand(0, 255), blue: rand(0, 255) }, position, rand(30, 100));
    light.draw();
    lights.push(light);
    position += 100;
  }
}

function change() {
  lights.forEach((light) => {
    light.setColor({ red: rand(0, 255), green: rand(0, 255), blue: rand(0, 255) });
  });
}

init();
setInterval(change, 300);