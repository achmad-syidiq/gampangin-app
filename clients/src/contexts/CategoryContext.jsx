import { createContext, useContext, useState, useEffect } from "react";
import Proptypes from "prop-types";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../services/CategoryService";

const CategoryContext = createContext();

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCategory = async (name) => {
    try {
      const data = await createCategory(name);
      setCategories((prevCategories) => [...prevCategories, data]);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdateCategory = async (_id, name) => {
    try {
      const data = await updateCategory(_id, name);
      setCategories((prevCategories) =>
        prevCategories.map((category) => (category.id === _id ? data : category))
      );
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteCategory = async (_id) => {
    try {
      await deleteCategory(_id);
      setCategories((prevCategories) => prevCategories.filter((category) => category.id !== _id));
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        loading,
        error,
        handleCreateCategory,
        handleUpdateCategory,
        handleDeleteCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};


CategoryProvider.propTypes = {
  children: Proptypes.node.isRequired,
};

