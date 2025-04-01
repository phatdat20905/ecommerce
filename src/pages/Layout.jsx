import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/client/Header';

const Layout = () => {
  return (
    <div className="layout">
      <Header />

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
