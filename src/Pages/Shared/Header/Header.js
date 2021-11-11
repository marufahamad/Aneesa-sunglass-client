import React from 'react';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {

    const { user, logOut } = useAuth();
    const history = useHistory();

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="navbar-style" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand className="text-warning"><strong>Aneesa Sunglasses</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="nav-link" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="nav-link" as={Link} to="/products">All Products</Nav.Link>
                            {
                                user?.email ?
                                    <Nav>
                                        <Nav.Link className="nav-link" as={Link} to="/dashboard">Dashboard</Nav.Link>
                                    </Nav> : []
                            }
                        </Nav>
                        <Nav>
                            {user?.email ? <Nav.Link > <samp>{user.displayName}</samp> <Button onClick={() => logOut(history)} variant="light">Log Out </Button> </Nav.Link> :
                                <Nav>
                                    <Nav.Link as={Link} to="/login">Login </Nav.Link>
                                </Nav>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;