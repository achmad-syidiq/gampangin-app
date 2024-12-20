import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/products";

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createProduct = async (newProduct) => {
  try {
    const response = await axios.post(API_URL, newProduct);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateProduct = async (productId, updatedProduct) => {
  try {
    const response = await axios.put(`${API_URL}/${productId}`, updatedProduct);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${API_URL}/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
