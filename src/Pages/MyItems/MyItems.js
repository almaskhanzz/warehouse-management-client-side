import React, { useEffect, useState } from 'react';

const MyItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://pure-wave-99844.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return (
        <div className='items-container pt-3'>
            <h1>My Items</h1>
            <div className='items'>
                {
                    items.map(item => <div className='item-container'
                        key={item._id}
                    >
                        <div className='item'>
                            <img src={item.img} alt="" />
                            <h3 >Name: {item.name}</h3>
                            <h5 >Price: {item.price}$</h5>
                            <h5 >Quantity: {item.quantity}</h5>
                            <h5 >Sold: {item.sold}</h5>
                            <h5 >Supplier Name: {item.supplierName}</h5>
                            <p > Description: {item.description}</p>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;