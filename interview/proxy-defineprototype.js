// vue definedproptotype

const obj = {};
Object.defineProperty(obj, 'text', {
    get: function () {
        console.log('get val');
    },
    set: function (newVal) {
        console.log('set val:' + newVal);
        document.getElementById('input').value = newVal;
        document.getElementById('span').innerHTML = newVal;
    }
});

const input = document.getElementById('input');
input.addEventListener('keyup', function (e) {
    obj.text = e.target.value;
})

// 发布订阅

let uid = 0;
// 用于储存订阅者并发布消息
class Dep {
    constructor() {
        // 设置id,用于区分新Watcher和只改变属性值后新产生的Watcher
        this.id = uid++;
        // 储存订阅者的数组
        this.subs = [];
    }
    // 触发target上的Watcher中的addDep方法,参数为dep的实例本身
    depend() {
        Dep.target.addDep(this);
    }
    // 添加订阅者
    addSub(sub) {
        this.subs.push(sub);
    }
    notify() {
        // 通知所有的订阅者(Watcher)，触发订阅者的相应逻辑处理
        this.subs.forEach(sub => sub.update());
    }
}
// 为Dep类设置一个静态属性,默认为null,工作时指向当前的Watcher
Dep.target = null;