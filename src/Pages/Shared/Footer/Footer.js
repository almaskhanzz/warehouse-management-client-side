import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer-container py-5'>
            <h4 className='text-center text-white'>Copyright &copy; 2018-{new Date().getFullYear()} Warehouse Management. All rights reserved.</h4>
        </div>
    );
};

export default Footer;