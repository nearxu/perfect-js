
var hi = function (name) {
    return "Hi " + name;
};

var greeting = function (name) {
    return hi(name);
};

var h1= function(name){
    return function(){
        return 'H1'+name
    }
}

console.log(hi('tome'))

console.log(h1('tome')())

var greeting = hi;

console.log(greeting('times'))


// 这行
return ajaxCall(function (json) {
    return callback(json);
});

// 等价于这行
return ajaxCall(callback);

// 那么，重构下 getServerStuff
var getServerStuff = function (callback) {
    return ajaxCall(callback);
};

// ...就等于
var getServerStuff = ajaxCall; // <-- 看，没有括号哦