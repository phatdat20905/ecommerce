import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import Products from "./pages/Product";
import Cart from "./pages/Cart";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import UserManagement from "./pages/admin/UserManagement";
import ProductManagement from "./pages/admin/ProductManagement";
import OrderManagement from "./pages/admin/OrderManagement";
import BrandManagement from "./pages/admin/BrandManagement";
import RoleManagement from "./pages/admin/RoleManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          <Route path="/product" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/products" element={<ProductManagement />} />
          <Route path="/admin/orders" element={<OrderManagement />} />
          <Route path="/admin/brands" element={<BrandManagement />} />
          <Route path="/admin/roles" element={<RoleManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;