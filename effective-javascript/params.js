var urls = 'http://www.baidu.com?name=tom&age=18';

function paramsObj(url) {
  var query = url.split('?')[1];
  var queryArr = query.split('&');
  var obj = {};
  for (var i = 0; i < queryArr.length; i++) {
    var keyArr = queryArr[i].split('=');
    obj[keyArr[0]] = keyArr[1];
  }
  return obj
}

console.log(paramsObj(urls));

// const getQuery = url => {
//   url.match(/([^?=&]+)(=([^&]*))/g || []).reduce(
//     (cur,pre) => ((cur[pre.slice(0,pre.indexOf('='))] = cur.slice(pre.indexOf('=')+1)  )),{}
//   )
// }

const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  );
console.log(getURLParameters(urls));