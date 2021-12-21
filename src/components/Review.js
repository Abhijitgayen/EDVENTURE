import React, { Component } from 'react'
import { Card, Row ,Col} from 'react-bootstrap'
import person_1 from '../images/blog1.jpg';
import person_2 from '../images/blog2.jpg';

export default class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewItem: [
                {
                    id: 0,
                    img: person_1,
                    name: 'Reema Bajaj',
                    des:'Aditeya\'s mom - Grade 1',
                    comments: '“For over last 3 years, the experience with Cuemath & the teacher has been great! I’m happy to see the logical development in my child. ”'
                },
                {
                    id: 1,
                    img: person_2,
                    name: 'Richa Shah',
                    des:'Samrydhi \'s mom - Grade 3',

                    comments: '“Cuemath has significantly improved my kids \' abilities to calculate mentally. The program is age-appropriate and yet challenging for them ”'
                }
            ],
        };
    }



    render() {

        const allreviw = this.state.reviewItem.map((review) => {
            return (
                <Card style={{ width: '17rem' }} key={review.id} id='card_set_details'>
                    <Card.Body>
                        <Card.Text>
                            {review.comments}
                        </Card.Text>
                    </Card.Body>
                    <Row>

                        <Col className='col-2'>
                            <Card.Img id='card_img' src={review.img} alt='' />
                        </Col>
                        <Col className='col-10 align-item-center'>
                        <h5>{review.name}</h5>
                        <p>{review.des}</p>
                        </Col>
                    </Row>
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
