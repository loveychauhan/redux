import { createStore } from 'redux'
import { myStore } from './my-redux.js'
import { product } from './product.js'

// const initialState = {
//     count: 0,
//     name: 'lovey',
//     age: 22

// }

// const INCREMENT = 'count/increment'
// const DECREMENT = 'count/decrement'
// const INCREMENT_BY = 'count/incrementBy'
// const DECREMENT_BY = 'count/decrementBy'

// function reducer(state = initialState, action) {
//     if (action.type === 'count/increment') {
//         return { ...state, count: state.count + 1 }
//     }
//     else if (action.type === 'count/decrement') {
//         return { ...state, count: state.count - 1 }
//     }
//     else if (action.type === 'count/incrementBy') {
//         return { ...state, count: state.count + action.payload }
//     }
//     else if (action.type === 'count/decrementBy') {
//         return { ...state, count: state.count - action.payload }
//     }
//     return state

// }

function reducer(state = initialState, action) {

    switch (action.type) {
        case INCREMENT: {
            return { ...state, count: state.count + 1 }
        }
        case DECREMENT: {
            return { ...state, count: state.count - 1 }
        }
        case INCREMENT_BY: {
            return { ...state, count: state.count + action.payload }
        }
        case DECREMENT_BY: {
            return { ...state, count: state.count - action.payload }
        }

        default: {
            return state
        }
    }



}

// const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__())
// console.log(store)


// store.subscribe(() => {
//     console.log(store.getState())
// })

// store.dispatch({ type: INCREMENT })
// store.dispatch({ type: DECREMENT })
// store.dispatch({ type: INCREMENT_BY, payload: 20 })
// store.dispatch({ type: DECREMENT_BY, payload: 10 })

// console.log(mystore.subscribe(() => { }))

// mystore.subscribe(() => {
//     console.log(mystore.getState())
// })

// mystore.dispatch({ type: INCREMENT })
// mystore.dispatch({ type: DECREMENT })
// mystore.dispatch({ type: INCREMENT_BY, payload: 20 })
// mystore.dispatch({ type: DECREMENT_BY, payload: 10 })


const mystore = myStore(reducer)
console.log(mystore)

console.log(product)



