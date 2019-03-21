const all = (arr, fn = Boolean) => arr.every(fn);

console.log(all([1, 2, 3], (n) => n > 0));

const arrFill = n => Array(n).fill(n);
console.log(arrFill(6));

const arrFindexIndex = arr => n => arr.findIndex(item => item === n)
// 第一个元素索引 or -1
console.log(arrFindexIndex([1, 2, 3, 4])(1))

// return true false
console.log([1, 2, 3].find((n) => n > 4))

// some true and false

console.log([1, 2, 3].some(n => n % 2 === 0))

// Array.from()

console.log(Array.of(1, 2, 3)) // [...1,2,3]

// reduce
// [0, 1, 2, 3, 4].reduce((pre, cur, index) => {
//   return pre + cur;
//   console.log(index);
//   console.log(cur, pre)
// }, 0)

var a = [1, [2, [3, 4, [5, 6, 7]]]];
const deepFlat = arr => arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? deepFlat(cur) : cur), [])
console.log(deepFlat(a));

function flat(arr) {
  return arr.reduce((acc, cur) => {
    let now = acc.concat();
    if (Array.isArray(cur)) {
      now = now.concat(flat(cur));
    } else {
      now.push(cur);
    }
    return now;
  }, [])
}
console.log(flat(a));

const unique = arr => [...new Set(arr)];

const unique1 = arr => arr.reduce((acc, cur) => {
  let now = acc.concat();
  if (now.indexOf(cur) < 0) {
    now.push(cur);
  }
  return now;
}, [])

console.log(unique1([1, 2, 2, 3, 4, 4, 5, 5, 6]))

// forEach not return ;
var a = [1, 2, , 4]
a.forEach((item, index) => {
  console.log(index, item);
})

const unique2 = arr => {
  var obj = {};
  var max = 0;
  arr.forEach(k => !obj[k] ? obj[k] = 1 : obj[k]++);
  const maxArr = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
  maxArr.forEach(m => {
    if (m > max) {
      max = m;
    }
  })
  return max;
}

console.log(unique2([1, 2, 2, 3, 4, 4, 5, 5, 6]))








