import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './DisplayReviews.css'



const DisplayReviews = () => {
    const [massages, setMassages] = useState([]);
    // console.log(user)

    // getting information from review API
    useEffect(() => {
        fetch('https://quiet-reef-72973.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setMassages(data))
    }, [])


    const array = number => {
        let array = Array.from({ length: number }, (v, i) => <i class="fas fa-star"></i>)
        return array;
    }

    const array2 = number => {
        let array = Array.from({ length: number }, (v, i) => <i class="far fa-star"></i>)
        return array;
    }




    return (
        <div className=" my-2 mb-5  mx-auto">
            <h2 className="text-primary "><strong>USERS REVIEW</strong></h2>

            <div className="review-massage row text-start mx-auto border-0">
                {
                    massages.map(massage => <Card key={massage._id} className="float mx-auto my-3 overflow-scroll custom-card-style border-0">
                        <Card.Body>
                            <Card.Title>{massage.userName}</Card.Title>
                            <Card.Text>
                                Rating = {array(massage?.rating)}{array2(5 - massage?.rating)}
                            </Card.Text>
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