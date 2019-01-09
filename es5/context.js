// 执行上下文

// javascript是单线程语言

// 执行栈遵循的是先进后出的原理

function foo(i) {
    if (i < 0) return;
    console.log('begin:' + i);
    foo(i - 1);
    console.log('end:' + i);
}

foo(2);

// js 大部分是同步执行 ，除了请求接口 ，事件，定时器

// so 
begin 2 1 0
end 0 1 2