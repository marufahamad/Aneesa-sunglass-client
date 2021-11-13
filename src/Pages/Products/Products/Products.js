import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AllProducts from '../AllProducts/AllProducts';

const Products = () => {
    return (
        <div>
            <Header></Header>
            <h2 className="text-primary">ALL PRODUCTS</h2>
            <AllProducts></AllProducts>
            <Footer></Footer>
        </div>
    );
};

export default Products;