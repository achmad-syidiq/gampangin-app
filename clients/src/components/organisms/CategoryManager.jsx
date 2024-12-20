import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, deleteCategoryThunk } from "../../redux/categorySlice";
import CategoryList from "../molecules/CategoryList.jsx";
import CategoryCreateForm from "../molecules/CategoryCreateForm.jsx";

const CategoryManager = () => {
  const dispatch = useDispatch();
  const { categories, isLoading, error } = useSelector((state) => state.category || {});

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  

  const handleDeleteCategory = async (id) => {
    await dispatch(deleteCategoryThunk(id)).then(() => dispatch(fetchCategories()));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <CategoryList
            categories={categories}
            onDelete={handleDeleteCategory} // Pass fungsi delete
          />
        </div>
        <div className="col-md-3">
          <CategoryCreateForm />
        </div>
      </div>
    </div>
  );
};

export default CategoryManager;
