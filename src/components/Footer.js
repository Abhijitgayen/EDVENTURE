import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa'

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className='footer'>
                    <Container>
                        <Row md className="footer_all justify-content-center">
                            <Col className="col-sm-6 col-md-4 col-12  footer_card">
                                <h2>Courses</h2>
                                <ul>
                                    <li>GATE</li>
                                    <li>JAM</li>
                                    <li>ES</li>
                                    <li>Placement Course
                                        <ul>
                                            <li>Programming</li>
                                            <li>Mock Interviews</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Col>
                            <Col className="col-sm-6 col-md-4 col-12 footer_card ">
                                <h2>Company</h2>
                                <ul>
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                    <li>How It works</li>
                                    <li>Careers</li>
                                    <li>Terms and Services</li>
                                </ul>
                            </Col>
                            <Col className="col-sm-6 col-md-4 col-12  footer_card" >
                                <h2>Others</h2>
                                <ul>
                                    <li>Ambassadors</li>
                                    <li>FAQ</li>
                                    <li>Tutors</li>
                                    <li>Investors</li>
                                    <li>Sponsorships</li>
                                    <li>Scholarships</li>
                                </ul>
                            </Col>
                            <Col className="col-sm-6 col-md-4 col-12 footer_card">
                                <h2 className='follow_us_t'>Follow Us</h2>
                                <div className="follow_us" >
                                    <FaFacebookSquare size="35px" className='footer_icon' />
                                    <FaWhatsappSquare size="35px" className='footer_icon' />
                                    <FaLinkedin size="35px" className='footer_icon' />
                                    <FaTwitterSquare size="35px" className='footer_icon' />
                                </div>
                            </Col>
                        </Row>
                        <hr></hr>
                        <Row md className='footer_all justify-content-center '>
                            <Col className='col-sm-6 col-md-4 col-12 footer_card'>
                                <h2>Online Tuitions</h2>
                                <ul>
                                    <li>B.tech</li>
                                    <li>M.tech</li>
                                    <li>B.Sc
                                        <ul>
                                            <li>Mathematics</li>
                                            <li>Physics</li>
                                            <li>Chemistry</li>
                                        </ul>
                                    </li>
                                    <li>M.Sc
                                        <ul>
                                            <li>Mathematics</li>
                                            <li>Physics</li>
                                            <li>Chemistry</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Col>
                            <Col className='col-sm-6 col-md-4 col-12 footer_card'>
                                <h2>Features</h2>
                                <ul>
                                    <li>Expert Tutors</li>
                                    <li>Become a Tutor</li>
                                    <li>24/7 Availability</li>
                                    <li>Cost Effective</li>
                                    <li>Confidentially</li>
                                    <li>One stop destination for all subject</li>
                                </ul>
                            </Col>
                            <Col className='col-sm-6 col-md-4 col-12 footer_card'>
                                <h2>About</h2>
                                <ul>
                                    <li>Refund Policy</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms and Conditions</li>
                                    <li>Blog</li>
                                </ul>
                            </Col>
                        </Row>
                        <hr></hr>
                        <Row className="footer_copy">

                            <Col>
                                <div className="footer_text">&copy; 2022 , EDVENTURE, All Rights Reserved</div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}
