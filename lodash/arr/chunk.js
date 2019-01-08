function chunk(arr,size) {
  var len =  arr == null  ? 0 : arr.length;
  if(!len || size<1) {return  []};
  var index=0;
  var resIndex = 0;
  var result = Array(Math.ceil(len/size));
  while(index < len){
    result[resIndex++] = arr.slice(index,index+=size)
  }
  return result;
}

console.log(chunk([1,2,3,4,5],2));