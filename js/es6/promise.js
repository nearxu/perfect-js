function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}

var light = function(timeout,cb){
  return new Promise(function(res,rej){
    setTimeout(() => {
      cb();
      resolve();
    }, timeout);
  })
}

var step = function(){
  Promise.resolve().then(function(){
    return light(500,red)
  })
  .then(function(){
    return light(500,green)
  })
}