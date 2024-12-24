import ProductCart from "../molecules/ProductCart";
import ProductSelector from "../molecules/ProductSelector";


const PosManager = () => {
  return (
    <section>
      <ProductSelector />
      <ProductCart />
    </section>
  );
};

export default PosManager;