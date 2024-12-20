import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { useState } from "react";

const DEFAULT_VALUE = {
  TEXT: "N/A",
  NUMBER: 0,
  STATUS: "in-active",
};

const ProductTable = ({ products, onView, onEdit, onDelete, onAdd, onImport, onExport }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({key: null, direction:null});


  const formatCurrency = (value) => `Rp${(value || 0).toLocaleString()}`;

  const renderBadge = (status) => (
    <span
      className={`badge ${
        status === "active"
          ? "bg-success-focus text-success-main"
          : "bg-danger-focus text-danger-main"
      }`}
    >
      {status}
    </span>
  );

  const sortedProducts = [...products].sort((a, b) => {
    if (!sortConfig) return 0;
    const valueA = a[sortConfig.key];
    const valueB = b[sortConfig.key];

    if (typeof valueA === "string") {
      return sortConfig.direction === "asc" 
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }
    return sortConfig.direction === "asc" ? valueA - valueB : valueB - valueA;
  });


  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSort = (key) => {
    setSortConfig((prev) => {
      const newDirection = 
        prev.key === key && prev.direction === "asc" ? "desc" : "asc";
      return {
        key,
        direction: newDirection,
      };
    })
  }

  return (
    <section>
      {/* Action Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3">
      <input
          type="text"
          className="form-control w-25"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="d-flex gap-2">
          <button onClick={onAdd} className="btn btn-primary">
            <Icon icon="mdi:plus" /> Add
          </button>
          <button onClick={onImport} className="btn btn-secondary">
            <Icon icon="mdi:import" /> Import
          </button>
          <button onClick={onExport} className="btn btn-success">
            <Icon icon="mdi:export" /> Export
          </button>
          {/* Search Bar */}
        </div>
        
      </div>
      {/* Product Table */}
      {filteredProducts.length > 0 ? (
        <table className="table bordered-table">
          <thead>
            <tr>
              <th>No</th>
              <th onClick={() => handleSort("name")}>Name</th>
              <th onClick={() => handleSort("sku")}>SKU</th>
              <th onClick={() => handleSort("category")}>Category</th>
              <th onClick={() => handleSort("status")}>Status</th>
              <th onClick={() => handleSort("qty")}>Qty</th>
              <th onClick={() => handleSort("modal")}>Modal</th>
              <th onClick={() => handleSort("price")}>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name || DEFAULT_VALUE.TEXT}</td>
                <td>{product.sku || DEFAULT_VALUE.TEXT}</td>
                <td>
                  {product.category
                    ? product.category.name || DEFAULT_VALUE.TEXT
                    : DEFAULT_VALUE.TEXT}
                </td>
                <td>{renderBadge(product.status || DEFAULT_VALUE.STATUS)}</td>
                <td>{product.qty || DEFAULT_VALUE.NUMBER}</td>
                <td>{formatCurrency(product.modal || DEFAULT_VALUE.NUMBER)}</td>
                <td>{formatCurrency(product.price || DEFAULT_VALUE.NUMBER)}</td>
                <td>
                  <div className="d-flex gap-2">
                    <button
                      onClick={() => onView(product)}
                      className="btn-action bg-primary-light text-primary-600"
                    >
                      <Icon icon="iconamoon:eye-light" />
                    </button>
                    <button
                      onClick={() => onEdit(product)}
                      className="btn-action bg-success-focus text-success-main"
                    >
                      <Icon icon="lucide:edit" />
                    </button>
                    <button
                      onClick={() => onDelete(product)}
                      className="btn-action bg-danger-focus text-danger-main"
                    >
                      <Icon icon="mingcute:delete-2-line" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products found.</p>
      )}
    </section>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
  onView: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onImport: PropTypes.func.isRequired,
  onExport: PropTypes.func.isRequired,
};

export default ProductTable;
