import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageInventories.css';
const ManageInventories = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    const navigateAddItem = () => {
        navigate('/addnewitem');
    }
    return (
        <div className='manage-container'>
            <h1 className='text-center mt-3'>Manage Inventories</h1>
            <div className='manage mb-5 mt-5'>
                {
                    items.map(item => <div className='manage-item' key={item._id}>
                        <div className='py-3 px-5 item-info'>
                            <h3>{item.name}</h3>
                            <img src={item.img} alt="" />
                        </div>
                        <div className='d-flex justify-content-center mb-3'>
                            <button className='manage-delete px-4 py-1 fs-5'>Delete</button>
                        </div>
                    </div>)
                }
            </div>
            <div className='d-flex justify-content-center mb-5'>
                <button onClick={navigateAddItem} className='manage-add px-5 py-2 fs-4'>Add new item</button>
            </div>
        </div>
    );
};

export default ManageInventories;