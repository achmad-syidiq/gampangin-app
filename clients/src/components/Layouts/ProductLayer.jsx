import React from "react";
import ProductTable from "../Fragments/ProductTable";
import ProductCardStats from "../Fragments/ProductCardStats";

const ProductLayer = ({ products, onView, onEdit, onDelete }) => {
  // Statistic properties
  const totalProducts = products.length;
  const totalActiveProducts = products.filter((p) => p.status === "active").length;
  const totalInactiveProducts = products.filter((p) => p.status === "in-active").length;

  // Filter Category properties
  const uniqueCategories = [...new Set(products.map((product) => product.category))];
  const totalCategories = uniqueCategories.length;

  const stats = [
    {
      title: "Total Product",
      value: totalProducts,
      icon: "gridicons:multiple-users",
      bgColor: "bg-gradient-start-1",
      iconColor: "bg-cyan",
    },
    {
      title: "Category Product",
      value: totalCategories,
      icon: "fa-solid:award",
      bgColor: "bg-gradient-start-2",
      iconColor: "bg-purple",
    },
    {
      title: "Product Active",
      value: totalActiveProducts,
      icon: "solar:wallet-bold",
      bgColor: "bg-gradient-start-4",
      iconColor: "bg-success-main",
    },
    {
      title: "Product In-Active",
      value: totalInactiveProducts,
      icon: "fa6-solid:file-invoice-dollar",
      bgColor: "bg-gradient-start-5",
      iconColor: "bg-red",
    },
  ];

  return (
    <section className="row gy-4">
      <div className="col-xl-12">
        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-4">
          {stats.map((stat, index) => (
            <ProductCardStats key={index} {...stat} />
          ))}
        </div>
      </div>
      <div className="col-xl-12">
        <div className="card basic-data-table">
          <div className="card-body">
            <ProductTable 
              products={products} 
              onView={onView} 
              onEdit={onEdit} 
              onDelete={onDelete} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLayer;
