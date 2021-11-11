import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductsAll = ({ product }) => {
    return (
        <Col className="card-wrapper col-lg-4 col-md-6 col-xs-12">
            <Card className="card">
                <div className="card-img-wrapper">
                    <Card.Img className="card-img-top" src={product.image} alt="" />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h5>{product.name}</h5>
                        <p className="card-text my-4">{product.description}</p>
                        <p className="card-text">Price: BDT {product.price}</p>
                    </div>

                    <div className="card-content">

                        <Card.Link as={Link} to={`/purchase/${product.name}`}><button className="btn btn-primary">Buy Now</button></Card.Link>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default ProductsAll;