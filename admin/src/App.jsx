import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import React, { createContext, useState } from 'react';
import Layout from './pages/Layout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


const MyContext = createContext();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      exact: true,
      element: <Layout />,
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
  };

  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };