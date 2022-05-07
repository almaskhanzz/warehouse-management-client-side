import React from 'react';
import './Home.css';
import banner from '../../../Assets/Images/banner_harley_davidson.jpg';
const Home = () => {
    return (
        <div>
            <img className='w-100' src={banner} alt="" />
        </div>
    );
};

export default Home;