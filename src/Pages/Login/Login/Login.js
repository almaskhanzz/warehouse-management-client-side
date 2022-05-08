import React from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './Login.css';
const Login = () => {
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/home');
    }

    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    }
    const handleNavigateRegister = () => {
        navigate('/register');
    }
    return (
        <div className='login-container mx-auto my-4'>
            <h1 className='log-reg-color text-center'>Please Login</h1>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <div className='d-flex align-items-center justify-content-between'>
                        <Form.Label className='mb-0'>Password</Form.Label>
                        <p className='mt-2 mb-2'><span className='reset-password' >Forgot Password?</span></p>
                    </div>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <button className="w-50 d-block mx-auto btn-button" type="submit">
                    Login
                </button>
            </Form>
            <p className='text-danger mt-2'>{error?.message}</p>
            {
                loading && <Loading />
            }
            <p className='mt-3'>Don't have an account? <span className='register-hov' onClick={handleNavigateRegister}>Please Register</span></p>
        </div>
    );
};

export default Login;