import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  products: [],
  transactions: [],
  totalAmount: 0,
  isLoading: false,
  error: null,
};

const posSlice = createSlice({
  name: 'pos',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingCartItem = state.cart.find((cartItem) => cartItem.product._id === product._id);

      if (existingCartItem) {
        existingCartItem.quantity += quantity;
      } else {
        state.cart.push({ product, quantity, price: product.price });
      }

      state.totalAmount = state.cart.reduce((accumulatedTotal, cartItem) => accumulatedTotal + cartItem.quantity * cartItem.price, 0);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.product._id != productId);
      state.totalAmount = state.cart.reduce((total, item) => total + item.quantity * item.price, 0);
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalAmount = 0;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  setProducts,
  setTransactions,
  setLoading,
  setError,
} = posSlice.actions;
export default posSlice.reducer;
