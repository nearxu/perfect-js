
function cloneShow(source) {
  var target = Array.isArray(source) ? [] : {};;
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object' && source[key] != null) {
        target[key] = cloneShow(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

var a = {
  person: {
    name: "top",
    addr: {
      gad: "UK"
    }
  },
  list: [1, 2, 3],
  age: null,
  money: 100
}

var b = cloneShow(a);

b.person.addr = null;

console.log(a, b)
