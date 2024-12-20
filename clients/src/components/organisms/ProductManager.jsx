import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchProductById,
  createNewProduct,
  updateExistingProduct,
  deleteExistingProduct,
} from "../../redux/productSlice";
import ProductTable from "../molecules/ProductTable";
import ProductCardStats from "../molecules/ProductCardStats";

const ProductManager = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.products || {});

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCreateProduct = useCallback(
    (product) => {
      dispatch(createNewProduct(product));
    },
    [dispatch]
  );

  const handleViewProduct = (product) => {
    dispatch(fetchProductById(product._id));
  };

  const handleEditProduct = (product) => {
    dispatch(updateExistingProduct(product._id));
  };

  const handleDeleteProduct = (product) => {
    dispatch(deleteExistingProduct(product._id));
  };

  const productCount = products?.length || 0;
  const activeProductCount = products.filter((product) => product.status === "active").length;
  const inactiveProductCount = products.filter((product) => product.status === "inactive").length;
  const uniqueCategories = [...new Set(products.map((product) => product.category))];
  const categoryCount = uniqueCategories.length;

  const statistics = [
    {
      title: "Total Products",
      value: productCount,
      icon: "gridicons:multiple-users",
      bgColor: "bg-gradient-start-1",
      iconColor: "bg-cyan",
    },
    {
      title: "Total Categories",
      value: categoryCount,
      icon: "fa-solid:award",
      bgColor: "bg-gradient-start-2",
      iconColor: "bg-purple",
    },
    {
      title: "Active Products",
      value: activeProductCount,
      icon: "solar:wallet-bold",
      bgColor: "bg-gradient-start-4",
      iconColor: "bg-success-main",
    },
    {
      title: "Inactive Products",
      value: inactiveProductCount,
      icon: "fa6-solid:file-invoice-dollar",
      bgColor: "bg-gradient-start-5",
      iconColor: "bg-red",
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="mt-4">
      <div className="row">
        {statistics.map((stat, index) => (
          <ProductCardStats
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            bgColor={stat.bgColor}
            iconColor={stat.iconColor}
          />
        ))}
      </div>
      <div className="row mt-3">
        <ProductTable
          products={products}
          onCreate={handleCreateProduct}
          onView={handleViewProduct}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
        />
      </div>
    </section>
  );
};

export default ProductManager;
