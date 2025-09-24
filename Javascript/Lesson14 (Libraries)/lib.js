const calc = {
  sum: function (a, b) {
    console.log(a + b);
    return this;
  },
  sub: function (a, b) {
    console.log(a - b);
    return this;
  },
  mul: function (a, b) {
    console.log(a * b);
    return this;
  },
  div: function (a, b) {
    if (b == 0) {
      console.log(0);
    } else {
      console.log(a / b);
    }
    return this;
  },
};

// function $(selector) {
//   return document.querySelector(selector);
// }

//console.log(calc.sum(2,2));

let r = calc.sum(2,2);

r.div(2,2);

calc.sum(2,2).div(2,2);

calc.sum(2,2).div(2,2).mul(2,2);