import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddNewItem.css';
const AddNewItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        // console.log(data);
        const url = `https://pure-wave-99844.herokuapp.com/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('Item added successfully!!!');
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center'>Please add your item</h1>
            <form className='d-flex flex-column mb-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Sold' type="number" {...register("sold")} />
                <input className='mb-2' placeholder='Supplier name' {...register("supplierName", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='w-25 mt-3 bg-success rounded border-0 p-2 fs-5 text-white mx-auto' type="submit" value="Add Item" />
            </form>
            <ToastContainer />
        </div>
    );
};
export default AddNewItem;