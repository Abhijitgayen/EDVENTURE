import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Container, Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { FaSignInAlt } from 'react-icons/fa';
//import { AiOutlineAlignLeft } from 'react-icons/ai'
import Login from './Login';

export class Header extends Component {

    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" variant="dark" className='bg_navbar ' id='navbar_bg'>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" id="nav_toggle" />
                        <Navbar.Brand href="#home">EDVENTURE LOGO</Navbar.Brand>

                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="ms-auto">
                                <Nav.Link href="#Home" className='nav_link active'> Home </Nav.Link>
                                <Nav.Link className='nav_link'>
                                <Dropdown>
                                    <Dropdown.Toggle  size="sm" variant='light' id="drop_toggle">
                                        Courses
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu id="drop_bg" variant="dark">
                                    <Dropdown.Item id="dropdown_item" href="#action/3.1"  >Gate</Dropdown.Item>
                                    <Dropdown.Item id="dropdown_item" href="#action/3.2"  >Engineering</Dropdown.Item>
                                    <Dropdown.Item id="dropdown_item"  href="#action/3.3" >10th and 12th</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item id="dropdown_item" href="#action/3.4" >Free Study Material</Dropdown.Item>   
                                    </Dropdown.Menu>
                                </Dropdown>
                                </Nav.Link>
                                <Nav.Link href="#free_study" className='nav_link'>About Us</Nav.Link>
                                <Nav.Link href="#team" className='nav_link'>Team</Nav.Link>
                                <Nav.Link href="#results" className='nav_link'>Results</Nav.Link>
                                <Nav.Link href="#contact" className='nav_link'>Contact</Nav.Link>
                                <Nav.Link eventKey={2} href="#sign_up" >
                                    {/* <Button> SIGN UP <FaSignInAlt className="sign_icon"/></Button>  */}
                                    <Login btn_name='Log In' icon={<FaSignInAlt className='sign_icon' />} />
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
