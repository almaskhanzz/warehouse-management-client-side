import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';
const Item = ({ item }) => {
    const { _id, name, price, description, img, supplierName, quantity } = item;
    const navigate = useNavigate();
    const handleStockUpdate = id => {
        // console.log(id);
        navigate(`inventory/${id}`);

    }
    return (
        <div className='item-container'>
            <div className='item'>
                <img src={img} alt="" />
                <h3 >{name}</h3>
                <h5 >{price}$</h5>
                <h5 >{quantity}</h5>
                <h5 >{supplierName}</h5>
                <p >{description}</p>
                <button onClick={() => handleStockUpdate(_id)} className='w-75 d-block mx-auto'>Stock Update</button>
            </div>
        </div>
    );
};

export default Item;