import { createSelector, createSlice } from "@reduxjs/toolkit"

const findItemIndex = (state, action) => state.findIndex((cartItem) => cartItem.productId === action.payload.productId)

const slice = createSlice({
    name: 'cart',
    initialState: {
        isloading: false,
        list: [],
        error: false
    },
    reducers: {
        fetchCartItems(state) {
            state.isloading = true
        },
        fetchCartItemsError(state) {
            state.isloading = false
            state.error = true
        },
        loadCartItems(state, action) {
            state.isloading = false
            state.list = action.payload.products

        },

        addCartItem(state, action) {
            const existingItemIndex = findItemIndex(state.list, action)
            if (existingItemIndex !== -1) {
                state.list[existingItemIndex].quantity += 1
            } else {
                state.list.push({ ...action.payload, quantity: 1 })
            }
        },
        removeCartItem(state, action) {
            const existingItemIndex = findItemIndex(state.list, action)
            state.list.splice(existingItemIndex, 1)
        },
        increaseCartItemQuantity(state, action) {
            const existingItemIndex = findItemIndex(state.list, action)
            state.list[existingItemIndex].quantity += 1
        },
        decreaseCartItemQuantity(state, action) {
            const existingItemIndex = findItemIndex(state.list, action)
            state.list[existingItemIndex].quantity -= 1
            if (state.list[existingItemIndex].quantity === 0) {
                state.list.splice(existingItemIndex, 1)
            }
        }
    }
})



const selectAllProducts = state => state.product.allProducts;
const selectCartList = state => state.cartItems.list;

export const getAllCartItems = createSelector(
    [selectAllProducts, selectCartList],
    (allProducts, cartList) => {
        return cartList.map(({ productId, quantity }) => {
            const product = allProducts.find((product) => product.id === productId)
            return { ...product, quantity }
        }).filter((title) => title)
    }

);

export const fetchCartItemFromApi = (dispatch) => {
    dispatch(fetchCartItems());
    fetch("https://fakestoreapi.com/carts/5")
        .then((res) => res.json())
        .then((data) => {
            dispatch(loadCartItems(data));
        })
        .catch(() => {
            dispatch(fetchCartItemsError());
        });
}



export const getCartItemLoading = (state) => state.cartItems.isloading;
export const getCartError = (state) => state.cartItems.error;

export const { fetchCartItems, loadCartItems, addCartItem, removeCartItem, fetchCartItemsError, increaseCartItemQuantity, decreaseCartItemQuantity } = slice.actions

export default slice.reducer

// const myCreateSlice = (config) => {
//     const { initialState, name, reducers } = config

//     const actions = {}
//     // console.log(config.reducers)

//     Object.keys(reducers).forEach((key) => {
//         actions[key] = function (payload) {
//             return {
//                 type: `${name}/${key}`,
//                 payload,
//             }
//         }
//     })

//     function reducer(originaState = initialState, action) {
//         return produce(originaState, (state.list) => {
//             const caseRender = reducers[action.type.split('/')[1]]
//             if (caseRender) {
//                 return caseRender(state.list, action)
//             }
//             return state.list

//         })
//     }

//     return { actions, reducer }
// }

// const mySlice = myCreateSlice({
//     name: 'cart',
//     initialState: [],
//     reducers: {
//         addCartItem(state.list, action) {
//             const existingItemIndex = findItemIndex(state.list, action)
//             if (existingItemIndex !== -1) {
//                 state.list[existingItemIndex].quantity += 1
//             } else {
//                 state.list.push({ ...action.payload, quantity: 1 })
//             }
//         },
//         removeCartItem(state.list, action) {
//             const existingItemIndex = findItemIndex(state.list, action)
//             state.list.splice(existingItemIndex, 1)
//         },
//         increaseCartItemQuantity(state.list, action) {
//             const existingItemIndex = findItemIndex(state.list, action)
//             state.list[existingItemIndex].quantity += 1
//         },
//         decreaseCartItemQuantity(state.list, action) {
//             const existingItemIndex = findItemIndex(state.list, action)
//             state.list[existingItemIndex].quantity -= 1
//             if (state.list[existingItemIndex].quantity === 0) {
//                 state.list.splice(existingItemIndex, 1)
//             }
//         }
//     }
// })





