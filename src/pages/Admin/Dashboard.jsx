function Dashboard() {
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
            <p className="text-3xl font-bold text-blue-500 mt-2">150</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700">Total Products</h2>
            <p className="text-3xl font-bold text-blue-500 mt-2">300</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700">Total Orders</h2>
            <p className="text-3xl font-bold text-blue-500 mt-2">50</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;