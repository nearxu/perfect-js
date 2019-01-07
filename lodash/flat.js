function flat(arr) {
    var len = arr.length;
    var result = [];
    for(var i =0;i<len;i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flat(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(flat([[1,2],3,[4,[5,6]]]));

function flatReduce(arr) {
    return arr.reduce((ret,item) => {
        return ret.concat(Array.isArray(item) ? flatReduce(item) : item)
    },[])
}

console.log(flatReduce([[1, 2], 3, [4, [5, 6]]]));


function flatEs6(arr) {
        return  [].concat(...arr);
}
console.log(flatEs6([[1, 2], 3, [4, [5, 6]]]));