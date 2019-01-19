// https://juejin.im/post/5ba32171f265da0ab719a6d7

// 执行栈 其它编程语言中所说的“调用栈,后进先出

function first() {
    console.log('1')
    second();
    console.log('2')
}
function second() {
    console.log('3')
}

first();

setTimeout(function () {
    console.log('定时器开始啦')
});

new Promise(function (resolve) {
    console.log('马上执行for循环啦');
    for (var i = 0; i < 10000; i++) {
        i == 99 && resolve();
    }
}).then(function () {
    console.log('执行then函数啦')
});

console.log('代码执行结束');
