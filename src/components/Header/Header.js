import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect className="w-75 py-2 my-0 mx-auto" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img className="header-logo" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto header-nav-link">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Services</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Doctors</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                        <button className="btn border-0 rounded-pill ps-5  text-white ms-3 py-0 gradient-btn">Login <i class="fas ms-3 fa-angle-right"></i></button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;