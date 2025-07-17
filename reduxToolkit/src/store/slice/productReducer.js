import { productList } from "../product";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'search',
    initialState: {
        allProducts: productList,         // master copy
        visibleProducts: productList     // displayed list
    },
    reducers: {
        searchProduct(state = initialState, action) {
            const searchBy = action.payload?.toLowerCase();
            state.visibleProducts = searchBy ? state.allProducts.filter(item => {
                return item.title.toLowerCase().includes(searchBy)
            }
            ) : state.allProducts
        }
    }
})


export const { searchProduct } = slice.actions
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

