import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../store/slices/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateQuantity({ product_id: productId, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div
              key={item.product_id}
              className="flex items-center justify-between bg-white p-4 mb-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center">
                <img
                  src={item.image_url || 'https://via.placeholder.com/50'}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleUpdateQuantity(item.product_id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded-lg"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(item.product_id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded-lg"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item.product_id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 text-right">
            <p className="text-xl font-semibold">
              Total: $
              {items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </p>
            <div className="mt-4 space-x-4">
              <button
                onClick={handleClearCart}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Clear Cart
              </button>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;