import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const UpdateItem = () => {
    const { updateId } = useParams();
    const { register, handleSubmit } = useForm();

    const [updateItem, setUpdateItem] = useState([]);
    useEffect(() => {
        const url = `https://pure-wave-99844.herokuapp.com/item/${updateId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdateItem(data))
    }, [])

    const onSubmit = data => {
        const url = `https://pure-wave-99844.herokuapp.com/item/${updateId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                alert('Service updated successfully!!!');
            })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2 className='mt-4 text-center'>Update your item!</h2>
            <form className='d-flex flex-column mb-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Sold' type="number" {...register("sold")} />
                <input className='mb-2' placeholder='Supplier name' {...register("supplierName", { required: true })} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='w-25 mt-3 bg-success rounded border-0 p-2 fs-5 text-white mx-auto' type="submit" value="Update Item" />
            </form>
        </div>
    );
};

export default UpdateItem;