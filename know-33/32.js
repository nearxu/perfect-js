//

const foo = (x, b) => x + b
foo(1, 2) // => 3

// JS为什么是单线程的? 为什么需要异步? 单线程又是如何实现异步的呢?

// 通过的事件循环(event loop),
console.log(1)

setTimeout(function () {
    console.log(2)
}, 0)

console.log(3)

// 柯力化
// Add = (x, y, z) => x + y + z
// 变成了CurryAdd = x => y => z => x + y + z
 // add(1)(2)(3)

//  compose
var compose = function (f, g) {
    return function (x) {
        return f(g(x));
    };
};

var toUpperCase = function (x) { return x.toUpperCase(); };
var exclaim = function (x) { return x + '!'; };
var shout = compose(exclaim, toUpperCase);

shout("send in the clowns");
//=> "SEND IN THE CLOWNS!"
