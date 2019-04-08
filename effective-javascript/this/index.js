function fun() {
  console.log(this.data);
}

var obj = {
  data: 'obj_data'
}

var newObj = {
  data: 'new_obj'
}

var fun1 = fun.bind(obj);
fun1()
var fun2 = fun1.bind(newObj);
fun2()
// fun1 = fun.call(obj) fun2 = fun1.call(newobj)
//第二次绑定得到的函数中fun1内部的this确实指向newObj，但fun1中根本没有用到this，所以没有任何影响 
var fun3 = fun.bind(newObj)
fun3();


var obj1 = {
  data: 1,
  fun: function () {
    console.log(this.data);
  }
}

var obj2 = {
  data: 2
}

obj1.fun();
obj2.fun = obj1.fun;
obj2.fun();

// 1 2