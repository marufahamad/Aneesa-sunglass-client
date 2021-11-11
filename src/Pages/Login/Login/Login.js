
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';




const Login = () => {
    const [inputData, setInputData] = useState({});
    const location = useLocation();
    const history = useHistory();



    const { loginUser, isLoading, signInWithGoogle } = useAuth();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...inputData }
        newData[field] = value;
        setInputData(newData);
    }

    const handleSubmitLogin = e => {
        loginUser(inputData.email, inputData.password, location, history);
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
                                    <h3 className="display-4">Please Login</h3>
                                    <form onSubmit={handleSubmitLogin}>
                                        <div className="mb-3">
                                            <input type="email" name="email" onBlur={handleOnBlur} placeholder="Email address" required autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" name="password" onBlur={handleOnBlur} placeholder="Password" required className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                            <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                        </div>
                                    </form>
                                    <NavLink
                                        className="text-decoration-none"
                                        to="/register">
                                        New User? Please Register
                                    </NavLink>
                                    <hr />
                                    <hr />

                                    <Button onClick={() => signInWithGoogle(location, history)} className="btn btn-primary rounded-3">Log Out </Button>

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

export default Login;