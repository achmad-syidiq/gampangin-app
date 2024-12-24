import axios  from "axios";


const API_URL = "http://localhost:5000/api/v1";

// Fetch available products
export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

// Submit a transaction
export const submitTransaction = async (transaction) => {
  const response = await axios.post(`${API_URL}/pos`, transaction);
  return response.data;
};

// Fetch transaction history
export const fetchTransactions = async () => {
  const response = await axios.get(`${API_URL}/pos`);
  return response.data;
};


