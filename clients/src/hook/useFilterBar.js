import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
const useFilterBar = ({ globalFilter, setGlobalFilter, sortColumn, setSortColumn }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="d-flex align-items-center gap-2">
        {/* Search Input */}
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          style={{ maxWidth: "200px" }}
        />

        {/* Sort Dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort By
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                onClick={() => setSortColumn("name")}
              >
                Nama Produk
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => setSortColumn("category")}
              >
                Kategori
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => setSortColumn("status")}
              >
                Status
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex gap-2">
        <button className="btn btn-success d-flex align-items-center">
          <Icon icon="akar-icons:plus" className="me-1" />
          Add Product
        </button>
        <button className="btn btn-primary d-flex align-items-center">
          <Icon icon="fluent:cloud-upload-24-filled" className="me-1" />
          Upload Data
        </button>
      </div>
    </div>
  );
};

export default useFilterBar;
