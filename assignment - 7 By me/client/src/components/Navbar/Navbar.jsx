import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className='max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0'>
      <Link to='/'>
        <img src={Logo} />
      </Link>
    </nav>
  );
};

export default Navbar;
