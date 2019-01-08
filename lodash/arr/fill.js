function fill(arr,value) {
    var length = arr == null ? 0:arr.length;
    if(!length) return [];
    var index = 0;
    var result = [];
    while (index< length) {
        result[index++] = value;
    }
    return result;
}

console.log(fill([1,2,3,4],'*'))