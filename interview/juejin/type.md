Object.prototype.toString.call() 
每一个继承 Object 的对象都有 toString 方法，如果 toString 方法没有重写的话,[Object type],，即使是 null 和 undefined 

instanceof
nstanceof 的内部机制是通过判断对象的原型链中是不是能找到类型的 prototype
[]  instanceof Array; // true

Array.isArray()