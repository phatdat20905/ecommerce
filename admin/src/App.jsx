import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import React, { createContext, useState } from 'react';
import Layout from './pages/Layout';


const MyContext = createContext();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const router = createBrowserRouter([
    {
      path: '/',
      exact: true,
      element: <Layout />,
    },
  ]);

  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
  };

  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };