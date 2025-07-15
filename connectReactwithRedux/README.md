markdown
# 🧠 Redux Product Search App

This repository showcases a basic Redux implementation for product search functionality using vanilla JavaScript. It demonstrates how to organize state with reducers and actions, and filter products based on user input.

---

## 🚀 Features

- 🔎 Filter products by title
- 🧠 Redux for state management
- 🔧 Modular action-reducer-store architecture
- ⚙️ Extensible structure for frontend integration

---

## 📁 Project Structure

redux/ ├── product.js # Static product data ├── actions.js # Action creator: searchProduct ├── reducer.js # Reducer for filtering logic ├── store.js # Redux store configuration └── README.md # Documentation


---

## 🔧 How It Works

1. **Initial State**:
   - `allProducts`: Complete product list
   - `filteredProducts`: Products matching search input

2. **searchProduct(title)** action dispatches a search query.

3. **Reducer** filters products using `.includes()` and updates `filteredProducts`.

---

### 🛠️ Redux Code Snippet

```js
// actions.js
export function searchProduct(title = "") {
  return { type: "search/product", payload: { title } };
}

// reducer.js
const initialState = {
  allProducts: productList,
  filteredProducts: productList,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "search/product":
      const keyword = action.payload.title.toLowerCase();
      const filtered = state.allProducts.filter(product =>
        product.title.toLowerCase().includes(keyword)
      );
      return { ...state, filteredProducts: filtered };

    default:
      return state;
  }
}

👤 Author
Lovey Chauhan 🔗 GitHub Profile

📜 License
MIT © Lovey Chauhan