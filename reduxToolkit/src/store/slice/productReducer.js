import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'search',
    initialState: {
        allProducts: [],
        visibleProducts: [],
        isloading: false,
        isError: false   // displayed list
    },
    reducers: {
        addProducts(state, action) {
            state.isloading = true
            state.allProducts = [...action.payload]
            state.visibleProducts = [...action.payload]
            state.isloading = false

        },
        loadingReducer(state) {
            state.isloading = true
        },
        errorReducer(state) {
            state.isloading = false
            state.isError = true
        },
        searchProduct(state, action) {
            const searchBy = action.payload?.toLowerCase();
            state.visibleProducts = searchBy ? state.allProducts.filter(item => {
                return item.title.toLowerCase().includes(searchBy)
            }
            ) : state.allProducts
        }
    }
})


export const { searchProduct, addProducts, loadingReducer, errorReducer } = slice.actions
export default slice.reducer



// export default function productReducer(state = productList, action) {

//     switch (action.type) {
//         case SEARCH_PRODUCT: {
//             const searchBy = action.payload.title.toLowerCase()
//             const products = state.filter((items) => items.title.toLocaleLowerCase().includes(searchBy))
//             // console.log(products)
//             return products
//         }
//         default:
//             return [...state]
//     }

// }

