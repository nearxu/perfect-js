// 传统写法
// step1(function (value1) {
//     step2(value1, function(value2) {
//       step3(value2, function(value3) {
//         step4(value3, function(value4) {
//           // ...
//         });
//       });
//     });
//   });

// Promise 的写法
//   (new Promise(step1))
//     .then(step2)
//     .then(step3)
//     .then(step4);

var startTime = Date.now();
console.log('start', startTime);

var handle = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('done', Date.now() - startTime);
    }, 500)
})
handle.then(function (val) {
    console.log('then resolve', val, Date.now() - startTime)
}, function (e) {
    console.log('reject', e, Date.now() - startTime)
})

const getjson = function (url) {
    return new Promise(function (resolve, reject) {
        const handle = function () {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText))
            }
        }
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

    })
}

getjson('/post.json').then(function (json) {
    console.log('content', json)
}, function (err) {
    console.log(err)
})
