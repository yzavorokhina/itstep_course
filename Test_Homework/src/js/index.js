// const _ = require('lodash');
const $ = require('jquery');
// const alertModule = require('./alert');

import _ from 'lodash';
// import showAlert from './alert';
import '../scss/custom.scss';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

$('body').css({ backgroundColor: 'red' });

let currentColor;
const colors = ['red', 'green', 'blue', 'cyan', 'magenta'];

function changeBackground() {
  const currentColorIndex = colors.indexOf(currentColor);
  const nextColor = colors[currentColorIndex + 1] || colors[0];

  document.body.style.background = nextColor;
  console.log(`new color is ${nextColor}`);
  currentColor = nextColor;
}

setInterval(changeBackground, 2000);
// changeBackground('red');

// alertModule.myFunction('Это алерт!!');
// showAlert('Hello');