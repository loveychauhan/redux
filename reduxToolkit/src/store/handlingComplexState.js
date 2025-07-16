import wishListReducer from "./slice/wishlistReducer";
import productReducer from "./slice/productReducer";
import cartReducer from "./slice/cartReducer";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        product: productReducer,
        cartItems: cartReducer,
        wishlist: wishListReducer

    }
})


