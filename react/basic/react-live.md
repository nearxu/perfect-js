https://segmentfault.com/a/1190000011156505

function render(vnode){
    if(typeof vnode.nodename === 'string'){

    }else if(typeof vnode.nodename === 'string'){
        let func = vnode.nodeName
        let inst
        if(olddomOrComp && olddomOrComp instanceof func) { // <--- inst 可以复用
            inst = olddomOrComp
            olddomOrComp.props = vnode.props
        }
        ....

        render(innerVnode, parent, inst, inst.__rendered)
    }
}

componentWillMount
componentDidMount

inst = new func(vnode.props)
            inst.componentWillMount && inst.componentWillMount()


            if (comp) {
                comp.__rendered = inst
            } else {
                parent.__rendered[myIndex] = inst
            }

