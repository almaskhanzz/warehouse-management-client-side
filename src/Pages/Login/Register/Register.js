import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Register.css';
const Register = () => {
    const navigate = useNavigate();

    const handleNavigateLogin = () => {
        navigate('/login');
    }
    return (
        <div className='register-container mx-auto my-4'>
            <h1 className='log-reg-color text-center'>Please Register</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <button className="w-50 d-block mx-auto btn-button" type="submit">
                    Register
                </button>
            </Form>
            <p className='mt-3'>Already have an account? <span className='register-hov' onClick={handleNavigateLogin} >Please Login</span></p>
        </div>
    );
};

export default Register;