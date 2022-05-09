import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import { async } from '@firebase/util';
const Login = () => {
    const emailRef = useRef('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    }
    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent Email Successfully!');
        }
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
                    <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <div className='d-flex align-items-center justify-content-between'>
                        <Form.Label className='mb-0'>Password</Form.Label>
                        <p className='mt-2 mb-2'><span onClick={handleResetPassword} className='reset-password' >Reset Password</span></p>
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
            <SocialLogin />
            <ToastContainer />
        </div>
    );
};

export default Login;