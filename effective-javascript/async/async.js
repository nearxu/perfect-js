// cb

const f1 = (item, cb) => {
  setTimeout(() => {
    console.log('f1');
    cb(item)
  }, 500)
}

const f2 = (m) => {
  console.log(m);
}

// f1('wait 500 f2', f2);

const cb = () => {
  setTimeout(() => {
    console.log('1');
    setTimeout(() => {
      console.log('1' + 1);
      setTimeout(() => {
        console.log('1' + 1 + 1);
      }, 1000)
    }, 1000)
  }, 1000)
}

// cb();

//promise
// var promise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     console.log('1');
//     resolve(1);
//   })
// })

// promise.then((v) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//       console.log(v + 1);
//     }, 1000);
//   })
// })

const pn = n => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n);
      console.log(n);
    }, 1000)
  })
}

// pn(1).then((n) => pn(n + 1)).then((d) => pn(d + 1))

let p1 = pn(1);
let p2 = pn(2);
let p3 = pn(3);

var pa = Promise.all([p1, p2, p3]).then(v => {
  console.log(v);
})







