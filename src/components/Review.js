import React, { Component } from 'react'
import { Card, Button, Row } from 'react-bootstrap'
import person_1 from '../images/blog1.jpg';
import person_2 from '../images/blog2.jpg';
import person_3 from '../images/blog3.jpg';
import person_4 from '../images/blog4.jpg';
//import person_5 from '../images/blog5.jpg';

export default class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewItem: [
                {
                    id: 0,
                    img: person_1,
                    name: 'People name 1',
                    comments: 'Good comment for your institue 1'
                },
                {
                    id: 1,
                    img: person_2,
                    name: 'People name 2',
                    comments: 'Good comment for your institue 2'
                },
                {
                    id: 2,
                    img: person_3,
                    name: 'People name 3',
                    comments: 'Good comment for your institue 3'
                },
                {
                    id: 3,
                    img: person_4,
                    name: 'People name 4',
                    comments: 'Good comment for your institue 4'
                }
            ],
        };
    }



    render() {

        const allreviw = this.state.reviewItem.map((review) => {
            return (
                <Card style={{ width: '15rem' }} key={review.id} id='card_details'>
                    <Card.Img variant="top" src={review.img} alt='' />
                    <Card.Body>
                        <Card.Title>{review.name}</Card.Title>
                        <Card.Text>
                            {review.comments}
                        </Card.Text>
                        <Button variant="primary">More Details</Button>
                    </Card.Body>
                </Card>
            )
        })
        return (
            <>
                <Row className='review_all'>
                    {allreviw}
                </Row>
            </>
        )
    }
}
