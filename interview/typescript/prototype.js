function parent() {
  this.parent = 'parent';
}
parent.prototype.walk = "i can walk";

function child() {
  parent.call(this);
  this.child = 'child';
}

var child1 = new child();

console.log(child1);// no extends prototype;

function child2() {
  this.child2 = "child2";
  child.call(this);
}

child2.prototype = new parent();
var child222 = new child2();

console.log(child222);

function Parent(name) {
  this.name = name;
}

class Child extends Parent {
  constructor(props) {
    super(props);
  }
}
var child3 = new Child('tom');
console.log(child3);
