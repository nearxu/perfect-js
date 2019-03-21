
function Achivev() {
  var value = null;
  var list = [];
  Object.defineProperty(this, 'num', {
    get: function () {
      console.log('执行了 get 操作')
      return value;
    },
    set: function (value) {
      console.log('执行了 set 操作')
      value = value;
      list.push({ val: value });
    }
  })
}

var ar = new Achivev();
ar.num = 11;
ar.num = 13;
ar.num;