import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import online_video from '../images/online_video.svg'

function DemoClass() {
    return (
        <>
            <Container>
                <Row>
                    <Col className='demo_text col-12 col-sm-12 col-md-6'>

                    </Col>
                    <Col className=' demo_from col-12 col-sm-12 col-md-6 '>
                    <Row className='align-item-center'>
                        <Col className='col-7 col-sm-7 '>
                    <p>Book a FREE Sesion For You</p>
                    <ul>
                        <li>1-Hour LIVE SESSION with our Expert Tutor</li>
                        <li>Visual Curriculum aligned To CBSE and ICSE</li>
                    </ul>
                        </Col>
                        <Col className='col-5 col-sm-5' >
                    <img src={online_video} alt='none' className='online_video'/>
                        </Col>
                    </Row>
                    <Form>
                        <div className='demo_input'>
                        <input type='text' className='col-12 offset-sm-1 col-sm-10' placeholder='Enter Your Name'/>
                        </div>
                        <div className='demo_input'>
                        <input type="email" className='col-12 offset-sm-1 col-sm-10' placeholder='Enter your email id'/>
                        </div>
                        <div className='demo_input'>
                        <input type='number' className='col-12 offset-sm-1 col-sm-10' placeholder='Enter your Mobile number'/>
                        </div>
                        <div className='demo_input'><input type='checkbox'></input> Get important updates on WhatsApp</div>
                        <Button variant='outline-warning ' id='demo_btn' size='md' className='col-6 offset-6 offset-md-1 ' >Submit</Button> 
                    </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DemoClass
