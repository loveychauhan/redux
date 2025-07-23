# Redux Product Search App

A responsive and minimal product search/filter application built with React, Redux Toolkit, and Vite. This project demonstrates clean state management, memoized selectors, and modular architecture using modern Redux practices.

---

## 🚀 Features

- Redux Toolkit-based state architecture
- Product filtering and dynamic search
- Memoized selectors for optimized rendering
- Modular file and folder structure
- ESLint configuration for consistent formatting

---

## 📦 Tech Stack

| Tool           | Purpose                     |
|----------------|-----------------------------|
| React          | UI library                  |
| Redux Toolkit  | State management            |
| Vite           | Build tool & dev server     |
| CSS / SCSS     | Styling                     |
| ESLint         | Code linting                |

---

## 📁 Folder Structure

```bash
redux/
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   ├── features/         # Redux slices
│   ├── hooks/            # Custom hooks
│   ├── pages/            # Route-level components
│   ├── redux/            # Store setup
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point
├── .eslintrc.cjs         # Linting config
├── index.html
└── package.json
```

---

## 🧑‍💻 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/loveychauhan/redux.git
cd redux
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in browser.

---

## 🧠 Redux Architecture

- State is initialized in feature-based slices.
- Actions and reducers are defined using `createSlice`.
- Selectors are memoized using `createSelector` for performance.
- The store is configured in `src/redux/store.js`.

Example slice pattern:
```js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: { items: [], query: '' },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = productSlice.actions;
export default productSlice.reducer;
```

---

## ✨ Enhancements & TODOs

- [ ] Add loader/spinner component
- [ ] Improve error handling for network requests
- [ ] Expand README with screenshots/GIFs
- [ ] Add TypeScript support
- [ ] Enable unit testing with Vitest or Jest

---

## 💬 Contributing

Feel free to fork this repo, make improvements, and submit pull requests. Whether it's a bug fix, feature addition, or documentation tweak — contributions are welcome!

---

## 🛡️ License

This project is licensed under the MIT License.

---

## 📚 Learning Notes

Check out the `docs/` folder (coming soon) for architectural decisions, Redux patterns, and learning summaries.

---

Made with ❤️ by [Lovey Chauhan](https://github.com/loveychauhan)
