import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import ProductsAll from '../../Shared/ProductsAll/ProductsAll';
import './HomeProducts.css'

const HomeProducts = () => {
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
                    products.slice(0, 6).map(product => <ProductsAll
                        key={products.name}
                        product={product}
                    ></ProductsAll>)
                }




            </div>
        </div>
    );
};

export default HomeProducts;