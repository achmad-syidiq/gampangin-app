import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/posSlice';
import { fetchProducts } from '../../redux/posActions';

const ProductSelector = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.pos);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h3>Products</h3>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {isLoading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <ul className="list-group">
          {filteredProducts.map((product, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {product.name} - ${product.price}
              <button className="btn btn-primary btn-sm" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductSelector;
