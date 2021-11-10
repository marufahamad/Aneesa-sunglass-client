import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
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
                    products.slice(0, 6).map(product =>
                        <div key={product.name} className="card-wrapper col-lg-4 col-md-6 col-xs-12">
                            <div className="card">
                                <div className="card-img-wrapper">
                                    <img className="card-img-top" src="https://i.ibb.co/GM1s9jC/001.jpg" alt="" />
                                </div>
                                <div className="card-body">
                                    <div className="card-title">
                                        <h5>{product.name}</h5>
                                        <p className="card-text my-4">{product.description}</p>
                                        <p className="card-text">Price: </p>
                                    </div>

                                    <div className="card-content">

                                        <Button className=" btn btn-primary">Buy Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }




            </div>
        </div>
    );
};

export default HomeProducts;