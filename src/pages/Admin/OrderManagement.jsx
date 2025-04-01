import { useState, useEffect } from 'react';
import api from '../../config/axios';

function OrderManagement() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get('/orders/');
        if (response.data.errCode === 0) {
          setOrders(response.data.data);
        } else {
          setError(response.data.errMessage);
        }
      } catch (err) {
        setError(err.response?.data?.errMessage || 'Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Order Management</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3 text-left">ID</th>
              <th className="border p-3 text-left">User ID</th>
              <th className="border p-3 text-left">Total</th>
              <th className="border p-3 text-left">Status</th>
              <th className="border p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.order_id} className="hover:bg-gray-100">
                <td className="border p-3">{order.order_id}</td>
                <td className="border p-3">{order.user_id}</td>
                <td className="border p-3">${order.total}</td>
                <td className="border p-3">{order.status}</td>
                <td className="border p-3">
                  <button className="text-blue-500 hover:underline mr-2">View</button>
                  <button className="text-red-500 hover:underline">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderManagement;