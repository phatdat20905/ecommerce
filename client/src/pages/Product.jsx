import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/slices/productsSlice';
import { addToCart } from '../store/slices/cartSlice';

function Products() {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.product_id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={product.image_url || 'https://via.placeholder.com/150'}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;