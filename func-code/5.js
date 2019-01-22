var compose =function(a,b){
    return function(x){
        return a(b(x))
    }
}

var toUpper = function(x){ return x.toUpperCase()}

var  add = function(x){ return x+'world'}

// item = function(x){ return add(toUpper(x))}
var item = compose(toUpper,add)
var a = item('hello')
console.log(a)


//
var header = function(x){return x[0]}

var reverse = (x) => x.reduce(function(ret,item){
    return [item].concat(ret)
},[])

var last = compose(header, reverse)
var item1 = last(['jumpkick', 'roundhouse', 'uppercut']);
console.log(item1)


const composes = (...fns) => fns.reduce((ret,item) => (...args) => ret(item(args)))
