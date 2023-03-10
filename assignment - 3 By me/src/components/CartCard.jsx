import React from 'react';
import { useSelector } from 'react-redux';
import SingleCart from './SingleCart';

const CartCard = () => {
    const cartItems = useSelector(state => state.addToCart)

    return (
        <>
            {
                cartItems.map(item => <SingleCart key={item.id} item={item} />)
            }
        </>
    );
};

export default CartCard;