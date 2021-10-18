import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/logo.png';
import './Header.css';
import { HashLink } from 'react-router-hash-link';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        color: "rgb(10, 165, 255)",
        borderBottom:"2px solid rgb(10, 165, 255)"
    }
    return (
        <Navbar collapseOnSelect className="w-75 py-2 my-0 mx-auto" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img className="header-logo" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto header-nav-link">
                        <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
                        <HashLink activeStyle={activeStyle} to="/home#services" >Services</HashLink>
                        <HashLink activeStyle={activeStyle} to="/home#about" >About</HashLink>
                        <NavLink activeStyle={activeStyle} to="/doctors">Doctors</NavLink>
                        <NavLink activeStyle={activeStyle} to="/contact">Contact</NavLink>
                        <div className="header-btn">
                            <NavLink to="/login" className=" border-0 rounded-pill ps-5 text-white ms-3 me-0 py-2 pe-1 gradient-btn">Login <i class="fas ms-3 fa-angle-right"></i></NavLink>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;