import axios from "axios";

export const fetchProduct = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/v1/products");
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return [];
  }
};
