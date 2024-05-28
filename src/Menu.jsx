import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css'

 function Menu() {
  return (
    <>
        <Navbar expand="lg" className="customnav">
      <Container>
        <Navbar.Brand href="#banner">Liton Rahman</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#banner">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#servicess">Service</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>            
            <Nav.Link href="#testimonial">Review</Nav.Link>            
            <Nav.Link href="#teams">Team</Nav.Link>            
            <Nav.Link href="#blog">Blog</Nav.Link> 
            <Nav.Link href="#contacts">Contact</Nav.Link>             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
export default Menu;