import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice';

function AdminLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="mt-4">
          <ul>
            <li>
              <Link
                to="/admin"
                className="block py-2 px-4 hover:bg-blue-700 transition"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className="block py-2 px-4 hover:bg-blue-700 transition"
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                to="/admin/products"
                className="block py-2 px-4 hover:bg-blue-700 transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/admin/orders"
                className="block py-2 px-4 hover:bg-blue-700 transition"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                to="/admin/brands"
                className="block py-2 px-4 hover:bg-blue-700 transition"
              >
                Brands
              </Link>
            </li>
            <li>
              <Link
                to="/admin/roles"
                className="block py-2 px-4 hover:bg-blue-700 transition"
              >
                Roles
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Welcome, {user?.username || 'Admin'}
          </h2>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;