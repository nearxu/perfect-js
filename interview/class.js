//es5
function Fn(x, y) {
    this.x = x;
    this.y = y;
}

Fn.prototype.add = function () {
    return this.x + this.y;
};
//等价于
//es6
class Fn {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add() {
        return this.x + this.y;
    }
}

var F = new Fn(1, 2);
console.log(F.add()) //3

// Class 的静态方法, 加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用


class Foo {
    static classMethod() {
        return 'hello';
    }
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function

// get、set
class Fn {
    constructor() {
        this.arr = []
    }
    get bar() {
        return this.arr;
    }
    set bar(value) {
        this.arr.push(value)
    }
}


let obj = new Fn();

obj.menu = 1;
obj.menu = 2;

console.log(obj.menu)//[1,2]
console.log(obj.arr)//[1,2]

// exxtends ß
class point{
    constructor(){
        this.name=name
    }
    sum(){
        return this.name
    }
}

class colorPoint extends point{
    constructor(){
        super();
    }
}
var cp = new colorPoint();



