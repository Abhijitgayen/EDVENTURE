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
                            <Col className=" col-sm-12 col-md-4 col-12  footer_card">
                                <h2>COURSES</h2>
                                <ul>
                                    <li>GATE</li>
                                    <li>Engineering</li>
                                    <li>Graduation</li>
                                    <li>Free study Matrial</li>
                                </ul>
                            </Col>
                            <Col className="col-sm-12 col-md-4 col-12 footer_card ">
                                <h2>COMPANY</h2>
                                <ul>
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                    <li>How It works</li>
                                    <li>Careers</li>
                                    <li>Terms and Services</li>
                                </ul>
                            </Col>
                            <Col className="col-sm-12 col-md-4 col-12  footer_card" >
                                <h2>OTHERS</h2>
                                <ul>
                                    <li>Ambassadors</li>
                                    <li>FAQ</li>
                                    <li>Tutors</li>
                                    <li>Investors</li>
                                    <li>Sponsorships</li>
                                    <li>Scholarships</li>
                                </ul>
                            </Col>
                            <Col className="col-sm-12 col-md-4 col-12 footer_card">
                                <h2 className='follow_us_t'>FOLLOW US</h2>
                                <div className="follow_us" >
                                    <FaFacebookSquare size="35px" className='footer_icon' />
                                    <FaWhatsappSquare size="35px" className='footer_icon' />
                                    <FaLinkedin size="35px" className='footer_icon'  />
                                    <FaTwitterSquare size="35px" className='footer_icon' />
                                </div>
                            </Col>
                        </Row>
                        <Row className="footer_copy">
                            <Col>
                            <div className="footer_text">footer data</div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}
