import React from 'react'
import { Button, Accordion, Col, Container, Form, Row } from 'react-bootstrap'
import online_video from '../images/online_video.svg'

function DemoClass() {
    return (
        <>
            <Container>
                <Row>
                    <Col className='demo_text col-12 col-sm-12 col-md-5 col-xl-6'>
                        <Row className='demp_det'>
                            <Col className='col-4 '>
                                <img src={online_video} alt='' className='demo_img'/>
                                <p>Live 1:1 session from The best tutors</p>
                            </Col>
                            <Col className='col-4'>
                                <img src={online_video} alt='' className='demo_img'/>
                                <p>Interactive Learning With visualizations and Assessments</p>
                            </Col>
                            <Col className='col-4'>
                                <img src={online_video} alt='' className='demo_img'/>
                                <p>Most affordable Price</p>
                            </Col>
                        </Row>
                        <Accordion defaultActiveKey="0" flush style={{ background: 'yellow' }} >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><h6>Personalized learning and Mentorship </h6></Accordion.Header>
                                <Accordion.Body>
                                    Edventure offers intensive online courses catering to students’ requirements and calibre. We aim to provide tailor made courses as well as mentorship to nurture young talents.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><h6>Unparalleled Doubt Clearing and Evaluation </h6></Accordion.Header>
                                <Accordion.Body>
                                    We offer separate doubt clearing sessions for every module through 1:1 interaction and learning communities. Continuous assessments with performance evaluation and feedbacks brings the best out of students.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><h6>The Best Lecture Notes and Study Materials</h6></Accordion.Header>
                                <Accordion.Body>
                                    Our classroom program is supported with the best study materials and notes which enhances the practicality and understanding of the subject.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><h6>Motivation Sessions with IITians</h6></Accordion.Header>
                                <Accordion.Body>
                                    We host periodic motivation sessions with fellow IITians about college life and job prospects for our students to gear up for GATE like competitive exams and get selected in top tier colleges.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header><h6>Most Affordable Courses</h6></Accordion.Header>
                                <Accordion.Body>
                                    Our courses are priced aggressively with attractive referral programs to ensure one’s career path does not get hindered by finance.
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>

                    </Col>
                    <Col className=' demo_from col-11 col-sm-11 col-md-7 col-xl-6'>
                        <h4>Book your free demo class</h4>
                        <Row className='align-item-center'>
                            <Col className='col-4 col-sm-4' >
                                <img src={online_video} alt='none' className='online_video' />
                            </Col>
                            <Col className='col-8 col-sm-7 '>
                                <ul>
                                    <li>1-Hour LIVE SESSION with our Expert Tutor</li>
                                    <li>Visual Curriculum aligned To CBSE and ICSE</li>
                                </ul>
                            </Col>
                        </Row>
                        <Form>
                            <div className='demo_input'>
                                <label className='offset-sm-1'>Name</label>
                                <input type='text' className='col-12 offset-sm-1 col-sm-10' placeholder='Enter Your Name' />
                            </div>
                            <div className='demo_input'>
                                <label className='offset-sm-1'>Email ID</label>
                                <input type="email" className='col-12 offset-sm-1 col-sm-10' placeholder='Enter your email id' />
                            </div>
                            <div className='demo_input'>
                                <label className='offset-sm-1'>Mob. No</label>
                                <input type='number' className='col-12 offset-sm-1 col-sm-10' placeholder='Enter your Mobile number' />
                            </div>
                            <div className='demo_input offset-sm-1'><input type='checkbox'></input> Get important updates on WhatsApp</div>
                            <Button variant='outline-warning ' id='demo_btn' size='md' className='col-5 offset-7 offset-sm-6 offset-md-1 ' >Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DemoClass
