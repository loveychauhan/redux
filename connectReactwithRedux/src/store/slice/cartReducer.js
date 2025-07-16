//Ducks Pattern => In The Same File We Keep Action, Action Creators And Reducer

import { produce } from "immer"

//Action Types
const CART_ADD_ITEMS = 'cart/AddItem'
const CART_REMOVE_ITEMS = 'cart/RemoveItem'
const CART_INCREASE_QUANTITY = 'cart/IncreaseQuantity'
const CART_DECREASE_QUANTITY = 'cart/DecreaseQuantity'


//Action Creators
export function addCartItem(productData) {
    return { type: CART_ADD_ITEMS, payload: productData }

}
export function removeCartItem(productId) {
    return { type: CART_REMOVE_ITEMS, payload: { productId } }

}

export function increaseCartItemQuantity(productId) {
    return { type: CART_INCREASE_QUANTITY, payload: { productId } }

}
export function decreaseCartItemQuantity(productId) {
    return { type: CART_DECREASE_QUANTITY, payload: { productId } }

}

//reducer
export default function cartReducer(originalState = [], action) {
    return produce(originalState, (state) => {
        const existingItemIndex = state.findIndex((cartItem) => cartItem.productId === action.payload.productId)
        switch (action.type) {
            case CART_ADD_ITEMS:
                if (existingItemIndex !== -1) {
                    state[existingItemIndex].quantity += 1
                    break
                }
                state.push({ ...action.payload, quantity: 1 })
                break

            case CART_REMOVE_ITEMS:
                state.splice(existingItemIndex, 1)
                break

            case CART_INCREASE_QUANTITY:
                state[existingItemIndex].quantity += 1
                break

            case CART_DECREASE_QUANTITY:
                state[existingItemIndex].quantity -= 1

                if (state[existingItemIndex].quantity === 0) {
                    state.splice(existingItemIndex, 1)
                }
        }
        return state
    })



}



//Non Mutating code {

// switch (action.type) {
//     case CART_ADD_ITEMS:
//         const existingItem = state.find((cartItem) => cartItem.productId === action.payload.productId)
//         if (existingItem) {
//             return state.map((cartItem) => {
//                 if (cartItem.productId === existingItem.productId) {
//                     return { ...cartItem, quantity: cartItem.quantity + 1 }
//                 }
//                 else {
//                     return cartItem
//                 }
//             })
//         }
//         return [...state, { ...action.payload, quantity: 1 }]

//     case CART_REMOVE_ITEMS:
//         return state.filter((newCart) => newCart.productId !== action.payload.productId)

//     case CART_INCREASE_QUANTITY:
//         return state.map((items) => {
//             if (items.productId === action.payload.productId) {
//                 return {
//                     ...items, quantity: items.quantity + 1
//                 }
//             }
//             return items
//         })

//     case CART_DECREASE_QUANTITY:
//         return state.map((items) => {
//             if (items.productId === action.payload.productId) {
//                 return {
//                     ...items, quantity: items.quantity - 1
//                 }
//             }
//             return items
//         }).filter((items) => items.quantity > 0)
//     default:
//         return state
// }



