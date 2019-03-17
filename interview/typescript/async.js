
const isType = (obj, type) => {
  return Object.prototype.toString.call(obj) === `[object ${type}]`
}

const isTypes = (type) => (obj) => {
  return Object.prototype.toString.call(obj) === `[object ${type}]`
}

// cb
var delay = 1000;

function cb() {
  setTimeout(() => {
    console.log('1');
    setTimeout(() => {
      console.log('1' + 1);
      setTimeout(() => {
        console.log('1' + 1 + 1);
      }, delay)
    }, delay)
  }, delay)
}

// cb();

// promise

function fnA(data) {
  console.log(data)
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('1+1 s后做的事情')
    }, delay)
  })
}
function fnB(data) {
  console.log(data)
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('1+1+1 s后做的事情')
    }, delay)
  })
}
function fnC(data) {
  console.log(data)
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('1+1+1+1 s后做的事情')
    }, delay)
  })
}

var promise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve('1');
  })
})

promise.then(fnA).then(fnB).then(fnC).then(function (data) {
  console.log(data);
})

// async function fnn(){
//   let a = await fnA();
//   let b = await fnB(a);
//   let c = await fnC(b);
// }
// fnn();

// pipe 数据流模式

