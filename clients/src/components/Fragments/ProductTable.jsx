import React, { useMemo } from "react";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import { Icon } from "@iconify/react";
import FilterBar from "../../hook/useFilterBar";
const ProductTable = ({ products }) => {
  const data = useMemo(() => products, [products]);

  const columns = useMemo(
    () => [
      {
        Header: "Nama Produk",
        accessor: "name",
      },
      {
        Header: "SKU",
        accessor: "sku",
      },
      {
        Header: "Kategori",
        accessor: "category",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <span
            className={`badge ${
              value === "active" ? 
                "bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm" : 
                "bg-danger-focus text-danger-main px-24 py-4 rounded-pill fw-medium text-sm"
            }`}
          >
            {value}
          </span>
        ),
      },
      {
        Header: "Quantity",
        accessor: "qty",
      },
      {
        Header: "Modal Awal",
        accessor: "modal",
        Cell: ({ value }) => `Rp${value.toLocaleString()}`,
      },
      {
        Header: "Harga Jual",
        accessor: "price",
        Cell: ({ value }) => `Rp${value.toLocaleString()}`,
      },
      {
        Header: "Action",
        Cell: () => (
          <div className="d-flex gap-2">
            <button className="w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <Icon icon="iconamoon:eye-light" />
            </button>
            <button className="w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <Icon icon="lucide:edit" />
            </button>
            <button className="w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <Icon icon="mingcute:delete-2-line" />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  return (
    <>
      {/* Filter Bar */}
      <FilterBar
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
        sortColumn={state.sortBy}
      />

      {/* Table */}
      <table className="table bordered-table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
