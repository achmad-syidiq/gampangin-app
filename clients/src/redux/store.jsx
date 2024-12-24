import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice"
import posReducer from "./posSlice"

const store = configureStore({
  reducer: {
    products: productReducer,
    category: categoryReducer,
    pos: posReducer,
  },
});

export default store;
