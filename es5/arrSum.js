const arrSum = (arr) => {
    if (!arr.length) return 0;
    let sortArr = arr.sort((a, b) => a - b);
    const result = sortArr.reduce((pre, item) => {
        let list = pre.concat();
        let index = list.findIndex(v => v === item);
        if (index < 0) {
            list.push({
                list: [item]
            });
        } else {
            list[index].list.push(item)
        }
    }, [])
    return result;
}

// [1,[2,2,]]

var uniqe = (arr) => {
    return [...new Set(arr)]
}

var uniqe1 = arr => {
    return arr.reduce((ret, item) => {
        var list = ret.concat();
        if (list.indexOf(item) < 0) {
            list.push(item);
        }
        return list
    }, [])
}

var uniqeArr = arr => {
    var key = {};
    arr.forEach(k => !key[k] ? key[k] = 1 : key[k]++);
    var max = Object.keys(key).sort((a, b) => key[b] - key[a])[0];
    return max;
}

var uniqeBest = arr => {
    var key = {}, max = 0, item = '';
    arr.forEach((v) => {
        key[v] ? key[v].count += 1 : key[v] = { count: 1 };
        key[v].count > max && (max = key[v].count, item = v);
        key[v].count == max && (item = item + ',' + v);
    })
    return { item, max }
}

// var uniqeObj = arr => {
//     return arr.reduce((ret, item) => {
//         ret[item] = ret[item] ? ++ret[item] : 1
//     }, {})
// }

var a = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4];

console.log(uniqe(a));
console.log(uniqe1(a));
console.log(uniqeArr(a));
console.log(uniqeBest(a));

const count = (arr, val) => arr.reduce((ret, item) => item === val ? ++ret : ret, 0)

console.log(count(a, 3));