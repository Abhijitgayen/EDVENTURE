import React from 'react'
import { Col, Container, Row, Button, Accordion } from 'react-bootstrap';
import online_learning from '../images/online_learning.svg'

export default function Home() {
    return (
        <>
            <section className="home_section" id='Home'>
                <header className="home_top" id="set-for-bg">
                    <Container>
                        <Row>
                            <Col className="home_top_text col-12 col-sm-12 col-md-8 col-xl-6">
                                <h1>EMBARK ON AN ADVENTURE TO MORDERN INTERACTIVE EDUCATION</h1>
                                <p>Handcrafted at IIT , Edventure aim to impart rich Courses helping Students in academics as well as competitative Exams</p>
                                <Button variant="light" >VENTURE NOW</Button>
                            </Col >
                            <Col className="col-12 col-sm-12 col-md-6 offset-md-6 col-xl-6 offset-xl-0">
                                <img src={online_learning} alt='online_learning' id='home_img' />
                            </Col>
                        </Row>
                    </Container>
                </header>
                <Container className='home_mid_f'>
                    <Row className='justify-content-center'>
                        <Col className='home_card col-9 col-sm-4 col-md-2'>
                            <h1>250+</h1>
                            <p>Students </p>
                        </Col>
                        <Col className='home_card col-9 col-sm-4 col-md-2'>
                            <h1>50+</h1>
                            <p>Top IITs Tutor</p>
                        </Col>
                        <Col className='home_card col-9 col-sm-4 col-md-2'>
                            <h1>25+</h1>
                            <p>Course Avaliable</p>
                        </Col>
                        <Col className='home_card col-9 col-sm-4 col-md-2'>
                            <h1>80%</h1>
                            <p>Better Enhanced Programs</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="home_section">
                <Container>
                    <Row>
                        <Col>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="home_section">
                <Container>
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}



