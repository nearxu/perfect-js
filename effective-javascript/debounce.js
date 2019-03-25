
const debounce = (fn,delay,immediate) => {
  var timer = null;
  return () => {
    var args = [].slice.call(arguments);
    var callNow = !timer && immediate;
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer  = null;
      if(!immediate) fn.apply(this,args);
    },delay)

    if(callNow) fn.apply(this.args);
  }
}

function debunce(fn,delay){
  var timer = null;
  return function(){
    if(timer)  clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this,...args);
    },delay)
  }
}