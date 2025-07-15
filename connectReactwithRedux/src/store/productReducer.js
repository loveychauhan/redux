import { productList } from "./product";

const SEARCH_PRODUCT = 'search/product'

export function searchProduct(title = "") {
    console.log(title)
    return { type: SEARCH_PRODUCT, payload: { title } }
}

export default function productReducer(state = productList, action) {

    switch (action.type) {
        case SEARCH_PRODUCT: {
            const products = state.filter((items) => items.title.toLocaleLowerCase().includes(action.payload.title))
            // console.log(products)
            return products
        }
        default:
            return [...state]
    }

}

