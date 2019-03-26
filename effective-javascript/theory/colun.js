// https://www.cnblogs.com/onepixel/p/5062456.html

function A() {
  var count = 0;
  function B() {
     count ++;
     console.log(count);
  }
  return B;
}
var C = A();

// 当一个内部函数被其外部函数之外的变量引用时，就形成了一个闭包。

// 闭包的用途
// 在 Javascript 中，如果一个对象不再被引用，那么这个对象就会被 GC 回收，否则这个对象一直会保存在内存中。

var f = function(document) {
  var viewport;
  var obj = {
      init: function(id) {
          viewport = document.querySelector('#' + id);
      },
      addChild: function(child) {
          viewport.appendChild(child);
      },
      removeChild: function(child) {
          viewport.removeChild(child);
      }
  }
  window.jView = obj;
};
f(document);
