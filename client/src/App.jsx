import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Products from "./pages/Product";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductZoom from "./components/ProductZoom";
import { IoCloseSharp } from "react-icons/io5";
import ProductDetailsComponent from "./components/ProductDetailsComponent";
import CartPage from "./pages/CartPage";
import Verify from "./pages/Verify";
import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from "./pages/ForgotPassword";
import Checkout from "./pages/Checkout";
import MyAccount from "./pages/MyAccount";
import MyList from "./pages/MyList";
import Orders from "./pages/Orders";
import ProtectedRoute from "./components/ProtectedRoute/indes";
import ResetPassword from "./pages/ResetPassword";

export const MyContext = createContext();

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
  };

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
              <Route
                path="/my-account"
                element={
                  <ProtectedRoute>
                    <MyAccount />
                  </ProtectedRoute>
                }
              />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/verify" element={<Verify />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="my-orders" element={<Orders />} />
              <Route path="my-list" element={<MyList />} />
              <Route path="/product" element={<Products />} />
            </Route>
          </Routes>
        </MyContext.Provider>

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              background: '#333',
              color: '#fff',
              borderRadius: '8px',
              padding: '12px 16px',
            },
            success: {
              icon: '✅',
              style: {
                background: '#22c55e',
                color: 'white',
              },
            },
            error: {
              icon: '❌',
              style: {
                background: '#ef4444',
                color: 'white',
              },
            },
            loading: {
              iconTheme: {
                primary: '#0ea5e9',
                secondary: '#bae6fd',
              },
            },
          }}
        />
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
            <Button
              className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-[15px] right-[15px] !bg-[#f1f1f1]"
              onClick={handleCloseProductDetailsModal}
            >
              <IoCloseSharp className="text-[20px]" />
            </Button>
            <div className="col1 w-[40%] px-3 py-8">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] py-8 px-8 pr-16 productContent">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;