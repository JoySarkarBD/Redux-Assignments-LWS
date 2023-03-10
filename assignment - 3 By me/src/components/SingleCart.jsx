import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementQuantity, removeFromCart } from '../redux/cart/actions';

const SingleCart = ({ item }) => {
    const cartItems = useSelector(state => state.addToCart);
    const { name, imgUrl, category, price, quantity, quantityOfCart, id } = item;
    const dispatch = useDispatch();

    const removeCartItemHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    // Icrement cart item
    const handleIncrementItem = (id) => {
        const selectedProduct = cartItems.find(product => product.id === id);
        dispatch(addToCart(selectedProduct))
    }

    //decrement cart item
    const handleDecrementItem = (id) => {
        dispatch(decrementQuantity(id));
    };

    return (
        <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">
                {/* <!-- cart image --> */}
                <img className="lws-cartImage" src={imgUrl} alt="product" />
                {/* <!-- cart item info --> */}
                <div className="space-y-2">
                    <h4 className="lws-cartName">{name}</h4>
                    <p className="lws-cartCategory">{category}</p>
                    <p>BDT <span className="lws-cartPrice">{price}</span></p>
                </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                {/* <!-- amount buttons --> */}
                <div className="flex items-center space-x-4">
                    <button className="lws-incrementQuantity" onClick={() => handleIncrementItem(id)} disabled={Math.abs(quantity) <= quantityOfCart}>
                        <i className="text-lg fa-solid fa-plus"></i>
                    </button>
                    <span className="lws-cartQuantity">{quantityOfCart}</span>
                    <button className="lws-decrementQuantity" onClick={() => handleDecrementItem(id)} disabled={!quantityOfCart}>
                        <i className="text-lg fa-solid fa-minus"></i>
                    </button>
                </div>
                {/* <!-- price --> */}
                <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{price * quantityOfCart}</span></p>
            </div>
            {/* <!-- delete button --> */}
            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button onClick={() => removeCartItemHandler(id)} className="lws-removeFromCart">
                    <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default SingleCart;