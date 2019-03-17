// class

function animal(name) {
  this.name = name;
}
animal.prototype.walk = 'i walk';

var cat = new animal('cat');
console.log(cat);
console.log(cat.__proto__ == animal.prototype);

function dog() { }
dog.prototype = new animal();

console.log(dog);

var tom = new dog();

console.log(tom.__proto__ == animal.prototype);