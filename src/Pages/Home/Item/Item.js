import React from 'react';
import './Item.css';
const Item = ({ item }) => {
    const { _id, name, price, description, img, supplierName, quantity } = item;
    return (
        <div className='item-container'>
            <div className='item'>
                <img src={img} alt="" />
                <h3 >{name}</h3>
                <h5 >{price}$</h5>
                <h5 >{quantity}</h5>
                <h5 >{supplierName}</h5>
                <p >{description}</p>
            </div>
        </div>
    );
};

export default Item;