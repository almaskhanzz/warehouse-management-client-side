import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';
import Loading from '../../Shared/Loading/Loading';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();

    if (user) {
        navigate('/home');
        console.log('user', user);
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)

    }

    const handleNavigateLogin = () => {
        navigate('/login');
    }
    return (
        <div className='register-container mx-auto my-4'>
            <h1 className='log-reg-color text-center'>Please Register</h1>
            <Form onSubmit={handleRegister}>
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
            <p className='text-danger mt-2'>{error?.message}</p>
            {
                loading && <Loading />
            }
            <p className='mt-3'>Already have an account? <span className='register-hov' onClick={handleNavigateLogin} >Please Login</span></p>
        </div>
    );
};

export default Register;