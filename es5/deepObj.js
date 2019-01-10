const deepObj = obj => {
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(
        k => (clone[k] = typeof obj[k] === 'object' ? deepObj(obj[k]) : obj[k])
    )
    return clone;
}

const a = { a: 1, b: { a: 2, c: { b: 2 } } };

console.log(deepObj(a));