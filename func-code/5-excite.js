var CARS = [
    { name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true },
    { name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false },
    { name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false },
    { name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false },
    { name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true },
    { name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false }
];

var compose = (...fns) => fns.reduce((ret,item) => (...args) => ret(item(args)))
var compose1 = function (a, b) {
    return function (x) {
        return a(b(x))
    }
}

// var isTure = x => x.filter(item => item.in_stock === true)
// var isLast = x => x[x.length-1]
// var isLastTrue = compose(isLast,isTure)
// var isLastTrue1= compose1( isLast,isTure)
// console.log(isLastTrue(CARS))
// console.log(isLastTrue1(CARS))

var first = x=> x[0];
var getName = x => x['name'];

var firstName = compose(getName,first)
console.log(firstName(CARS))
