
// http://javascript.ruanyifeng.com/dom/node.html

// 它的作用是将网页转为一个 JavaScript 对象，从而可以用脚本进行各种操作（比如增删内容）。


// Node 常用属性主要有以下10个，接下来我们会着重讲解部分属性。

// nodeType：显示节点的类型
// nodeName：显示节点的名称
// nodeValue：显示节点的值
// attributes：获取一个属性节点
// firstChild：表示某一节点的第一个节点
// lastChild：表示某一节点的最后一个子节点
// childNodes：表示所在节点的所有子节点
// parentNode：表示所在节点的父节点
// nextSibling：紧挨着当前节点的下一个节点
// previousSibling：紧挨着当前节点的上一个节点


var div = document.getElementById("mydiv");

// 另一个常用于取得元素引用的方法是 getElementsByTagName() 。这个方法接受一个参数，即要取得元素的标签名，而返回的是包含零或多个元素的 NodeList