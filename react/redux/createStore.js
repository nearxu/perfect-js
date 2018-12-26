function createStore(reduce, preState, enhance) {
    let currentState = preState;
    let currentReduce = reduce
    let nextList = []
    function getState() {
        return currentState;
    }
    function substribe(list) {
        nextList.push(list)
        return function unsubstribe() {
            const index = nextList.indexOf(list);
            nextList.splice(index, 1);
        }
    }
    function dispatch(action) {

    }
    return {
        getState,
        substribe,
        dispatch
    }
}