import React from 'react';
import { useSelector } from 'react-redux';
import AddProductForm from './AddProductForm';
import SingleProduct from './SingleProduct';

const Home = () => {
    const { productList } = useSelector(state => state);
    return (
        <main className="py-16">
            <div className="productWrapper">
                <div className="productContainer" id="lws-productContainer">
                    {/* product item*/}

                    {
                        productList.map(product => {
                            return <SingleProduct key={product.id} product={product} />
                        })
                    }



                </div>

                <div className="formContainer">
                    <h4 className="formTitle">Add New Product</h4>
                    <AddProductForm />
                </div>
            </div>
        </main>
    );
};

export default Home;
