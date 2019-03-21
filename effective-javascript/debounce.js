
const debounce = (fn, wait) => {
  var timer = null;
  return fn(...args){
    if (timer) clearTimeout(timer);
    setTimeout(() => fn.apply(this, args), wait);
  }
}