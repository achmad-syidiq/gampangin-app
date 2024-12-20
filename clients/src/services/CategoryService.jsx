import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/categories";

export const getCategories = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createCategory = async (name) => {
  const response = await axios.post(API_URL, { name });
  return response.data;
};

export const updateCategory = async (id, name) => {
  if (!id) throw new Error("Category id is not found");
  const response = await axios.put(`${API_URL}/${id}`, { name });
  return response.data;
};

export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
