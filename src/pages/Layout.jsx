import React from 'react';
import './Layout.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <nav>
          <h1>E-Commerce Store</h1>
          {/* Add navigation items here */}
        </nav>
      </header>
      
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
