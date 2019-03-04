# jsx 语法糖  react XML 语法

render:function(){
  return React.createElement('div',{className:'index'},"hello index")
}

render:function(){
  return <div className="index">hello index</div>
}

// 语义化 分离组合 支持JS语法 绑定事件

#react 优化 生命周期

componentWillMount

render

componentDidMount()
#优化
componentWillReceiveProps() 
https://segmentfault.com/a/1190000006254212
shouldComponentUpdate(nextProps,nextState){} 
componentWillUpdate()

#flux
单向数据流 view dispatch 发出 action reducer 

