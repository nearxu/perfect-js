// javascript是单线程语言

// 执行栈遵循的是先进后出的原理

function foo(i) {
    if (i < 0)
        return;
    console.log('begin:' + i);
    foo(i - 1);
    console.log('end:' + i);
}
foo(3);

// begin:3
// begin:2
// begin:1
// begin:0
// end:0
// end:1
// end:2
// end:3