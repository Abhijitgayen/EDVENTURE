import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import online_learning from '../images/online_learning.svg'
import AllCourse from './AllCourse';
import CourseStyle from './CourseStyle';

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
                <Container className='home_mid_f' >
                    <Row className='justify-content-center'>
                        <Col className='home_cb col-12 col-sm-6 col-md-3'>
                            <div className='home_card '>
                                <h1>250+</h1>
                                <p>Students </p>
                            </div>
                        </Col>
                        <Col className='home_cb col-12 col-sm-6 col-md-3'>
                            <div className='home_card'>
                                <h1>50+</h1>
                                <p>Top IITs Tutor</p>
                            </div>
                        </Col>
                        <Col className='home_cb col-12 col-sm-6 col-md-3'>
                            <div className='home_card'>
                                <h1>25+</h1>
                                <p>Course Avaliable</p>
                            </div>
                        </Col>
                        <Col className='home_cb col-12 col-sm-6 col-md-3'>
                            <div className='home_card'>
                                <h1>80%</h1>
                                <p>Better Enhanced Programs</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="home_section">
                <div className='course_details'>
                    <CourseStyle />
                </div>
                <div className='all_course'>
                    <AllCourse/>
                </div>
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



