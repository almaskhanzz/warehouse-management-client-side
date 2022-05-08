import React from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css';
const Inventory = () => {
    const { inventoryId } = useParams();
    return (
        <div className='w-75 mx-auto'>
            <h1>This is the items of id: {inventoryId}</h1>
        </div>
    );
};

export default Inventory;