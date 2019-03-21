// 订阅模式 当一个对象的状态发生改变时，所有依赖于它的对象将得到通知

// document.body.addEventListener('click', function () {
//   console.log('1');
// })

// document.body.click();

var msg = {
  list: [],
  listten: function (fn) {
    this.list.push(fn);
  },
  trigger: function () {
    for (var i = 0, fn; fn = this.list[i++];) {
      fn.apply(this, arguments);
    }
  }
}

msg.trigger('123')
msg.trigger('456')