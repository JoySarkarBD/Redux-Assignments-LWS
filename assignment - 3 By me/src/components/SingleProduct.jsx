import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './../redux/cart/actions';
const SingleProduct = ({ product }) => {
  const { id, name, category, imgUrl, price, quantity } = product;

  const cartItems = useSelector(state => state.addToCart);
  const products = useSelector(state => state.productList);
  const dispatch = useDispatch();

  function addToCartHandle(id) {

    const selectedProduct = products.find(product => product.id === id);

    dispatch(addToCart(selectedProduct))

  }
  const updatedQuantity = quantity - (cartItems.find(item => item.id === id)?.quantityOfCart || 0)
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={imgUrl} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{name}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
          <p className="productQuantity">QTY <span className="lws-quantity">{updatedQuantity}</span></p>
        </div>
        <button className="lws-btnAddToCart" disabled={updatedQuantity <= 0 ? true : false} onClick={() => addToCartHandle(id)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;