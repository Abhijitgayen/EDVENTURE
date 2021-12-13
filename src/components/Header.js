import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Container,NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { FaSignInAlt } from 'react-icons/fa';
import ModelSet from './ModelSet';

export class Header extends Component {
    
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" variant="dark" className='bg_navbar'>
                    <Container>
                        <Navbar.Brand href="#home">EDVENTURE LOGO</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="hello" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="ms-auto">
                                <Nav.Link href="#about_us" className='nav_link active'> Home </Nav.Link>
                                <NavDropdown title="Courses" id="collasible-nav-dropdown" className='nav_link bg_drop'>
                                    <NavDropdown.Item href="#action/3.1"  >Gate</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2"  >Engineering</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" >10th and 12th</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4" >Free Study Material</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#free_study" className='nav_link'>About Us</Nav.Link>
                                <Nav.Link href="#team" className='nav_link'>Team</Nav.Link>
                                <Nav.Link href="#results" className='nav_link'>Results</Nav.Link>
                                <Nav.Link href="#contact" className='nav_link'>Contact</Nav.Link>
                                <Nav.Link eventKey={2} href="#sign_up" className='active  sign_up'>
                                 {/* <Button> SIGN UP <FaSignInAlt className="sign_icon"/></Button>  */}
                                 <ModelSet btn_name='SIGN UP' icon={<FaSignInAlt className='sign_icon' />}/>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
        )
    }
}

export default Header
