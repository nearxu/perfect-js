function drop(arr,n) {
    var len = arr == null ? 0:arr.length;
    if(!len) return [];
    // return arr.splice(arr,n);
    return arr.slice(n)
}

console.log(drop([1,2,3,4],3))

function dropRight(arr,len) {
    var length = arr == null ? 0 : arr.length;
    if (!length) return [];
    arr.filter(a => a != undefined)
    return arr.slice(0,length-len)
}

console.log(dropRight([1,2,3,4,5, ,6],3))