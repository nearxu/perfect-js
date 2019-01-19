

const sum = arr => arr.reduce((ret,item) =>  ret+item,0)


// 柯力化
// const curry = (fn,len = fn.length,...args) =>
//     len <= args.length ? fn(...args):curry.bind(null,fn,len,args)


// var item1 = curry(Math.pow)(2)(10);
// var item2 = curry(Math.min, 3)(10)(50)(2);

// console.log(item1,item2)

const deepFlat = arr => arr.reduce((ret,item) => {
    return ret.concat(Array.isArray(item) ? deepFlat(item) : item)
},[])

var item1 = deepFlat([1, [2, [3, 4, [5, 6]]]]);
console.log(item1)

// 管道加工器

const pipe = (...fns) => args => fns.reduce((ret,item) => item(ret) ,args)

var item2 = pipe(x => 'hello'+x, x => x.toUpperCase())("Test");

console.log(item2)

// 对象空值判断
// has some wrong

const objNull = arr => arr.reduce((ret,item) => {
    return ret.concat(   Object.keys(item).length === 0 && item  )
},[])

// remove

const remove = arr => fn => {
    return arr.filter(item => fn(item))
}

var item3 = remove([1,2,3,4])(n => n%2 == 0)
console.log(item3)
