import React from 'react';
import './Home.css';
import banner from '../../../Assets/Images/banner_harley_davidson.jpg';
import Items from '../Items/Items';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
const Home = () => {
    const navigate = useNavigate();
    const navigateManage = () => {
        navigate('/manageinventories');
    }
    return (
        <div>
            <img className='w-100' src={banner} alt="" />
            <Items />
            <div className='d-flex justify-content-center mb-3'>
                <button onClick={navigateManage} className='manage-inv my-4 px-5 py-2 fs-4'>Manage Inventories</button>
            </div>
            <div className='mb-3'>
                <h1 className='text-center'>Get to know about Our Top Suppliers</h1>
                <div className=''>
                    <div className='services'>
                        <div className='services-container'>
                            <h3>Yamaha</h3>
                            <p>Yamaha is one of the biggest motorbike manufacturing company.</p>
                        </div>
                        <div className='services-container'>
                            <h3>Honda</h3>
                            <p>Honda is one of the biggest motorbike manufacturing company.</p>
                        </div>
                        <div className='services-container'>
                            <h3>Suzuki</h3>
                            <p>Suzuki is one of the biggest motorbike manufacturing company.</p>
                        </div>
                        <div className='services-container'>
                            <h3>Harley-Davidson</h3>
                            <p>Harley-Davidson is one of the biggest motorbike manufacturing company.</p>
                        </div>
                        <div className='services-container'>
                            <h3>Ducati</h3>
                            <p>Ducati is one of the biggest motorbike manufacturing company.</p>
                        </div>
                        <div className='services-container'>
                            <h3>Kawasaki</h3>
                            <p>Kawasaki is one of the biggest motorbike manufacturing company.</p>
                        </div>

                    </div>
                </div>

            </div>
            <div className='mb-5 about-sec mx-5 mt-5 d-flex justify-content-center'>
                <div className='about-us'>
                    <h1>ABOUT US</h1>
                    <p>
                        The world's most attractive motorcycles are the result of a deep commitment to racing competitions; they are the purest expression of refined skill, unmistakable design and above all, a great passion for bikes. So, Be our guest and get our valuable services.
                    </p>
                </div>
                <div className='ms-3 feedback'>
                    <h1>Give your feedback!</h1>
                    <div className='forms'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control name='email' type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control name='text-area' type="text" placeholder="Give your feedback..." required />
                            </Form.Group>
                            <button className="w-50 d-block mx-auto btn-button" type="submit">
                                Submit
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;