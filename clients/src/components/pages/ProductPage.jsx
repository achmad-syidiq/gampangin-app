import React, { useEffect, useState } from "react";
import MasterLayout from "../Layouts/MasterLayout";
import Breadcrumb from "../Elements/Breadcrumb";
import ProductLayer from "../Layouts/ProductLayer";
import { fetchProduct } from "../../api/productAPI";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProduct();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching data products:", err);
      }
    };
    getProducts();
  }, []);

  // Handle actions
  const handleView = (product) => {
    console.log("View product:", product);
  };

  const handleEdit = (product) => {
    console.log("Edit product:", product);
    // Add logic to edit the product, e.g., show a modal form.
  };

  const handleDelete = (product) => {
    console.log("Delete product:", product);
    // Add logic to delete the product, e.g., call an API and update state.
    setProducts((prevProducts) => prevProducts.filter((p) => p.id !== product.id));
  };

  return (
    <>
      <MasterLayout>
        <Breadcrumb title="Products" />
        <ProductLayer 
          products={products} 
          onView={handleView} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
      </MasterLayout>
    </>
  );
};

export default ProductPage;
