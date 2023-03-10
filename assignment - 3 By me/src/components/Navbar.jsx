import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Navbar = () => {
    const cartItems = useSelector(state => state.addToCart);

    let navQuantityOfCart = 0; // number
    for (const item of cartItems) {
        navQuantityOfCart += item.quantityOfCart;
    }
    return (
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">

                <Link to='/'>
                    <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
                </Link>

                <div className="flex gap-4">
                    <Link to="/" className="navHome" id="lws-home"> Home </Link>
                    <Link to="/cart" className="navCart" id="lws-cart">
                        <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                        <span id="lws-totalCart">{navQuantityOfCart || 0}</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;