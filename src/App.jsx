import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Products from "./pages/Product";
// import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductZoom from "./components/client/ProductZoom";
import { IoCloseSharp } from "react-icons/io5";
import ProductDetailsComponent from "./components/client/ProductDetailsComponent";
import CartPage from "./pages/CartPage";



const MyContext = createContext();

function App() {

  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('lg');

  const [openCartPanel, setOpenCartPanel] = useState(false);

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };
  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    openCartPanel,
    toggleCartPanel,
  }

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="productlisting" element={<ProductListing />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="cart" element={<CartPage />} />
              {/* <Route path="/about" element={<AboutPage />} /> */}
              <Route path="/product" element={<Products />} />
            </Route>
            {/* <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/products" element={<ProductManagement />} />
            <Route path="/admin/orders" element={<OrderManagement />} />
            <Route path="/admin/brands" element={<BrandManagement />} />
            <Route path="/admin/roles" element={<RoleManagement />} />
          </Route> */}
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductDetailsModal}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailsModalContainer relative">
            <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-[15px] right-[15px] !bg-[#f1f1f1]" onClick={() => handleCloseProductDetailsModal()}><IoCloseSharp className="text-[20px]" /></Button>
            <div className="col1 w-[40%] px-3 py-8">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] py-8 px-8 pr-16 productContent ">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>


    </>
  );
}

export default App;
export { MyContext };