import { createSlice } from "@reduxjs/toolkit"
import { produce } from "immer"

const findItemIndex = (state, action) => state.findIndex((cartItem) => cartItem.productId === action.payload.productId)

const slice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addCartItem(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            if (existingItemIndex !== -1) {
                state[existingItemIndex].quantity += 1
            } else {
                state.push({ ...action.payload, quantity: 1 })
            }
        },
        removeCartItem(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            state.splice(existingItemIndex, 1)
        },
        increaseCartItemQuantity(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            state[existingItemIndex].quantity += 1
        },
        decreaseCartItemQuantity(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            state[existingItemIndex].quantity -= 1
            if (state[existingItemIndex].quantity === 0) {
                state.splice(existingItemIndex, 1)
            }
        }
    }
})

const myCreateSlice = (config) => {
    const { initialState, name, reducers } = config

    const actions = {}
    // console.log(config.reducers)

    Object.keys(reducers).forEach((key) => {
        actions[key] = function (payload) {
            return {
                type: `${name}/${key}`,
                payload,
            }
        }
    })

    function reducer(originaState = initialState, action) {
        return produce(originaState, (state) => {
            const caseRender = reducers[action.type.split('/')[1]]
            if (caseRender) {
                return caseRender(state, action)
            }
            return state

        })
    }

    return { actions, reducer }
}

const mySlice = myCreateSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addCartItem(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            if (existingItemIndex !== -1) {
                state[existingItemIndex].quantity += 1
            } else {
                state.push({ ...action.payload, quantity: 1 })
            }
        },
        removeCartItem(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            state.splice(existingItemIndex, 1)
        },
        increaseCartItemQuantity(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            state[existingItemIndex].quantity += 1
        },
        decreaseCartItemQuantity(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            state[existingItemIndex].quantity -= 1
            if (state[existingItemIndex].quantity === 0) {
                state.splice(existingItemIndex, 1)
            }
        }
    }
})



export const { addCartItem, removeCartItem, increaseCartItemQuantity, decreaseCartItemQuantity } = mySlice.actions

export default mySlice.reducer

