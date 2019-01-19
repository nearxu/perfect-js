var f1= function (n) {
    this.num = n;
}

f1.prototype.add = function(other){
    this.num += other.num;
    return this;
}

f1.prototype.saw = function(other){
    this.num = this.num*other.num;
    return this;
}

var a= new f1(4)
var b = new f1(2)
var c = new f1(0)

var result = a.add(c).saw(b).add(a.saw(b))

console.log(result)

var add1 = function(a,b){return a+b}

var saw1 = function (a,b) {
    return a*b
}

var a = 4
var b = 2
var c = 0

// var result = flock_a.conjoin(flock_c).breed(flock_b).conjoin(flock_a.breed(flock_b)).seagulls;
// 2*(4+0)+(4*2)
var result1 = add(saw1(b,add(a+c)),saw1(a+b))

// 结合律（assosiative）
add(add(x, y), z) == add(x, add(y, z));

// 交换律（commutative）
add(x, y) == add(y, x);

// 同一律（identity）
add(x, 0) == x;

// 分配律（distributive）
multiply(x, add(y, z)) == add(multiply(x, y), multiply(x, z));



