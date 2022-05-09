import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageInventories.css';
const ManageInventories = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://pure-wave-99844.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    const navigateAddItem = () => {
        navigate('/addnewitem');
    }
    const handleDelete = id => {
        // console.log(id);
        const proceed = window.confirm('Are you sure! You want to delete?');
        if (proceed) {
            const url = `https://pure-wave-99844.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'Delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log("deleted successfully");
                        const remainingItems = items.filter(item => item._id !== id);
                        setItems(remainingItems);
                    }
                })
        }
    }
    const handleUpdate = id => {
        // console.log(id);
        navigate(`/manageinventories/updateItem/${id}`);
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
                            <button onClick={() => handleDelete(item._id)} className='manage-delete px-4 py-1 fs-5'>Delete</button>
                            <button onClick={() => handleUpdate(item._id)} className='manage-update px-4 py-1 ms-5 fs-5'>Update</button>
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