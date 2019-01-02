// arr

var new_arr = arr.concat();

var new_arr = arr.slice();

// var new_arr = JSON.parse(JSON.stringify(arr))
// but not function JSON.parse(JSON.stringify())

function shllow(obj) {
    if(typeof  obj !== 'object') return ;
    var newObj = obj instanceof Array ? []:{};
    for(key in obj){
      if(obj.hasOwnProperty(key)){
        newObj[key] = obj[key];
      }
    }
    return newObj;
}

function  deep(obj) {
  if(typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deep(obj[key]):obj[key]
    }
  }
  return newObj;
}


