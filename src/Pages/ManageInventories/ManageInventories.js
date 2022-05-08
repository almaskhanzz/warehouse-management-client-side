import React, { useEffect, useState } from 'react';
import './ManageInventories.css';
const ManageInventories = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
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
                            <button className=''>Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;