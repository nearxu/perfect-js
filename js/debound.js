function  debund(func,wait) {
  var timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, wait);
  }
}


debund(func,500);

// for this

function  debounce(func,wait) {
  var timeout;
  return  function () {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(context,args);
    }, wait);
  }
}

//写得很好，在做动画时也经常用到这种方式，防止在一帧时间中（大概16ms）渲染多次。

function debounce(func) {
  var t;
  return function () {
    cancelAnimationFrame(t)
    t = requestAnimationFrame(func);
  }
}