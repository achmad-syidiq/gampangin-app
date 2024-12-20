import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategoryThunk } from "../../redux/categorySlice";

const CategoryCreateForm = () => {
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (categoryName.trim()) {
      dispatch(createCategoryThunk(categoryName));
      setCategoryName("");
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="mb-3">
      <div className="form-group">
        <label htmlFor="categoryName" className="mb-3">Category Name</label>
        <input
          type="text"
          className="form-control"
          id="categoryName"
          placeholder="Enter category name"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-success mt-3">
        Create
      </button>
    </form>
  );
};

export default CategoryCreateForm;
