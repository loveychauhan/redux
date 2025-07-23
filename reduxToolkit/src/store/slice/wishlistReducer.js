import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) => state.findIndex((cartItem) => cartItem.productId === action.payload.productId)

const slice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        removeWishlistItem(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            state.splice(existingItemIndex, 1)

        },
        addWishlistItem(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            if (existingItemIndex === -1) state.push(action.payload)

        }
    }

})

export const getWishList = (state) => state.wishlist;

export const { addWishlistItem, removeWishlistItem } = slice.actions
export default slice.reducer

