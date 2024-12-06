import React from "react";
import MasterLayout from "../Layouts/MasterLayout";
import Breadcrumb from "../Elements/Breadcrumb";
import ProductList from "../Layouts/ProductList";
const ProductPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title="Products" />

        {/* Product Layer */}
        <ProductList />
        
      </MasterLayout>
    </>
  );
};


export default ProductPage;