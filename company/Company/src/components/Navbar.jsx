import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const TopNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className='sticky-top'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src='https://jagaranaarogya.com/static/app/img/jagarnArogya.png' alt="Jagarn Arogya Logo" style={{ height: '50px' }}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className='fs-5 text-white p-2'>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className='fs-5 text-white p-2'>About</Nav.Link>
            <Nav.Link as={Link} to="/team" className='fs-5 text-white p-2'>Team</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='fs-5 text-white p-2'>Contact</Nav.Link>
            <Nav.Link as={Link} to="/blogs" className='fs-5 text-white p-2'>Blogs</Nav.Link>
          </Nav>
          <Link to="/contact" className='btn btn-outline-danger text-white py-2'>Contact Us</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
