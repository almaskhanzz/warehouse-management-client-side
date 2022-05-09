import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Inventory.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Inventory = () => {
    const { inventoryId } = useParams();
    // console.log(inventoryId);
    const { register, handleSubmit } = useForm();
    const [item, setItem] = useState([]);
    useEffect(() => {
        const url = `https://pure-wave-99844.herokuapp.com/item/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item]);

    const handleDelivered = id => {
        // console.log(id);
        const previousQuantity = parseInt(item.quantity);
        const newQuantity = previousQuantity - 1;
        const quantities = { newQuantity };
        console.log(quantities);

        const url = `https://pure-wave-99844.herokuapp.com/item/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(quantities),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Item updated successfully!!!');
            })
    }
    //Update quantity
    const onSubmit = data => {
        // console.log(data);
        const url = `https://pure-wave-99844.herokuapp.com/item/${inventoryId}`;
        fetch(url, {
            //PUT for updating...
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                toast('Item updated successfully!!!');
            })
    };
    const navigate = useNavigate();
    const navigateManage = () => {
        navigate('/manageinventories');
    }
    return (
        <div className='w-50 mx-auto mb-3'>
            <h1 className='text-center mt-3 mb-4'>Details of the Inventory Item:</h1>
            <div className='item-details'>
                <div className='w-50 mx-auto'>
                    <img className='mb-4' src={item.img} alt="" />
                </div>
                <h3 className='text-center'>ID: {item._id}</h3>
                <h3 className='text-center'>Name: {item.name}</h3>
                <h4 className='text-center'>Price: {item.price}</h4>
                <h4 className='text-center'>Quantity: {item.quantity}</h4>
                <h4 className='text-center'>Sold: {item.sold}</h4>
                <h3 className='text-center'>Supplier Name: {item.supplierName}</h3>
                <p className='fs-5 text-success mb-2 mt-2'>Description: {item.description}</p>
                <div className='d-flex justify-content-center'>
                    <button className='rounded' onClick={() => handleDelivered(item._id)}>Delivered</button>
                </div>
                <div className='w-50 mx-auto'>
                    <h3 className='mt-4'>Restock Items</h3>
                    <form className='d-flex flex-column mb-5' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                        <input className='w-50 mt-3 bg-primary rounded border-0 p-2 text-white mx-auto' type="submit" value="Update Quantity" />
                    </form>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button onClick={navigateManage} className='w-50 mt-3 bg-success rounded border-0 p-2 text-white'>Manage Inventories</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Inventory;