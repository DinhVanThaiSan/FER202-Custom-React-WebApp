import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar as BsNavbar, Nav, Container, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <BsNavbar bg="white" expand="lg" className="shadow-sm sticky-top">
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="fw-bold text-primary">TechLaptops</BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/feature">Feature</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/cart" className="fw-bold d-flex align-items-center gap-2" aria-label={`Cart with ${totalQuantity} items`}>
              <span>Cart</span> 
              <Badge bg="primary" pill>{totalQuantity}</Badge>
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
