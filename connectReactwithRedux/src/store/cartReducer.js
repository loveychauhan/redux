//Ducks Pattern => In The Same File We Keep Action, Action Creators And Reducer

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
export default function cartReducer(state = [], action) {

    function removeItem({ productId }) {
        return state.filter((newCart) => newCart.productId !== productId)

    }

    switch (action.type) {
        case CART_ADD_ITEMS:
            const existingItem = state.find((cartItem) => cartItem.productId === action.payload.productId)
            if (existingItem) {
                return state.map((cartItem) => {
                    if (cartItem.productId === existingItem.productId) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 }
                    }
                    else {
                        return cartItem
                    }
                })
            }
            return [...state, { ...action.payload, quantity: 1 }]
        case CART_REMOVE_ITEMS:
            return removeItem(action.payload)

        case CART_INCREASE_QUANTITY:
            return state.map((items) => {
                if (items.productId === action.payload.productId) {
                    return {
                        ...items, quantity: items.quantity + 1
                    }
                }
                return items
            })

        case CART_DECREASE_QUANTITY:
            return state.map((items) => {
                if (items.productId === action.payload.productId) {
                    return {
                        ...items, quantity: items.quantity - 1
                    }
                }
                return items
            }).filter((items) => items.quantity > 0)
        default:
            return state
    }
}