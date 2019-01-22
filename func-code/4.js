// 柯力化

var add = function (x) {
    return function (y) {
        return x + y;
    };
};

var increment = add;
var addTen = add(10)
console.log(increment(1)(2))

console.log(addTen(2))

