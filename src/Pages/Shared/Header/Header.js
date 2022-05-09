import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleLogout = () => {
        signOut(auth);
        navigate('/home');
    }
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
                            {
                                user && <>
                                    <Nav.Link className='text-white fs-5' as={Link} to="/manageinventories">Manage Items</Nav.Link>
                                    <Nav.Link className='text-white fs-5' as={Link} to="/addnewitem">Add Item</Nav.Link>
                                    <Nav.Link className='text-white fs-5' as={Link} to="/myitems">My Items</Nav.Link>
                                </>
                            }
                            <Nav.Link className='text-white fs-5' as={Link} to="/blogs">Blogs</Nav.Link>
                            {
                                user ?
                                    <Button onClick={handleLogout} className='text-decoration-none text-white fs-5' variant="link">Logout</Button>
                                    :
                                    <Nav.Link className='text-white fs-5' as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;