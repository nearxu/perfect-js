
// JS 是单线程的语言
// 拿到的程序，一行一行的执行，上面的执行为完成，就傻傻的等着
var i, t = Date.now();

for (i = 0; i < 1000000; i++) { }

console.log(Date.now() - t);

// 程序花费 250ms 的时间执行完成，执行过程中就会有卡顿，其他的事儿就先撂一边不管了

// http://www.ruanyifeng.com/blog/2014/10/event-loop.html

setTimeout(function () { console.log(1) }, 0);
console.log(2)

// 2 1 只有在执行完第二行以后，系统才会去执行"任务队列"中的回调函数
//setTimeout()只是将事件插入了"任务队列"，必须等到当前代码（执行栈）执行完