import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Footer.css'

const Footer = () => {
    const { user } = useAuth();

    return (
        <footer id="footer" className="footer-1">
            <div className="main-footer widgets-dark typo-light">
                <div className="container">
                    <div className="row">

                        <div className="col-xs-12 col-sm-12 col-md-4">
                            <div className="widget subscribe no-box">
                                <h5 className="widget-title text-warning"><strong>Aneesa Sunglasses</strong><span></span></h5>
                                <p>Sunglasses are simple yet an essential item to own. If you are also a staunch fan of sunglasses, keep up the vibe and dive in. Read along to find some of the best sunglasses quotes for you here.</p>
                            </div>
                        </div>



                        <div className="col-xs-12 col-sm-12 col-md-4">
                            <div className="widget no-box">
                                <h5 className="widget-title text-warning">Have a Sunglass?<span></span></h5>
                                <p className="mx-5">Always have sunglasses with you. They’re great for when you can’t be bothered to put make-up on.</p>
                                <Nav.Link className="nav-link text-white" as={Link} to="/home"><i className="fas fa-home"></i> Home</Nav.Link>
                                {
                                    user?.email ? [] : <Nav.Link className="nav-link text-white" as={Link} to="/login">Login <i className="fas fa-sign-in-alt"></i></Nav.Link>
                                }
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-4">

                            <div className="widget no-box">
                                <h5 className="widget-title text-warning">Contact Us<span></span></h5>

                                <p><a className="text-white" href="info@aneesaglass.com" title="glorythemes">info@aneesaglass.com</a></p>
                                <ul className="social-footer2">
                                    <li className=""><a href="https://twitter.com/"><i className="fab fa-twitter m-2"></i></a></li>
                                    <li className=""><a href="https://www.facebook.com/"><i className="fab fa-facebook m-2"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p><small> <i className="far fa-copyright"></i> Copyright Act 2020-2022 applicable</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;


