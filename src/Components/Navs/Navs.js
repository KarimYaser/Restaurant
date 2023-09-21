import React from "react";
import { Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navs.css'
import logo from '../../imgs/logo.png'

function Navs() {
    return (
        <Navbar expand="lg" className="nav">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-links">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                        <Nav.Link href="#link">Explore Food</Nav.Link>
                        <Nav.Link href="#link">Review</Nav.Link>
                        <Nav.Link href="#link">Faq</Nav.Link>
                    </Nav>
                    <Nav.Link id="last-nav">202021</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navs;