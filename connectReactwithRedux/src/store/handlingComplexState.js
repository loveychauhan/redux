
import { combineReducers, createStore } from "redux";
import wishListReducer from "./slice/wishlistReducer";
import productReducer from "./slice/productReducer";
import cartReducer from "./slice/cartReducer";
import { produce } from "immer";


//Combinig Reducers

const reducer = combineReducers({
    product: productReducer,
    cartItems: cartReducer,
    wishlist: wishListReducer

})

// const CART_ADD_ITEMS = 'cart/AddItem'
// const CART_REMOVE_ITEMS = 'cart/RemoveItem'
// const CART_INCREASE_QUANTITY = 'cart/IncreaseQuantity'
// const CART_DECREASE_QUANTITY = 'cart/DecreaseQuantity'

// const WISHLIST_ADD_ITEMS = 'wishlist/AddItem'
// const WISHLIST_REMOVE_ITEMS = 'wishlist/RemoveItem'

// function reducer(state = initialState, action) {

//     function removeItem({ productId }) {
//         return state.cartItems.filter((newCart) => newCart.productId !== productId)

//     }


//     switch (action.type) {

//         case CART_ADD_ITEMS:
//             return { ...state, cartItems: [...state.cartItems, action.payload] }
//         case CART_REMOVE_ITEMS:
//             return { ...state, cartItems: removeItem(action.payload) }
//         case CART_INCREASE_QUANTITY:
//             return {
//                 ...state, cartItems: state.cartItems.map((items) => {
//                     if (items.productId === action.payload.productId) {
//                         return {
//                             ...items, quantity: items.quantity + 1
//                         }
//                     }
//                     return items
//                 })
//             }
//         case CART_DECREASE_QUANTITY:
//             return {
//                 ...state, cartItems: state.cartItems.map((items) => {
//                     if (items.productId === action.payload.productId) {
//                         return {
//                             ...items, quantity: items.quantity - 1
//                         }
//                     }
//                     return items
//                 })
//             }
//         case WISHLIST_ADD_ITEMS:
//             return { ...state, wishlist: [...state.wishlist, action.payload] }

//         case WISHLIST_REMOVE_ITEMS:
//             return { ...state, wishlist: state.wishlist.filter((items) => items.productId !== action.payload.productId) }

//         default:
//             return state
//     }

// }

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const user = [
    {
        name: 'Lovey',
        age: 22
    },
    {
        name: 'gon',
        age: 15
    },
    {
        name: 'kilua',
        age: 14
    }
]

//Mutating code which changes main object
// user[1].age = 14


// usung mutating code but inside produce function which create a proxy of the object and then you can use same mutating code logic but without worrying about the orignal state 

// const newUser = produce(user, (newUser) => {
//     newUser[1].age = 16

// })
// console.log(newUser)
// console.log(user)

// store.dispatch(addCartItem(5))
// store.dispatch(addCartItem(7))

// store.dispatch(removeCartItem(7))

// store.dispatch(increaseCartItemQuantity(5))
// store.dispatch(decreaseCartItemQuantity(5))
// store.dispatch(decreaseCartItemQuantity(5))

// store.dispatch(removeWishlistItem(5))
// store.dispatch(addWishlistItem(5))
// store.dispatch(removeWishlistItem(5))



