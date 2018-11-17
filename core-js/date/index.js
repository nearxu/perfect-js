
// date arr
// function getDate: Date[] {
//     var dateArr: Date[] = [];
//     const today = new Date();
//     for (let i = -7; i <= 2; i++) {
//         const date = today.getTime() + (i * 24 * 60 * 60) * 1000;
//         dateArr.push(new Date(date))
//     }
//     return dateArr;
// }

function formatDate(source, fmt) {
    var o = {
        "y+": source.getFullYear(),
        "M+": source.getMonth() + 1,                 //月份
        "d+": source.getDate(),                    //日
        "h+": source.getHours(),                   //小时
        "m+": source.getMinutes(),                 //分
        "s+": source.getSeconds(),                 //秒
        "q+": Math.floor((source.getMonth() + 3) / 3), //季度
        "S+": source.getMilliseconds()             //毫秒
    };
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            if (k == "y+") {
                fmt = fmt.replace(RegExp.$1, ("" + o[k]).substr(4 - RegExp.$1.length));
            }
            else if (k == "S+") {
                var lens = RegExp.$1.length;
                lens = lens == 1 ? 3 : lens;
                fmt = fmt.replace(RegExp.$1, ("00" + o[k]).substr(("" + o[k]).length - 1, lens));
            }
            else {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
    }
    return fmt;
}

var todays = new Date();

console.log(formatDate(todays, "MM-dd hh:mm"))



