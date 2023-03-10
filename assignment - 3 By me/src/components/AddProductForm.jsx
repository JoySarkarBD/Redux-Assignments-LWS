import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addProduct } from '../redux/addProduct/actions';

const AddProductForm = () => {

    const [productInfo, setProductInfo] = useState({
        id: null,
        name: "",
        category: "",
        imgUrl: "",
        price: 0,
        quantity: 0,
        quantityOfCart: 0,
    })

    const dispatch = useDispatch();

    const { name, category, imgUrl, price, quantity } = productInfo;

    const handleInput = (e) => {
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }


    const formHanlder = (e) => {
        e.preventDefault();
        dispatch(addProduct({ ...productInfo, id: v4(), }));
        reset();
    }

    const reset = () => {
        setProductInfo({
            id: "",
            name: "",
            category: "",
            imgUrl: "",
            price: "",
            quantity: "",
            quantityOfCart: "",
        })
    }

    return (
        <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={formHanlder}>
            {/* <!-- product name --> */}
            <div className="space-y-2">
                <label htmlFor="lws-inputName">Product Name</label>
                <input className="addProductInput" id="lws-inputName" type="text" name='name' value={name} onChange={handleInput} required />
            </div>
            {/* <!-- product category --> */}
            <div className="space-y-2">
                <label htmlFor="lws-inputCategory">Category</label>
                <input className="addProductInput" id="lws-inputCategory" type="text" name='category' value={category} onChange={handleInput} required />
            </div>
            {/* <!-- product image url --> */}
            <div className="space-y-2">
                <label htmlFor="lws-inputImage">Image Url</label>
                <input className="addProductInput" id="lws-inputImage" type="text" name='imgUrl' placeholder='https://i.dummyjson.com/data/products/59/thumbnail.jpg' value={imgUrl} onChange={handleInput} required />
                <small>imgUrl:https://i.dummyjson.com/data/products/59/thumbnail.jpg</small>
            </div>
            {/* <!-- price & quantity container --> */}
            <div className="grid grid-cols-2 gap-8 pb-4">
                {/* <!-- price --> */}
                <div className="space-y-2">
                    <label htmlFor="ws-inputPrice">Price</label>
                    <input className="addProductInput" type="number" id="lws-inputPrice" name='price' value={price} onChange={handleInput} required />
                </div>
                {/* <!-- quantity --> */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputQuantity">Quantity</label>
                    <input className="addProductInput" type="number" id="lws-inputQuantity" name='quantity' value={quantity} onChange={handleInput} required />
                </div>
            </div>
            {/* <!-- submit button --> */}
            <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;