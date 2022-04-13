import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  return (
    <Navbar className='px-custom ' style={{ position: 'fixed', zIndex: 2, width: "100%" }} bg="" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Autonomous</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=''>
          <Nav className="ms-auto">
            <NavLink className='custom-link' to='/'>Home</NavLink>
            <NavLink className='custom-link' to='/about'>About Us</NavLink>
            <NavLink className='custom-link' to='/'>Home</NavLink>
            <NavLink className='custom-link' to='/about'>About Us</NavLink>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Product</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;