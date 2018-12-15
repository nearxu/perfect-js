//
const a = [1, 2, 3, 4].reduce((pre, cur) => {
    return pre + cur
})

export function compose(funs) {
    if (funs.length === 0) {
        return ar
    }
    if (funs.length === 1) {
        return funs[0];
    }
    return funs.reduce((a, b) => (...args) => a(b(...args)))
}