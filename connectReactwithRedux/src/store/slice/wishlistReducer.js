import { produce } from "immer"

const WISHLIST_ADD_ITEMS = 'wishlist/AddItem'
const WISHLIST_REMOVE_ITEMS = 'wishlist/RemoveItem'


export function addWishlistItem(productData) {

    return { type: WISHLIST_ADD_ITEMS, payload: productData }

}
export function removeWishlistItem(productId) {
    return { type: WISHLIST_REMOVE_ITEMS, payload: { productId } }

}

export default function wishListReducer(originalState = [], action) {
    return produce(originalState, (state) => {
        const existingItemIndex = state.findIndex((item) => item.productId === action.payload.productId)
        switch (action.type) {
            case WISHLIST_ADD_ITEMS:
                state.push({ ...action.payload })
                break

            case WISHLIST_REMOVE_ITEMS:
                state.splice(existingItemIndex, 1)

        }
        return state
    })

}
