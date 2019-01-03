// https://segmentfault.com/a/1190000012646195


var m = {a:0,b:1};
var n = m;

n.a = 10;

// m.a ???
// 本着节约内存的原则，复制的引用类型，地址是一样，so ，出现了immutable