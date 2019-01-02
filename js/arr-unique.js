

function unique(arr) {
    return arr.filter(function(item,index,array){
      return array.indexOf(item) === index;
    })
}

function uniqueArr(arr) {
    return [...new Set(arr)];
}
