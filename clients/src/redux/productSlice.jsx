import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/ProductService";

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
  const data = await getProducts();
  return data;
});

export const fetchProductById = createAsyncThunk("product/fetchProductById", async (productId) => {
  const data = await getProductById(productId);
  return data;
});

export const createNewProduct = createAsyncThunk("product/createNewProduct", async (product) => {
  const data = await createProduct(product);
  return data;
});

export const updateExistingProduct = createAsyncThunk(
  "product/updateExistingProduct",
  async ({ id, product }) => {
    const data = await updateProduct(id, product);
    return data;
  }
);

export const deleteExistingProduct = createAsyncThunk(
  "product/deleteExistingProduct",
  async (productId) => {
    const data = await deleteProduct(productId);
    return data;
  }
);

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  product: null,
  isProductLoading: false,
  isProductError: null,
  isProductCreated: false,
  isProductUpdated: false,
  isProductDeleted: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.isProductLoading = true;
        state.isProductError = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isProductLoading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.isProductLoading = false;
        state.isProductError = action.error.message;
      })
      .addCase(createNewProduct.pending, (state) => {
        state.isProductCreated = false;
      })
      .addCase(createNewProduct.fulfilled, (state) => {
        state.isProductCreated = true;
      })
      .addCase(createNewProduct.rejected, (state) => {
        state.isProductCreated = false;
      })
      .addCase(updateExistingProduct.pending, (state) => {
        state.isProductUpdated = false;
      })
      .addCase(updateExistingProduct.fulfilled, (state) => {
        state.isProductUpdated = true;
      })
      .addCase(updateExistingProduct.rejected, (state) => {
        state.isProductUpdated = false;
      })
      .addCase(deleteExistingProduct.pending, (state) => {
        state.isProductDeleted = false;
      })
      .addCase(deleteExistingProduct.fulfilled, (state) => {
        state.isProductDeleted = true;
      })
      .addCase(deleteExistingProduct.rejected, (state) => {
        state.isProductDeleted = false;
      })
      .addDefaultCase((state) => {
        state.isLoading = false;
        state.error = null;
        state.isProductLoading = false;
        state.isProductError = null;
        state.isProductCreated = false;
        state.isProductUpdated = false;
        state.isProductDeleted = false;
      });
  },
});

export default productSlice.reducer;
