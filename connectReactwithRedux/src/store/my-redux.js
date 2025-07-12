export function myStore(reducer) {
    let state
    const subListeners = []
    const store = {
        dispatch: function (action) {
            state = reducer(state, action)
            subListeners.forEach((listener) => {
                listener()
            })

        },
        getState: function () {
            return state

        },
        subscribe: function (listener) {
            subListeners.push(listener)
        }
    }
    return store
}