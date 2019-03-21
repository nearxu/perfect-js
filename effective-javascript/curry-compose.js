
function add(a, b) {
  return a + b;
}

function addCur(a) {
  return function (b) {
    return a + b;
  }
}

console.log(add(1, 3));

console.log(addCur(1)(3));

function composeSimple(a, b) {
  return function (x) {
    return a(b(x));
  }
}

function compose(...fns) {
  return fns.reduce((f, g) => {
    return function (...args) {
      return f(g(...args));
    }
  })
}

const toUpper = (x) => x.toUpperCase();
const hello = x => `hello ${x}`;

var grret = composeSimple(hello, toUpper)('world');

console.log(grret);

const f1 = (n) => n + 1;

var add = compose(f1, f1, f1, f1, f1)(1);

console.log(add);


