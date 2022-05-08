import React from 'react';
import './Home.css';
import banner from '../../../Assets/Images/banner_harley_davidson.jpg';
import Items from '../Items/Items';
import { useNavigate } from 'react-router-dom';
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
                <button onClick={navigateManage} className='w-50 mt-3 bg-success rounded border-0 p-2 text-white'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default Home;