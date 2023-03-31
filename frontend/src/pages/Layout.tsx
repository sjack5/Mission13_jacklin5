import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/*This is from the package we installed */}
    </>
  );
};

export default Layout;
