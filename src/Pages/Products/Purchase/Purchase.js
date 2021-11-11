import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { Card, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Header from '../../Shared/Header/Header';


const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [order, setOrder] = useState({})
    const { image, name, description, price } = product;
    const { user, isLoading } = useAuth();
    const { displayName, email } = user;
    const history = useHistory();


    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const inputData = { ...order };
        inputData[field] = value;
        setOrder(inputData)
    }


    const handleOrderSubmit = e => {
        const fullOrder = { ...order, ProductName: name, price, email, userName: displayName };
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(fullOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order posted successfully')
                    history.replace('/')
                }
            })



        e.preventDefault();
    }

    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }

    return (
        <div className="bg-white" >
            <Header></Header>
            <div className="row m-0">
                <div className="col-md-6 d-md-flex p-0">
                    <Card className="mx-auto border-0" style={{ width: "375px" }}>
                        <Card.Title>{name}</Card.Title>
                        <Card.Img style={{ width: "100%" }} className=" mx-auto" variant="top" src={image} />
                        <Card.Body>

                            <Card.Text>
                                Price: BDT {price}
                            </Card.Text>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <h3 className="display-6">Your Information</h3>
                                    <form onSubmit={handleOrderSubmit}>
                                        <input type="text" name="userName" value={displayName} required readOnly autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        <br />
                                        <input type="email" name="email" value={email} required readOnly autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        <br />
                                        <input onBlur={handleOnBlur} type="number" name="mobile" placeholder="Mobile Number" required autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        <br />
                                        <textarea onBlur={handleOnBlur} type="checkbox" name="address" placeholder="Address" required autofocus="" className="form-control rounded-3] border-0 shadow-sm px-4" />
                                        <br />
                                        <br />
                                        <div className="d-grid gap-2 mt-2">
                                            <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Place Order</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Purchase;