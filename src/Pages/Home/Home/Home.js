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
                <button onClick={navigateManage} className='manage-inv my-4 px-5 py-2 fs-4'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default Home;