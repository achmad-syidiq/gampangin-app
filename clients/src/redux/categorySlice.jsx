import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../services/CategoryService.jsx";

// thunks
export const fetchCategories = createAsyncThunk("category/fetchCategories", async () => {
  const data = await getCategories();
  return data;
});

export const createCategoryThunk = createAsyncThunk("category/createCategory", async (name) => {
  const data = await createCategory(name);
  return data;
});

export const updateCategoryThunk = createAsyncThunk(
  "category/updateCategory",
  async ({id, name} ) => {
    const data = await updateCategory(id, name);
    return data;
  }
);

export const deleteCategoryThunk = createAsyncThunk("category/deleteCategory", async (id) => {
  const data = await deleteCategory(id);
  return data;
});

// initial state
const initialState = {
  categories: [],
  loading: false,
  error: null,
};

// slice
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createCategoryThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCategoryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = [...state.categories, action.payload];
      })
      .addCase(createCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateCategoryThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCategoryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = state.categories.map((category) => {
          if (category.id === action.payload.id) {
            return action.payload;
          }
          return category;
        });
      })
      .addCase(updateCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteCategoryThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCategoryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = state.categories.filter((category) => category.id !== action.payload.id);
      })
      .addCase(deleteCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addDefaultCase((state) => {
        state.loading = false;
        state.error = null;
      });
  },
});


export default categorySlice.reducer;