import React from 'react';
import './Home.css';
import banner from '../../../Assets/Images/banner_harley_davidson.jpg';
import Items from '../Items/Items';
const Home = () => {
    return (
        <div>
            <img className='w-100' src={banner} alt="" />
            <Items />
        </div>
    );
};

export default Home;