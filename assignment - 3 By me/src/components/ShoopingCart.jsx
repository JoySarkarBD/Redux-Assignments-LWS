import React from 'react';
import BellingDetails from './BellingDetails';
import CartCard from './CartCard';

const ShoopingCart = () => {
    return (
    <>
         <div className="container 2xl:px-8 px-2 mx-auto">
            <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
            <div className="cartListContainer">
                <div className="space-y-6">
                {/* <!-- Cart Item --> */}
                <CartCard/>
                </div>

                {/* <!-- Bill Details --> */}
                <div>
                <BellingDetails/>
                </div>
            </div>
        </div>
    </>
    );
};

export default ShoopingCart;