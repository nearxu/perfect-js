// 闭包

// http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html

var n = 0;
function f1(){
    var n = 999;
    nadd = function(){ n+=1}
    function f2(){
        console.log(n)
    }
    return f2;
}
var result = f1();

result() // 999
nadd()
result()
