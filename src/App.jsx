import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
// import AboutPage from "./AboutPage";
import Index from "./pages/Admin/index";
import Products from "./pages/Product";
import Cart from "./pages/Cart";

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
        <Route path="/admin" element={<Index />}>
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;