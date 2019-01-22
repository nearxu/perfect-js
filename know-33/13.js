// 在开发中在导入模块时经常使用require和import；
// 导出模块时使用module.exports / exports或者export /export default;

// CommonJS规范（同步加载模块）

// 导入
require("module");
require("../app.js");
// 导出
exports.getStoreInfo = function () { };
module.exports = someValue;


// AMD（异步加载模块
// 定义
define("module", ["dep1", "dep2"], function (d1, d2) {...});
// 加载模块
require(["module", "../app"], function (module, app) {...});

