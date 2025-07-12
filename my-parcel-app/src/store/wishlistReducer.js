const WISHLIST_ADD_ITEMS = 'wishlist/AddItem'
const WISHLIST_REMOVE_ITEMS = 'wishlist/RemoveItem'


export function addWishlistItem(productId) {
    return { type: WISHLIST_ADD_ITEMS, payload: { productId, quantity: 1 } }

}
export function removeWishlistItem(productId) {
    return { type: WISHLIST_REMOVE_ITEMS, payload: { productId } }

}

export default function wishListReducer(state = [], action) {
    switch (action.type) {
        case WISHLIST_ADD_ITEMS:
            return [...state, action.payload]

        case WISHLIST_REMOVE_ITEMS:
            return state.filter((items) => items.productId !== action.payload.productId)

        default:
            return state
    }
}
