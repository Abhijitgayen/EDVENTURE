import React from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap';
import online_learning from '../images/online_learning.svg'

export default function Home() {
    return (
             <>
                <section className="home_section">
                    <header className="home_top" id="set-for-bg">
                        <Container>
                            <Row>
                                <Col className="col-12 col-sm-6 col-md-6">
                                    <h1>EMBARK ON AN ADVENTURE TO MORDERN INTERACTIVE EDUCATION</h1>
                                    <p>Handcrafted at IIT , Edventure aim to impart rich Courses helping Students in academics as well as competitative Exams</p>
                                    <Button variant="light" >VENTURE NOW</Button>
                                </Col >
                                <Col className="col-12 col-sm-6 col-md-6">
                                    <img src={online_learning} alt='online_learning' id='home_img' />
                                </Col>

                            </Row>
                        </Container>
                    </header>
                    <Container>
                        <Row>
                            <Col>
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


 
