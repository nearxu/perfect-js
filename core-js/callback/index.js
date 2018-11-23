function buy(name, good, callback) {
    console.log(name, good);
    if (callback && typeof (callback) === 'function') {
        callback()
    }
}

buy('xiaoming', 'apple', function () {
    console.log('callback finish');
})

function first() {
    setTimeout(function () {
        console.log(1)
    }, 500)
}

function second() {
    console.log(2)
}

first();
second();

function f1(callback) {
    setTimeout(function () {
        console.log(1)
        callback()
    }, 500)
}

// f1(second);

function f3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1);
        }, 0)
        resolve();
    })
}

f3().then(second)



