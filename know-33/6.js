// http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html

// apply  函数的一个方法，作用是改变函数的调用对象
var x =0;
function test(){console.log(this.x)}

var obj = {};
obj.x = 1;
obj.m = test;
obj.m.apply(); // 0

obj.m.apply(null,obj)

// bind this 不可变

// apply  call params arr