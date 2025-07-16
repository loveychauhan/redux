# ⚡️ Redux Toolkit – Product Filter Demo

This folder demonstrates how to use **Redux Toolkit** to manage application state efficiently in a product search scenario. It simplifies Redux logic using modern APIs like `createSlice`, `configureStore`, and embraces best practices for scalable code structure.

---

## 🚀 Features

- 🔍 Filter products by title
- ✨ Modern Redux with `createSlice` and `configureStore`
- ✅ Clean reducer logic and action generation
- ⚙️ Scalable and easy-to-integrate state architecture

## Comparison
-Redux toolkit is a js library that uses redux under the hood 
- It gives inbuilt function such as createSlice() which create action type , action cretors and reducer in a sigle function
- Configue store automatically comnbines multiple reducer and creates slice
- It reduces code when compare to redux 

---

## 🔧 How It Works

- The slice defines `allProducts` and `filteredProducts` inside initial state.
- The `searchProduct` reducer filters titles based on user input.
- State updates automatically flow through the store using Redux Toolkit's built-in immutability and slice handling.

### 🛠️ Example Slice Code

```js
import { createSlice } from "@reduxjs/toolkit";
import { productList } from "./product";

const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: productList,
    filteredProducts: productList,
  },
  reducers: {
    searchProduct: (state, action) => {
      const keyword = action.payload.toLowerCase();
      state.filteredProducts = state.allProducts.filter(product =>
        product.title.toLowerCase().includes(keyword)
      );
    },
  },
});

export const { searchProduct } = productSlice.actions;
export default productSlice.reducer;




👤 Author
Lovey Chauhan 🔗 GitHub Profile

📜 License
MIT © Lovey Chauhan
