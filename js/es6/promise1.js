// https://segmentfault.com/a/1190000012646402

var fn = function(num) {
  return new Promise(function(resolve, reject) {
    if (typeof num === "number") {
      resolve(num);
    } else {
      reject("error");
    }
  });
};

fn(2)
  .then(function(num) {
    console.log("first" + num);
    return num + 1;
  })
  .then(function(num) {
    console.log("second" + num);
  });
