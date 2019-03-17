// 订阅模式 当一个对象的状态发生改变时，所有依赖于它的对象将得到通知

// document.body.addEventListener('click', function () {
//   console.log('1');
// })

// document.body.click();

// var msg = {};
// msg.list = [];
// msg.listen = function (fn) {
//   this.list.push(fn);
// }
// msg.trigger = function () {
//   for (var i = 0, fn; fn = this.list[i++];) {
//     fn.apply(this, arguments);
//   }
// }

// msg.listen(function (name) {
//   console.log(name);
// })

// msg.trigger('123');
// msg.trigger('456');

var event = {
  list: [],
  listen: function (key, fn) {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push(fn);
  },
  remove: function (key, fn) {
    var fns = this.list[key];
    if (!fns) {
      return false;
    }
    if (!fn) {
      fns && (fns.length === 0)
    } else {
      for (var i = 0; i < fns.length; i++) {
        var _fn = fns[i];
        if (_fn === fn) {
          fns.splice(i, 1);
        }
      }
    }
  },
  trigger: function () {
    var key = Array.prototype.shift.call(arguments);
    var fns = this.list[key];
    if (!fns) {
      return false
    }
    for (var i = 0; i < fns.length; i++) {
      fn = fns[i];
      fn.apply(this, arguments);
    }
  }
}

class Event {
  constructor() {
    this.subscribers = new Map();
  }
  on(type, fn) {
    let subs = this.subscribers;
    let sub = subs.get(type);
    if (!sub) return subs.set(type, [fn]);
    sub.push(fn)
    subs.set(type, sub);
  }
  emit(type, content) {
    let sub = this.subscribers.get(type);
    sub.forEach(fn => fn(content));
  }
  remove(type, fn) {
    let subs = this.subscribers.get(type);
    if (!subs) return false;
    if (!fn) subs.length = 0;
    else {
      for (let [k, v] of Object.entries(subs)) {
        if (v === fn) subs.splice(k, 1);
      }
    }
  }
}

let event = new Event();
event.on('a', (name) => console.log(`${name} 想跟你结婚`));
const func = (name) => console.log(`${name} 想跟你分手`);
