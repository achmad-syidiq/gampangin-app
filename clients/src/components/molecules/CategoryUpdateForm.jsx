import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories, updateCategoryThunk } from "../../redux/categorySlice";
import propTypes from "prop-types";

const CategoryUpdateForm = ({ category, onClose }) => {
  const [name, setName] = useState(category.name);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(updateCategoryThunk({id: category._id, name}))
        .then(() => dispatch(fetchCategories()))
        .then(() => onClose()) 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="categoryNameEdit">Category Name</label>
        <input
          type="text"
          className="form-control"
          id="categoryNameEdit"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary mr-2">
          Update
        </button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

CategoryUpdateForm.propTypes = {
  category: propTypes.object.isRequired,
  onClose: propTypes.func.isRequired,
};

export default CategoryUpdateForm;
