const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

function compose(...fns) {
    return fns.reduce((f, g) => {
        return function (...args) {
            return f(g(...args));
        }
    })
}