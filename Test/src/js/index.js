
// const _ = require('lodash');
// const $ = require('jquery');
// const alertModule = require('./alert');

import _ from 'lodash';
import showAlert from './alert';
import '../scss/custom.scss';


function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

  // $('body').css({backgroundColor:'red'});
  // alertModule.myFunction('Это алерт!!');

  // showAlert('Hello');

  