
var a = { name: 'tom', age: 18 };

var b = a;
b.class = 'man';

console.log(a)

// js 的赋值 是根据 地址, 节约内存

var c = Object.assign({}, a);
c.home = 'china';
// 浅复制
console.log(c);

var d = { a: 0, b: { c: 0 } };
var e = Object.assign({}, d);
e.a = 'true';
console.log(e, d);

e.b.c = 'deep';
console.log(e, d);


// JSON.Parse JSON.stringfy
// Object.prototype.hasOwnProperty boolean 对象自身属性中是否具有指定的属性
// and different for in , hasOwnProperty 检测原型链继承的属性

var foo = {
  hasOwnProperty: function () {
    return false;
  },
  bar: 'Here be dragons'
};

var objs = {}
objs.__proto__.name = 'name';

console.log(foo.hasOwnProperty('bar')); // 始终返回 false
console.log(objs.hasOwnProperty('name'));
// 如果担心这种情况，可以直接使用原型链上真正的 hasOwnProperty 方法
console.log(Object.prototype.hasOwnProperty.call(foo, 'bar')); // true

function deepCopy(sour) {
  var target = Array.isArray(sour) ? [] : {};
  for (var key in sour) {
    if (Object.prototype.hasOwnProperty.call(sour, key)) {
      if (typeof sour[key] === 'object' && sour[key] !== null) {
        target[key] = deepCopy(sour[key]);
      } else {
        target[key] = sour[key];
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

var b = deepCopy(a);

b.person.addr = null;

console.log(a, b)