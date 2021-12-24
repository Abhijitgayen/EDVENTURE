import React, { Component } from 'react'
import { Accordion, Row, Container, Col } from 'react-bootstrap'

export class AllCourse extends Component {
    render() {
        return (
            <>
                <Container className='course_container'>
                    <h4 className='section_heading'> Course Adventure</h4>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Row>
                                <Col className='col-12 col-sm-12 col-md-4'>
                                    <Accordion.Header >Undergraduate Foundations</Accordion.Header>
                                </Col>
                                <Col className='co_set_1 col-12 col-sm-12 col-md-8'>
                                    <Accordion.Body className='allCo_body' >
                                        <ul>
                                            <h4>Undergraduate Engineering and Science Streams</h4>
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
                                        <ul>
                                            <h4>Postgraduate Foundation Program</h4>
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
                                        <ul>
                                            <h4>College Final Year Projects</h4>
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
                                        <ul>
                                            <h4>Interview and Placement Preparation</h4>
                                            <li>
                                                The best in class company specific interview and placement preparation to help aspiring students and professionals crack the selection criteria of top product and service-based companies.
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Col>
                            </Row>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Row>
                                <Col className='col-12 col-sm-12 col-md-4' >
                                    <Accordion.Header >GATE/ES/JAM</Accordion.Header>
                                </Col>
                                <Col className='co_set_5 col-12 col-sm-12 col-md-8'>
                                    <Accordion.Body className='allCo_body'>
                                        <ul>
                                            <h4>GATE / ES / JAM</h4>
                                            <li>
                                                One stop solution to ace GATE / ESE and other PSU examinations by mastering the technical foundations through an intensive course taught by the top graduates from IIT, NIT and other prestigious colleges.
                                            </li>
                                            <li>
                                                Our tutors go through continuous assessment and regular updating about the current patterns of competitive exams.
                                            </li>
                                        </ul>
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
                                        <ul>
                                            <h4>Computer Programming</h4>
                                            <li>
                                                Learn to write the most efficient computer programs with the best practices from scratch to tackle the competitions like CodeChef, Hackerearth, Hackerrank etc and gain an edge in the interview process.
                                            </li>
                                            <li>
                                                Taught by the best coding professionals from top tier colleges with real world projects.
                                            </li>
                                            <li>
                                                All industry and market friendly languages like Python, Java, C++ etc. are covered.
                                            </li>
                                        </ul>
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
                                        <ul>
                                            <h4>Schools</h4>
                                            <li>
                                                Tailor made comprehensive solutions catering to the students and professionals to help change their careers into lucrative and demanding technical domains like Machine Learning, Data Science, Full Stack Development etc.
                                            </li>
                                            <li>
                                                The technical courses are divided into modules containing appropriate theory and intensive practical along with real time case studies.
                                            </li>
                                            <li>
                                                Switch careers to high impact business domains and increase your salary or chance of promotion exponentially.
                                            </li>
                                            <li>
                                                Connect with industry leaders for personal feedback and 1 to 1 mentorship to land the best jobs along with career growth.
                                            </li>
                                        </ul>
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
