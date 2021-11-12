import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './DisplayReviews.css'



const DisplayReviews = () => {
    const [massages, setMassages] = useState([]);
    // console.log(user)

    // getting information from review API
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setMassages(data))
    }, [massages])





    return (
        <div className=" my-2 mb-5  mx-auto">
            <h2 className="text-primary "><strong>USERS REVIEW</strong></h2>

            <div className="review-massage row text-start mx-auto border-0">
                {
                    massages.map(massage => <Card key={massage._id} className="float mx-auto my-3 overflow-scroll custom-card-style border-0">
                        <Card.Body>
                            <Card.Title>{massage.userName}</Card.Title>
                            <Card.Text>
                                {massage.massage}
                            </Card.Text>
                        </Card.Body>
                    </Card>)
                }

            </div>


        </div>
    );
};

export default DisplayReviews;