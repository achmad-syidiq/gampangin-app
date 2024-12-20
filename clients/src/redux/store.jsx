import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice"

const store = configureStore({
  reducer: {
    products: productReducer,
    category: categoryReducer,
  },
});

export default store;
