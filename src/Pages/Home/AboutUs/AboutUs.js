import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="about-us">


            <Row className=" mx-0">
                <Col sm={3} md={5} className="p-0">

                </Col>
                <Col className="pt-3 text-white px-0" sm={9} md={7}>
                    <h2 >About Us</h2>
                    <p>Hot sunglass trends change year-to-year, but mostly always come back in style. <strong>Aneesa</strong> have gone from aviators, to cat-eye, to round, to oversized, and now tiny sunglasses are all the rage. Celebrities and fashion magazines always have the say on what's hot and what's not. It's important to note that not all styles fit your face. It's always best to go in to a retail store and try on new styles before buying.</p>

                    <Row className=" mx-0">
                        <Col sm={12} md={6} className='mt-5 px-0'>
                            <h4>Why Us?</h4>
                            <ul className=" mt-3" style={{ "list-style-type": "none" }}>
                                <li>Hight quality Sunglasses</li>
                                <li>Low Price</li>
                                <li>Better Service</li>
                                <li>Quick Delivery</li>
                            </ul>
                        </Col>
                        <Col sm={12} md={6} className='mt-5 px-0'>
                            <h4 >Our Address</h4>
                            <p className="my-0 mt-4">House # 250,</p>
                            <p className="my-0">Road # 96</p>
                            <p className="my-0">Sector - 19, Uttara</p>
                            <p className="my-0">Dhaka - 1230, Bangladesh</p>
                            <p className="mt-2"><i class="fas fa-phone-alt"></i> : +880 1855 655 330</p>

                        </Col>
                    </Row>
                    <h5 className="text-warning">Job Opportunity</h5>
                    <p>Correctly Unavailable</p>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUs;