import React, { Component } from 'react'
import { Accordion, Row, Container, Col } from 'react-bootstrap'

export class AllCourse extends Component {
    render() {
        return (
            <>
                <Container className='course_container'>
                    <h2 className='co_text'> Course Adventure</h2>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Row>
                                <Col className='col-12 col-sm-12 col-md-4'>
                                    <Accordion.Header >Undergraduate Foundations</Accordion.Header>
                                </Col>
                                <Col className='co_set_1 col-12 col-sm-12 col-md-8'>
                                    <Accordion.Body className='allCo_body' >
                                        <h4>Undergraduate Engineering and Science Streams</h4>
                                        <ul>
                                            <li>
                                                Learn core technical concepts of Engineering and Science, semester wise along with your college for building strong foundations and excel in semester exams with max CGPA.
                                            </li>
                                            <li>
                                                Carefully designed course catering to different state and national boards and universities.
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Col>
                            </Row>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Row>
                                <Col className='col-12 col-sm-12 col-md-4' >
                                    <Accordion.Header >Postgraduate Foundation Program</Accordion.Header>
                                </Col>
                                <Col className='co_set_2 col-12 col-sm-12 col-md-8'>
                                    <Accordion.Body className='allCo_body'>
                                        <h4>Postgraduate Foundation Program</h4>
                                        <ul>
                                            <li>
                                                Learn core concepts of Engineering and Science to get deeper insights in research and development and the best placement opportunities.
                                            </li>
                                            <li>
                                                Carefully designed course catering to different state and national boards and universities.
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Col>
                            </Row>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Row>
                                <Col className='col-12 col-sm-12 col-md-4' >
                                    <Accordion.Header >College Final Year Projects</Accordion.Header>
                                </Col>
                                <Col className='co_set_3 col-12 col-sm-12 col-md-8'>
                                    <Accordion.Body className='allCo_body'>
                                        <h4>College Final Year Projects</h4>
                                        <ul>
                                            <li>
                                                Application based projects which help students apply theoretical knowledge to build industrial applications and research oriented tasks.
                                            </li>
                                            <li>
                                                Placement intensive projects to boost your resume.
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Col>
                            </Row>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Row>
                                <Col className='col-12 col-sm-12 col-md-4' >
                                    <Accordion.Header >Interview and Placement Preparation</Accordion.Header>
                                </Col>
                                <Col className='co_set_4 col-12 col-sm-12 col-md-8'>
                                    <Accordion.Body className='allCo_body'>
                                        {' '}
                                    </Accordion.Body>
                                </Col>
                            </Row>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Row>
                                <Col className='col-12 col-sm-12 col-md-4' >
                                    <Accordion.Header >GATE/ES</Accordion.Header>
                                </Col>
                                <Col className='co_set_5 col-12 col-sm-12 col-md-8'>
                                    <Accordion.Body className='allCo_body'>
                                        {' '}
                                    </Accordion.Body>
                                </Col>
                            </Row>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Row>
                                <Col className='col-12 col-sm-12 col-md-4' >
                                    <Accordion.Header >Computer Programming</Accordion.Header>
                                </Col>
                                <Col className='co_set_6 col-12 col-sm-12 col-md-8 '>
                                    <Accordion.Body className='allCo_body' >
                                        {' '}
                                    </Accordion.Body>
                                </Col>
                            </Row>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Row>
                                <Col className='col-12 col-sm-12 col-md-4' >
                                    <Accordion.Header >Schools</Accordion.Header>
                                </Col>
                                <Col className='co_set_6 col-12 col-sm-12 col-md-8'>
                                    <Accordion.Body className='allCo_body' >
                                        {' '}
                                    </Accordion.Body>
                                </Col>
                            </Row>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </>
        )
    }
}

export default AllCourse
