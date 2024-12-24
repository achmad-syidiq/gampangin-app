import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/posSlice';
import { processTransaction } from '../../redux/posActions';

const ProductCart = () => {
  const dispatch = useDispatch();
  const { cart, totalAmount, isLoading, error } = useSelector((state) => state.pos);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckout = () => {
    const transaction = { items: cart, totalAmount };
    dispatch(processTransaction(transaction));
  };

  return (
    <div>
      <h3>Cart</h3>
      <ul className="list-group">
        {cart.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item.product.name} x {item.quantity} - Rp.{item.price * item.quantity}
            <button className="btn btn-danger btn-sm" onClick={() => handleRemove(item.product._id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h4>Total: Rp.{totalAmount}</h4>
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-success btn-block" onClick={handleCheckout} disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Checkout'}
      </button>
    </div>
  );
};

export default ProductCart;
