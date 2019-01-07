function compact(arr) {
    var index= -1;
    var len = arr == null ? 0:arr.length;
    var result = [];
    var resultIndex=0;
    while (++index < len) {
        var val = arr[index];
        if(val){
            result[resultIndex++] = val;
        }
    }
    return result;
}

console.log(compact([0, 1, false, 2, '', 3]));