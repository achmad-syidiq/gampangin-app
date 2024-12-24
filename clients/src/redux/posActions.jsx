import {
    fetchProducts as fetchProductsAPI,
    submitTransaction as submitTransactionAPI,
    fetchTransactions as fetchTransactionsAPI,
  } from '../services/PosService';
  import {
    setLoading,
    setError,
    setProducts,
    setTransactions,
    clearCart,
  } from './posSlice';
  
  // Fetch available products for POS
  export const fetchProducts = () => async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const products = await fetchProductsAPI();
      dispatch(setProducts(products));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
  
  // Process and submit a new transaction
  export const processTransaction = (transaction) => async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await submitTransactionAPI(transaction);
      dispatch(clearCart()); // Clear cart after successful transaction
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
  
  // Fetch transaction history
  export const fetchTransactions = () => async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const transactions = await fetchTransactionsAPI();
      dispatch(setTransactions(transactions));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
  