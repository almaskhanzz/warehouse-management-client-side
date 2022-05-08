import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='bg' variant="dark">
                <Container className='py-3'>
                    <Navbar.Brand as={Link} to="/"><span className='war-house'>Warehouse</span> <span className='management'>Management</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-white fs-5' as={Link} to="/add">Add</Nav.Link>
                            <Nav.Link className='text-white fs-5' as={Link} to="/delete">Delete</Nav.Link>
                            <Nav.Link className='text-white fs-5' as={Link} to="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;