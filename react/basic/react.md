
https://juejin.im/post/5a56fe856fb9a01cbe653b15

const hw = <div>Hello World</div>

const hw = React.createElement('div', null, "Hello World")

render(<Father/>, document.getElementById('root'))

react 中virtual-dom的概念， 使用一个 js的结构vnode来描述DOM 节点。 然后， 从vnode渲染出DOM树。
这个 vnode由3个属性描述：nodeName(div, Son...), props, children(vnode 组成的数组), 所以 createElement的最简实现

function createElement(comp, props, ...args) {
    let children = []
    for(let i = 0; i< args.length;i++){
        if(args[i] instanceof Array) {
            children = children.concat(args[i])
        } else {
            children.push(args[i])
        }
    }
    return {
        nodeName: comp,
        props: props || {},
        children
    }
}

暂时先不考虑 dom操作， 只考虑这个递归方法， 代码如下

function renderVDOM(vnode) {
    if(typeof vnode == "string") { // 字符串 "i an grandson"
        return vnode
    } else if(typeof vnode.nodeName == "string") {
        let result = {
            nodeName: vnode.nodeName,
            props: vnode.props,
            children: []
        }
        for(let i = 0; i < vnode.children.length; i++) {
            result.children.push(renderVDOM(vnode.children[i]))
        }
        return result
    } else if (typeof vnode.nodeName == "function") { // 如果是function
        let func = vnode.nodeName
        let inst = new func(vnode.props)
        let innerVnode = inst.render()
        return renderVDOM(innerVnode)
    }

// result
{
    "nodeName": "div",
    "props": {},
    "children": ["i", {"nodeName": "div", "props": {}, "children": ["am"]}, {
        "nodeName": "div",
        "props": {},
        "children": ["grandson"]
    }]
}





