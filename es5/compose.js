const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

function compose(...fns) {
    return fns.reduce((f, g) => {
        return function (...args) {
            return f(g(...args));
        }
    })
}


function  composeab(a,b) {
    return function(x) {
        return a(b(x))
    }
}



// not undestand
var compose1 = function (...args) {
    var len = args.length
    var count = len -1;
    var result ;
    return function f1(...args) {
        result = args[count].apply(this,args1)
        if(count<0){
            count = len -1;
            return result;
        }else {
            count--;
            return f1.call(null,result)
        }
    }
}