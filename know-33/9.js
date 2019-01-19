// map reduce filter

var arr = [1,2,3,4]

arr.map( m => m*m)

const compose = [].reduce((a,b) => (...args) => a(b(...args)))

