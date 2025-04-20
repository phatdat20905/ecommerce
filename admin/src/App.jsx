import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './App.css';
import React, { createContext, useState, useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './store';
import AdminLayout from './pages/AdminLayout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/Products/addProduct';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoMdClose } from "react-icons/io";
import Slide from '@mui/material/Slide';
import HomeSliderBanners from './pages/HomeSliderBanners';
import AddHomeSlider from './pages/HomeSliderBanners/addHomeSlide';
import CategoryList from './pages/Category';
import AddCategory from './pages/Category/addCategory';
import SubCategoryList from './pages/Category/subCatList';
import AddSubCategory from './pages/Category/addSubCategory';
import Users from './pages/Users';
import Orders from './pages/Orders';
import ForgotPassword from './pages/ForgotPassword';
import VerifyAccount from './pages/VerifyAccount';
import ChangePassword from './pages/ChangePassword';
import { Toaster } from 'react-hot-toast';

const MyContext = createContext();

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, accessToken } = useSelector((state) => state.auth);

  if (!accessToken || !user || user.role_id !== 1) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isShowFullScreenPanel, setIsShowFullScreenPanel] = useState({
    open: false,
    model: ''
  });

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Dashboard /> },
        { path: "products", element: <Products /> },
        { path: "homeSlider/list", element: <HomeSliderBanners /> },
        { path: "category/list", element: <CategoryList /> },
        { path: "subCategory/list", element: <SubCategoryList /> },
        { path: "users", element: <Users /> },
        { path: "orders", element: <Orders /> },
      ]
    },
    {
      path: '/login',
      exact: true,
      element: <Login />,
    },
    {
      path: '/sign-up',
      exact: true,
      element: <SignUp />,
    },
    {
      path: '/forgot-password',
      exact: true,
      element: <ForgotPassword />,
    },
    {
      path: '/verify-account',
      exact: true,
      element: <VerifyAccount />,
    },
    {
      path: '/change-password',
      exact: true,
      element: <ChangePassword />,
    },
  ]);

  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isShowFullScreenPanel,
    setIsShowFullScreenPanel
  };

  return (
    <Provider store={store}>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />

        {/* Thêm Toaster để hiển thị thông báo */}
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

        <Dialog
          fullScreen
          open={isShowFullScreenPanel.open}
          onClose={() => setIsShowFullScreenPanel({
            open: false
          })}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setIsShowFullScreenPanel({
                  open: false
                })}
                aria-label="close"
              >
                <IoMdClose className='text-gray-800' />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div"
                className='text-gray-800'
              >
                {isShowFullScreenPanel?.model}
              </Typography>
            </Toolbar>
          </AppBar>
          {
            isShowFullScreenPanel?.model === "Add Product" && <AddProduct />
          }
          {
            isShowFullScreenPanel?.model === "Add Home Slide" && <AddHomeSlider />
          }
          {
            isShowFullScreenPanel?.model === "Add New Category" && <AddCategory />
          }
          {
            isShowFullScreenPanel?.model === "Add New Sub Category" && <AddSubCategory />
          }
        </Dialog>
      </MyContext.Provider>
    </Provider>
  );
}

export default App;
export { MyContext };