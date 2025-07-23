import wishListReducer from "./slice/wishlistReducer";
import productReducer from "./slice/productReducer";
import cartReducer from "./slice/cartReducer";
import { configureStore } from "@reduxjs/toolkit";
import apiMiddleware from './middleware/apimiddleWare'
import func from './middleware/func'

export const store = configureStore({
    reducer: {
        product: productReducer,
        cartItems: cartReducer,
        wishlist: wishListReducer,
    }, middleware: (getDefaultMiddleWare) => [...getDefaultMiddleWare(), apiMiddleware, func]

})


