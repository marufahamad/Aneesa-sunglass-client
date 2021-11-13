import React, { useEffect, useState } from 'react';
import ProductsAll from '../../Shared/ProductsAll/ProductsAll';

const AllProducts = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://quiet-reef-72973.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)

    return (
        <div className="container">
            <div className="row">
                {
                    products.map(product => <ProductsAll
                        key={product._id}
                        product={product}
                    ></ProductsAll>)
                }
            </div>
        </div>
    );
};

export default AllProducts;