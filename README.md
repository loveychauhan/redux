# 🧠 Redux 
This repository demonstrates the implementation of a product filtering system using Redux in vanilla JavaScript. It's designed as a foundational learning project to practice core Redux concepts such as state management, actions, and reducer logic — all organized for clarity and scalability.

---

## 🚀 Features

- 🔍 Search and filter products by title
- 🧠 Redux state management without a frontend framework
- 🧩 Modular architecture with separation of concerns
- 🛠️ Easy to extend with React or Next.js UI layer

---

## 🔧 How It Works

- The initial state includes a complete list of products.
- When `searchProduct(title)` is dispatched, the reducer filters the original list and updates the state.
- The reducer maintains both `allProducts` and `filteredProducts` to ensure state integrity after multiple searches.

### 🛠️ Example Reducer Logic

```js
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

```

