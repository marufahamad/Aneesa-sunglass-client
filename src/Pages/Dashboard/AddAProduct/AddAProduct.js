import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AddAProduct = () => {
    const [product, setProduct] = useState('');
    const { user, isLoading } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...product }
        newData[field] = value;
        setProduct(newData);
    }

    const handleSubmitMassage = e => {
        console.log(product)


        fetch('https://quiet-reef-72973.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New Product Added successfully')
                    history.replace('/dashboard')
                }
            })

        e.preventDefault();
    }


    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }


    return (
        <div className="container mt-2">
            <h3 className="">What's in your mind?</h3>
            <form className="mx-5" onSubmit={handleSubmitMassage}>
                <p className=" my-0 ms-4 text-start"><small>Product Name:</small></p>
                <input type="text" name="name" onBlur={handleOnBlur} placeholder="Provide Product name" className="form-control rounded-3 bg-white border-0 shadow-sm px-4" />
                <br />
                <p className=" my-0 ms-4 text-start"><small>Product Price:</small></p>
                <input type="number" name="price" onBlur={handleOnBlur} placeholder="Provide Product name" className="form-control rounded-3 bg-white border-0 shadow-sm px-4" />
                <br />
                <p className=" my-0 ms-4 text-start"><small>Product Image URL:</small></p>
                <input type="text" name="image" onBlur={handleOnBlur} placeholder="Provide Product name" className="form-control rounded-3 bg-white border-0 shadow-sm px-4" />
                <br />
                <textarea onBlur={handleOnBlur} style={{ height: "100px" }} placeholder="Provide Product Description" type="checkbox" name="description" required className="form-control rounded-3] border-3 shadow-sm px-4" />
                <br />
                <div className="d-grid gap-2 mt-2">
                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Submit Review</button>
                </div>
            </form>
        </div>
    );
};

export default AddAProduct;