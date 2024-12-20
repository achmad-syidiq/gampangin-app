import { useState } from "react";
import propTypes from "prop-types";
import CategoryUpdateForm from "./CategoryUpdateForm";

const CategoryList = ({ categories, onDelete }) => {
  const [editingCategory, setEditingCategory] = useState(null);

  const handleEditClick = (category) => {
    setEditingCategory(category); // Tampilkan form edit untuk kategori tertentu
  };

  const handleCloseEdit = () => {
    setEditingCategory(null); // Tutup form edit
  };

  return (
    <div>
      <table className="table table-striped bordered-table table-hover text-center">
        <thead>
          <tr>
            <th className="text-center">No.</th>
            <th className="text-center">Category Name</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{category.name}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm mx-2"
                  onClick={() => handleEditClick(category)}
                >
                  Edit 
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(category._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal untuk edit */}
      {editingCategory && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Category</h5>
                <button type="button" className="close" onClick={handleCloseEdit}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <CategoryUpdateForm category={editingCategory} onClose={handleCloseEdit} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

CategoryList.propTypes = {
  categories: propTypes.array.isRequired,
  onDelete: propTypes.func.isRequired,
};

export default CategoryList;
