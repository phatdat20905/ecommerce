import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/client/Header';
import Footer from '../components/client/Footer';

const Layout = () => {
  return (
    <div className="layout">
      <Header />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
