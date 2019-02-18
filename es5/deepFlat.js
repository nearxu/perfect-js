const deepFlat = arr =>
  [].concat(...arr).map(v => (Array.isArray(v) ? deepFlat(v) : v));

var a = [1, [2, 3], [4, [5, [6]]]];

function deep(arr) {
  return arr.reduce((ret, item) => {
    let list = ret.concat();
    if (Array.isArray(item)) {
      list = list.concat(deep(item));
    } else {
      list.push(item);
    }
    return list;
  }, []);
}

const deepReduce = arr =>
  arr.reduce(
    (pre, cur) => pre.concat(Array.isArray(cur) ? deepReduce(cur) : cur),
    []
  );
console.log(deepFlat(a));
console.log(deep(a));
console.log(deepReduce(a));
