var num = 0;
var timer = setInterval(() => {
  console.log(++num);
  if (num > 5) {
    clearInterval(timer);
  }
}, 1000);