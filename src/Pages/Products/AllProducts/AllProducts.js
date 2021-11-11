import React, { useEffect, useState } from 'react';
import ProductsAll from '../../Shared/ProductsAll/ProductsAll';

const AllProducts = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('glasses.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <div className="container mt-5">
            <div className="row">
                {
                    products.map(product => <ProductsAll
                        key={products.name}
                        product={product}
                    ></ProductsAll>)
                }




            </div>
        </div>
    );
};

export default AllProducts;