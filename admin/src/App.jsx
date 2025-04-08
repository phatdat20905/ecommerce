import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import React, { createContext, useState } from 'react';
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

const MyContext = createContext();

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [isShowFullScreenPanel, setIsShowFullScreenPanel] = useState({
    open: false,
    model: ''
  });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AdminLayout />,
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
  ]);

  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isLogin,
    setIsLogin,
    isShowFullScreenPanel,
    setIsShowFullScreenPanel
  };

  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />

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
  );
}

export default App;
export { MyContext };