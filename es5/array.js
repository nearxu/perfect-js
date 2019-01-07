// api
console.log(Array.isArray('1,24'))

console.log([1,2,3].toString());

console.log([1,2,3,4].join('|'));

console.log('1,2,3'.split(','))

// push pop shift unshift

// concat

console.log([].concat({a:1},{b:2}))
console.log([1,2].concat(3,4))

// reverse();

// slice(start,end)  提取目标数组的一部分，返回一个新数组，原数组不变。
// splice(start,count) // 删除原数组的一部分成员，并可以在删除的位置添加新的数组成员返回值是被删除


const sort = (a,b) => a-b;


function forEach(val,index,arr) {
    console.log(`${index}:${value}`)    ;
}

[1,2,3,4].filter(function(ele){
    return ele % 2 == 0;
})

[1,2,3,4].reduce(function(ret,item){
    return ret+item
})