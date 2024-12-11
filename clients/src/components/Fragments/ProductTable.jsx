import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import { Icon } from "@iconify/react";
import FilterBar from "../../hook/useFilterBar";

const DEFAULT_VALUE = {
  TEXT: "N/A",
  NUMBER: 0,
  STATUS: "inactive",
};

const ProductTable = ({ products, onView, onEdit, onDelete }) => {
  const formatCurrency = useCallback((value) => {
    return `Rp${(value || 0).toLocaleString()}`;
  }, []);

  const renderBadge = useCallback((status) => {
    const badgeClass =
      status === "active"
        ? "bg-success-focus text-success-main"
        : "bg-danger-focus text-danger-main";
    return <span className={`badge ${badgeClass}`}>{status}</span>;
  }, []);

  const data = useMemo(() => {
    return (products || []).map((product) => ({
      id: product._id,
      name: product.name || DEFAULT_VALUE.TEXT,
      sku: product.sku || DEFAULT_VALUE.TEXT,
      category: Array.isArray(product.category)
        ? product.category.join(", ")
        : product.category || DEFAULT_VALUE.TEXT,
      status: product.status || DEFAULT_VALUE.STATUS,
      qty: product.qty || DEFAULT_VALUE.NUMBER,
      modal: product.modal || DEFAULT_VALUE.NUMBER,
      price: product.price || DEFAULT_VALUE.NUMBER,
    }));
  }, [products]);

  const columns = useMemo(
    () => [
      { Header: "Nama Produk", accessor: "name" },
      { Header: "SKU", accessor: "sku" },
      { Header: "Kategori", accessor: "category" },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => renderBadge(value),
      },
      {
        Header: "Quantity",
        accessor: "qty",
        Cell: ({ value }) => value ?? DEFAULT_VALUE.TEXT,
      },
      {
        Header: "Modal Awal",
        accessor: "modal",
        Cell: ({ value }) => formatCurrency(value),
      },
      {
        Header: "Harga Jual",
        accessor: "price",
        Cell: ({ value }) => formatCurrency(value),
      },
      {
        Header: "Action",
        Cell: ({ row }) => {
          const data = row.original;
          return (
            <div className="d-flex gap-2">
              <button
                onClick={() => onView(data)}
                className="btn-action bg-primary-light text-primary-600"
              >
                <Icon icon="iconamoon:eye-light" />
              </button>
              <button
                onClick={() => onEdit(data)}
                className="btn-action bg-success-focus text-success-main"
              >
                <Icon icon="lucide:edit" />
              </button>
              <button
                onClick={() => onDelete(data)}
                className="btn-action bg-danger-focus text-danger-main"
              >
                <Icon icon="mingcute:delete-2-line" />
              </button>
            </div>
          );
        },
      },
    ],
    [formatCurrency, renderBadge, onView, onEdit, onDelete]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  if (!data || data.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <>
      <FilterBar globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />
      <table className="table bordered-table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="sortable-column"
                  aria-sort={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "descending"
                        : "ascending"
                      : "none"
                  }
                  key={column.id}
                >
                  {column.render("Header")}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <span> 🔽</span>
                    ) : (
                      <span> 🔼</span>
                    )
                  ) : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.original.id}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.column.id}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
  onView: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductTable;