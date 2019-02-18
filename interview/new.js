// for(var i=0;i<5;i++){
//   setTimeout(function timer(){
//     console.log(i)
//   },i*1000)
// }

for (var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}

const debounce = (func,wait) => {
  var timer = null;
  return func(..agrs){
    if(timer) clearTimeout(timer)
    setTimeout(() => func.apply(this,args),wait)
  }
}
