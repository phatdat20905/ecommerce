import { useState, useEffect } from 'react';
import api from '../../config/axios';

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products/');
        if (response.data.errCode === 0) {
          setProducts(response.data.data);
        } else {
          setError(response.data.errMessage);
        }
      } catch (err) {
        setError(err.response?.data?.errMessage || 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Product Management</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3 text-left">ID</th>
              <th className="border p-3 text-left">Name</th>
              <th className="border p-3 text-left">Price</th>
              <th className="border p-3 text-left">Stock</th>
              <th className="border p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.product_id} className="hover:bg-gray-100">
                <td className="border p-3">{product.product_id}</td>
                <td className="border p-3">{product.name}</td>
                <td className="border p-3">${product.price}</td>
                <td className="border p-3">{product.stock}</td>
                <td className="border p-3">
                  <button className="text-blue-500 hover:underline mr-2">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductManagement;