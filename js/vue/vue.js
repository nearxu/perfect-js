// http://www.cnblogs.com/canfoo/p/6891868.html

// vue js 实现双向数据绑定的原理

// vue数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的

var Book = {
  name: 'vue权威指南'
};
console.log(Book.name);  // vue权威指南

// 如果想要在执行console.log(book.name)的同时，直接给书名加个书名号，那要怎么处理呢？或者说要通过什么监听对象 Book 的属性值。这时候Object.defineProperty()就派上用场了


var Book = {}
var name = '';
Object.defineProperty(Book, 'name', {
  set: function (value) {
    name = value;
    console.log('你取了一个书名叫做' + value);
  },
  get: function () {
    return '《' + name + '》'
  }
})

Book.name = 'vue权威指南';  // 你取了一个书名叫做vue权威指南
console.log(Book.name);  // 《vue权威指南》