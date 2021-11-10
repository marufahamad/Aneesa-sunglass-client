import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [inputData, setInputData] = useState({});
    const history = useHistory();

    const { registerUser, isLoading } = useAuth();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...inputData }
        newData[field] = value;
        setInputData(newData)
        // console.log(newData)
    }

    const handleSubmission = e => {
        registerUser(inputData.email, inputData.password, inputData.name, history);
        e.preventDefault();
    }

    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }

    return (
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="col-md-6 bg-light border ">
                    <div className="login d-flex align-items-center py-5">

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <h3 className="display-4">Please Register</h3>
                                    <form onSubmit={handleSubmission}>
                                        <div className="mb-3">
                                            <input type="text" name="name" onBlur={handleOnBlur} placeholder="Full Name" className="form-control rounded-pill border-0 shadow-sm px-4" required />
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" name="email" onBlur={handleOnBlur} placeholder="Email address" className="form-control rounded-pill border-0 shadow-sm px-4" required />
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" name="password" pattern=".{6,}" onBlur={handleOnBlur} placeholder="Password with 6 character" required className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                            <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Register</button>
                                        </div>
                                        <NavLink
                                            className="text-decoration-none"
                                            to="/login">
                                            Already Register? Please Login
                                        </NavLink>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-flex p-0">
                    <img width="100%" height="auto" src="https://i.ibb.co/2KTGp6j/Beautiful-young-cheerful-girl-wearing-glasses-rest-on-beach-at-morning.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;