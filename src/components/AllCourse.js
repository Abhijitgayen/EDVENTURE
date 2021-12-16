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
                                <Col className='col-12 col-sm-12 col-md-4 order-md-last'>
                                    <Accordion.Header >Accordion Item #1</Accordion.Header>
                                </Col>
                                <Col className='co_set_1 col-12 col-sm-12 col-md-8 order-md-first'>
                                    <Accordion.Body className='allCo_body' >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Col>
                            </Row>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Row>
                                <Col className='col-12 col-sm-12 col-md-4 order-md-last' >
                                    <Accordion.Header >Accordion Item #2</Accordion.Header>
                                </Col>
                                <Col className='co_set_2 col-12 col-sm-12 col-md-8 order-md-first'>
                                    <Accordion.Body className='allCo_body'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Col>
                            </Row>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Row>
                                <Col className='col-12 col-sm-12 col-md-4 order-md-last' >
                                    <Accordion.Header >Accordion Item #3</Accordion.Header>
                                </Col>
                                <Col className='co_set_3 col-12 col-sm-12 col-md-8 order-md-first'>
                                    <Accordion.Body className='allCo_body'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Col>
                            </Row>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Row>
                                <Col className='col-12 col-sm-12 col-md-4 order-md-last' >
                                    <Accordion.Header >Accordion Item #4</Accordion.Header>
                                </Col>
                                <Col className='co_set_4 col-12 col-sm-12 col-md-8 order-md-first'>
                                    <Accordion.Body className='allCo_body'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Col>
                            </Row>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Row>
                                <Col className='col-12 col-sm-12 col-md-4 order-md-last' >
                                    <Accordion.Header >Accordion Item #5</Accordion.Header>
                                </Col>
                                <Col className='co_set_5 col-12 col-sm-12 col-md-8 order-md-first'>
                                    <Accordion.Body className='allCo_body'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Col>
                            </Row>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Row>
                                <Col className='col-12 col-sm-12 col-md-4 order-md-last' >
                                    <Accordion.Header >Accordion Item #6</Accordion.Header>
                                </Col>
                                <Col className='co_set_6 col-12 col-sm-12 col-md-8 order-md-first'>
                                    <Accordion.Body className='allCo_body' >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
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
