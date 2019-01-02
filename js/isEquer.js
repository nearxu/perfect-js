function eq(a,b) {
  // === 结果为 true 的区别出 +0 和 -0
    if(a === b) return a !==0 || 1/a === 1/b;
  // typeof null 的结果为 object ，这里做判断，是为了让有 null 的情况尽早退出函数
  if (a == null || b == null) return false;

  // 判断 NaN
  if (a !== a) return b !== b;
  // 判断参数 a 类型，如果是基本类型，在这里可以直接返回 false
  var type = typeof a;
  if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;

  return deepeq(a,b);
}

function  deepeq(a,b) {
  var className = Object.prototype.toString.call(a);
  if( className !== Object.prototype.toString.call(b)) {
    return false;
  }
  switch (className) {
    case '[object RegExp]':
    case '[object String]':
      return ''+a === ''+b;

    default:
      break;
  }
  var isArr = className === '[object Array]';
  // arr obj as  so on Object.keys(a).length === Object.keys(b).length
  if(isArr){
    var len = a.length;
    if(len !== b.length) return false;
    if(JSON.parse(JSON.stringify(a)) === JSON.parse(JSON.stringify(b))){
      return true;
    }else {
      return false;
    }
  }

}