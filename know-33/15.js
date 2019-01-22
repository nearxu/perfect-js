// 排序 去重算法

var uniqe = arr => { return [...new Set(arr)]}

var uniqe1 = arr => {
    return arr.reduce((ret,item) => {
        const list = ret.concat();
        if(list.indexOf(item) < 0){
            list.push(item)
        }
        return list
    })
}

var uniqeFilter = arr => {
    return arr.filter((item,index,array) => {
        return array.indexOf(item)  === index
    })
}

var sortArr = arr => arr.sort((a,b) =>  a-b)

console.log(sortArr([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]))