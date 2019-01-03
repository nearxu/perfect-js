function upper(x) {
  return x.toUpperCase();
}

function hello(params) {
  return 'HELLO'+params;
}

function greet(params) {
  return hello(upper(params));
}
console.log(greet('world'));

// just like f3(f2(f1()));

var compose = function (f,g) {
  return function(x){
    return f(g(x));
  }
}


function compose(...funcs) {
  if(funcs.length === 0){
    return arg => arg;
  }
  if(funcs.length === 1){
    return funcs[0]
  }
  return funcs.reduce((a,b) => (...agrs) => a(b(...agrs)))
}

