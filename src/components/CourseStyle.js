import React from 'react'
import { Accordion, Container, Row, Col } from 'react-bootstrap'

export default function CourseStyle(set) {

    return (
        <>
            <Container className='course_all'>
                <h1>What's Your goal ?</h1>
                <Row>
                    <Accordion defaultActiveKey="0" className=' col-12 col-sm-12 col-md-4' flush >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header
                            onClick={() => {
                                var y = document.getElementById('set_2');
                                if (y.style.display === 'block') {
                                    y.style.display = "none";
                                }
                                var x = document.getElementById('set_1');
                                if (x.style.display === 'none') {
                                    x.style.display = "block";
                                } else {
                                    x.style.display = "none";
                                }
                            }}>Build a career</Accordion.Header>
                            <Accordion.Body>
                                Career Paths are our most complete offering, with everything you need to land the job.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header 
                               onClick={() => {
                                var x = document.getElementById('set_1');
                                if (x.style.display === 'block') {
                                    x.style.display = "none";
                                }
                                var y = document.getElementById('set_2');
                                if (y.style.display === 'none') {
                                    y.style.display = "block";
                                } else {
                                    y.style.display = "none";
                                }
                            }}>Gain a Skill</Accordion.Header>
                            <Accordion.Body>
                                 Skill paths focus on what's needed to pick up a specific,applicable shill.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Col className='col-12 col-sm-12 col-md-8' id='set_1' style={{ display: 'block' }} >
                        <Row>
                            <Col className='col-12 col-sm-6'>
                                <div className="course_card">
                                    <h5>Front-End Engineer</h5>
                                    <p>Beginner Frindly, 121 Lessons</p>
                                    <p className='co_about'>Job Essentials</p>
                                </div>
                            </Col>
                            <Col className='col-12 col-sm-6'>
                                <div className="course_card ">
                                    <h5>Computer Science</h5>
                                    <p>Beginner Frindly, 83 Lessons</p>
                                    <p className='co_about'>Foundations</p>
                                </div>
                            </Col>
                            <Col className='col-12 col-sm-6'>

                                <div className="course_card">
                                    <h5>Full-Stack Engineer</h5>
                                    <p>Beginner Frindly, 145 Lessons</p>
                                    <p className='co_about'>Job Essentials</p>
                                </div>
                            </Col>
                            <Col className='col-12 col-sm-6'>

                                <div className="course_card">
                                    <h5>Front-End Engineer</h5>
                                    <p>Beginner Frindly, 121 Lessons</p>
                                    <p className='co_about'>Job Essentials</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='col-12 col-sm-6 col-md-8' id='set_2' style={{ display: 'none' }}>
                        <Row>
                            <Col className='col-12 col-sm-6'>
                                <div className="course_card">
                                    <h5>Build a Website with HTML, CSS, and Github Pages</h5>
                                    <p>Beginner Frindly, 18 Lessons</p>
                                    <p className='co_about'>With Final Project</p>
                                </div>
                            </Col>
                            <Col className='col-12 col-sm-6'>
                                <div className="course_card">
                                    <h5>Analyze Data With SQL</h5>
                                    <p>Beginner Frindly, 15 Lessons</p>
                                    <p className='co_about'>With Final Project</p>
                                </div>
                            </Col>
                            <Col className='col-12 col-sm-6'>
                                <div className="course_card">
                                    <h5>Code Foundations</h5>
                                    <p>Beginner Frindly, 15 Lessons</p>
                                    <p className='co_about'>Welcome Series</p>
                                </div>
                            </Col>
                            <Col className='col-12 col-sm-6'>
                                <div className="course_card">
                                    <h5>Website Using React</h5>
                                    <p>Beginner Frindly, 21 Lessons</p>
                                    <p className='co_about'>With Final Project</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
