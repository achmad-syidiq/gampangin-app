import React from "react";
import ProductTable from "../Fragments/ProductTable";
import ProductCardStats from "../Fragments/ProductCardStats";

const ProductLayer = () => {
  const stats = [
    {
      title: "Total Product",
      value: "100",
      icon: "gridicons:multiple-users",
      bgColor: "bg-gradient-start-1",
      iconColor: "bg-cyan",
    },
    {
      title: "Total Subscription",
      value: "15,000",
      icon: "fa-solid:award",
      bgColor: "bg-gradient-start-2",
      iconColor: "bg-purple",
    },
    {
      title: "Product Active",
      value: "50",
      icon: "solar:wallet-bold",
      bgColor: "bg-gradient-start-4",
      iconColor: "bg-success-main",
    },
    {
      title: "Product In-Active",
      value: "15",
      icon: "fa6-solid:file-invoice-dollar",
      bgColor: "bg-gradient-start-5",
      iconColor: "bg-red",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Kathryn Murphy",
      sku: "#526534",
      category: "Electronics",
      qty: 91,
      modal: "Rp1.500.000",
      price: "Rp2.500.000",
      status: "active",
    },
    {
      id: 2,
      name: "Kathryn Murphy",
      sku: "#526534",
      category: "Electronics",
      qty: 91,
      modal: "Rp1.500.000",
      price: "Rp2.500.000",
      status: "active",
    },
    {
      id: 3,
      name: "Kathryn Murphy",
      sku: "#526534",
      category: "Electronics",
      qty: 91,
      modal: "Rp1.500.000",
      price: "Rp2.500.000",
      status: "active",
    },
    // Add more products here
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
          {/* <div className="card-header">
            <h5 className="card-title mb-0">Default Data Tables</h5>
          </div> */}
          <div className="card-body">
            <ProductTable products={products} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLayer;
