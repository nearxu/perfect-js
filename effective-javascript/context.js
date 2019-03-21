// js 单线程 function 是同步的 先进后出

function singal(n) {
  if (n < 0) return;
  console.log(n);
  singal(n - 1)
  console.log(n);
}

singal(2); // 2 1 0 0 1 2;
// 执行完第二行以后，系统才会去执行"任务队列"中的回调函数

// 异步的 event setTimeout ajax

var i, t = Date.now();
for (i = 0; i < 1000; i++) { }
console.log(Date.now() - t);

//  程序花费 250ms 的时间执行完成，执行过程中就会有卡顿，其他的事儿就先撂一边不管了
