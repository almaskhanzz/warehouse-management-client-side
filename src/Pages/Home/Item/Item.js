import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';
const Item = ({ item }) => {
    const { _id, name, price, description, img, sold, supplierName, quantity } = item;
    const navigate = useNavigate();
    const handleStockUpdate = id => {
        // console.log(id);
        navigate(`inventory/${id}`);

    }
    return (
        <div className='item-container'>
            <div className='item'>
                <img src={img} alt="" />
                <h3 >Name: {name}</h3>
                <h5 >Price: {price}$</h5>
                <h5 >Quantity: {quantity}</h5>
                <h5 >Sold: {sold}</h5>
                <h5 >Supplier Name: {supplierName}</h5>
                <p > Description: {description}</p>
                <button onClick={() => handleStockUpdate(_id)} className='w-75 d-block mx-auto'>Stock Update</button>
            </div>
        </div>
    );
};

export default Item;