function getParamas() {
    const url = window.location.href || '123?type=1';
    params = url.split('?')[1] || '';
    const arr = params.split('&') || [];
    console.log(arr, 'arr')
    var paramsObj = {};
    // for(var i =0;i<arr.length;i++){

    // }
    // console.log()
}

getParamas();