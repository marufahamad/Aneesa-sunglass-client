import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductsAll = ({ product }) => {
    const { image, name, description, price, _id } = product;
    return (
        <Col className="card-wrapper col-lg-4 col-md-6 col-xs-12">
            <Card className="card-home">
                <div className="card-img-wrapper">
                    <Card.Img className="card-img-top" src={image} alt="" />
                </div>
                <div className="card-home-body">
                    <div className="card-title">
                        <h5>{name}</h5>
                        <p className="card-text my-4">{description}</p>
                        <p className="card-text">Price: BDT {price}</p>
                    </div>

                    <div className="card-content">

                        <Card.Link as={Link} to={`/purchase/${_id}`}><button className="btn btn-primary">Buy Now</button></Card.Link>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default ProductsAll;