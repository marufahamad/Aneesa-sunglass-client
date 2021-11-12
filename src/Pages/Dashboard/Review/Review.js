import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const Review = () => {
    const [massage, setMassage] = useState('');
    const { user, isLoading } = useAuth();
    const { displayName } = user;
    const history = useHistory();

    const handleOnBlur = e => {
        setMassage(e.target.value)
    }

    const handleSubmitMassage = e => {
        const uploadedData = {}
        uploadedData.userName = displayName;
        uploadedData.massage = massage;

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(uploadedData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review posted successfully')
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
                <p className=" my-0 ms-4 text-start"><small>User Name:</small></p>
                <input type="name" name="userName" value={displayName} readOnly className="form-control rounded-3 bg-white border-0 shadow-sm px-4" />
                <br />
                <textarea onBlur={handleOnBlur} style={{ height: "100px" }} placeholder="Review Massage" type="checkbox" name="massage" required className="form-control rounded-3] border-3 shadow-sm px-4" />
                <br />
                <div className="d-grid gap-2 mt-2">
                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Submit Review</button>
                </div>
            </form>
        </div>
    );
};

export default Review;