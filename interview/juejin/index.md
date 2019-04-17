 virtual-dom

 jsx 


vue react 单向数据流

Vue2 defineProperty 
Object.defineProperty本身是可以监控到数组下标的变化的，但是在 Vue 中，从性能/体验的性价比考虑

是通过 递归 + 遍历 data 对象来实现对数据的监控的，如果属性值也是对象那么需要深度遍历,显然如果能劫持一个完整的对象是才是更好的选择。

Proxy可以劫持整个对象


### webpack hmr

https://zhuanlan.zhihu.com/p/30669007

1.webpack 对文件系统进行 watch 打包到内存中
sockjs 是服务端和浏览器端之间的桥梁，在启动 devServer 的时候，sockjs 在服务端和浏览器端建立了一个 webSocket 长连接

2.devServer 通知浏览器端文件发生改变

3.webpack-dev-server/client 接收到服务端消息做出响应

4.webpack 接收到最新 hash 值验证并请求模块代码

