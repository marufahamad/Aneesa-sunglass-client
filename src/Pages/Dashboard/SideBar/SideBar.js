import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './SideBar.css';



const SideBar = ({ url }) => {
    const { logOut, admin } = useAuth();
    const history = useHistory();


    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className="dashboard_sidebar text-start" >
                            <div className="head_center">
                            </div>
                            <ul className="nav_list list-unstyled mt-3 ">
                                {
                                    admin ? [] :
                                        <>
                                            <li>
                                                <Link className="li-link" to={`${url}/myOrders`}>
                                                    <i className="fas fa-th-large"></i>
                                                    <span className="links_name">My Orders</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="li-link" to={`${url}/payNow`}>
                                                    <i className="fab fa-amazon-pay"></i>
                                                    <span className="links_name">Pay Now</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="li-link" to={`${url}/review`}>
                                                    <i className="fas fa-comments"></i>
                                                    <span className="links_name">Review</span>
                                                </Link>
                                            </li>
                                        </>
                                }
                                {
                                    admin ? <>
                                        <li>
                                            <Link className="li-link" to={`${url}/allOrders`}>
                                                <i className="fas fa-wallet"></i>
                                                <span className="links_name">All orders</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="li-link" to={`${url}/addProduct`}>
                                                <i className="fas fa-cart-plus"></i>
                                                <span className="links_name">Add A Product</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="li-link" to={`${url}/makeAdmin`}>
                                                <i className="fas fa-user-cog"></i>
                                                <span className="links_name">Make An Admin</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="li-link" to={`${url}/manageProducts`}>
                                                <i className="fas fa-fist-raised"></i>
                                                <span className="links_name">Manage Products</span>
                                            </Link>
                                        </li>
                                    </> : []
                                }
                            </ul>
                            <div className="logout_content">
                                <div className="log-out">


                                    <button onClick={() => logOut(history)} className="btn btn-light"><i className="fas fa-sign-out-alt"></i>Log Out</button>

                                    {/* <span className="tooltip">My Orders</span> */}
                                </div>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default SideBar;


// style={{ backgroundColor: '' }}