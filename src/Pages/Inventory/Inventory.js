import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css';
const Inventory = () => {
    const { inventoryId } = useParams();
    const [item, setItem] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/item/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center mt-3 mb-5'>Details of the Inventory Item:</h1>
            <div className='item-details'>
                <div className='w-50 mx-auto'>
                    <img className='mb-4' src={item.img} alt="" />
                </div>
                <h3 className='text-center'>ID: {item._id}</h3>
                <h3 className='text-center'>Name: {item.name}</h3>
                <h4 className='text-center'>Price: {item.price}</h4>
                <h4 className='text-center'>Quantity: {item.quantity}</h4>
                <h3 className='text-center'>Supplier Name: {item.supplierName}</h3>
                <p className='fs-5 text-success mb-5 mt-4'>Description: {item.description}</p>
            </div>
        </div>
    );
};

export default Inventory;