# 🦆 Redux Fundamentals with Duck Pattern

This repository is a hands-on exploration of **Redux fundamentals**, built using **vanilla JavaScript** and **Parcel**. It demonstrates how to manage global state predictably and maintainably — with a focus on the **Duck Pattern** for modular architecture.

---

## 🚀 What I Learned

- 🔄 **Redux Core Concepts**: Actions, reducers, store, and dispatch flow.
- 🧩 **Duck Pattern**: Keeping action types, creators, and reducers in one file for better modularity.
- 🧠 **State Immutability**: Using pure functions and spread syntax to update state safely.
- 🧼 **Clean Architecture**: Organizing features by domain rather than file type.
- 🛠️ **Parcel Setup**: Fast bundling and dev server without complex config.
- 🧪 **Manual UI Binding**: Connecting Redux state to DOM without React — for deeper understanding.

---

---

## 🛠️ Technologies Used

| Tool        | Purpose                      |
|-------------|------------------------------|
| Redux       | State management             |
| Parcel      | Bundling and dev server      |
| JavaScript  | Core logic and interactivity |
| HTML/CSS    | UI structure and styling     |

---

## 🧠 Why Redux Is Important

Redux helps you:
- Maintain a **single source of truth** for your app’s state.
- Write **predictable** and **testable** logic.
- Scale your app with **modular architecture**.
- Understand the flow of data clearly — especially when paired with patterns like Ducks.

---

## 🦆 Duck Pattern Example

```js
// cartDuck.js

// Action Types
const CART_ADD_ITEMS = 'cart/AddItem';

// Action Creators
export function addCartItem(productId) {
  return { type: CART_ADD_ITEMS, payload: { productId, quantity: 1 } };
}

// Reducer
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case CART_ADD_ITEMS:
      return [...state, action.payload];
    default:
      return state;
  }
}

🙋‍♂️ Author
Lovey Chauhan 🔗 GitHub Profile

⭐️ Show Your Support
If you found this project helpful, give it a ⭐️ and share it with others. Let’s build clean, scalable apps together!
