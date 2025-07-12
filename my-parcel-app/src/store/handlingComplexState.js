
import { combineReducers, createStore } from "redux";
import productReducer from "./productReducer";
import wishListReducer, { addWishlistItem, removeWishlistItem, } from "../wishlistReducer";
import cartReducer, { addCartItem, decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem } from "./cartReducer";


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

const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__())


store.dispatch(addCartItem(5))
store.dispatch(addCartItem(7))

store.dispatch(removeCartItem(7))

store.dispatch(increaseCartItemQuantity(5))
store.dispatch(decreaseCartItemQuantity(5))
store.dispatch(decreaseCartItemQuantity(5))

store.dispatch(removeWishlistItem(5))
store.dispatch(addWishlistItem(5))
store.dispatch(removeWishlistItem(5))



