# https://juejin.im/post/5983dfbcf265da3e2f7f32de

# react 源码解析

class A extends Component{
    render(){
        return (
            <div>A component</div>
        )
    }
}

<A />其实是js对象而不是真实的DOM

其实就是在父对象的props中增加children字段及对应的描述值，也就是js对象的多层嵌套。

function A(component){
    this.state ={}
    A.prototype.render = function(){
        return React.createElement('div',null)
    }
}
