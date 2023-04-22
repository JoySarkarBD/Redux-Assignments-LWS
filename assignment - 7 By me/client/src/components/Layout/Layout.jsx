import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 '>
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;
