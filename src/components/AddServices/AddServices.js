import React from 'react';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const AddServices = () => {
    const handleAddItem = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const ratings = form.ratings.value;
        const price = form.price.value;
        const description = form.description.value;
        const item = {
            title,
            img,
            ratings,
            price,
            description
        }

        fetch('https://cook-book-server.vercel.app/menu',{
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                form.reset();
                toast.success('Item Added successfully');
            }
        })
        .catch(err => console.error(err))
    }

    return (
        <div className='m-10 p-2'>
            <Helmet>
                <title>Cook Book | Add Services</title>
            </Helmet>
            <form onSubmit={handleAddItem}>
                <h2 className="text-4xl text-center mb-5">Add your preferred menu item</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
                    <input name='title' type="text" placeholder="Item Name" className="input input-bordered input-warning w-full" required/>
                    <input name='img' type="text" placeholder="Image URL" className="input input-bordered input-warning w-full" required/>
                    <input name='ratings' type="number" min="0" max="5" step="0.5" placeholder="Item Ratings" className="input input-bordered input-warning w-full" required/>
                    <input name='price' type="text" placeholder="Price" className="input input-bordered input-warning w-full" required/>
                </div>
                <textarea name='description' className="textarea textarea-bordered textarea-warning h-24 w-full mb-5" placeholder="Description" required></textarea>
                <div className='flex justify-center'>
                    <input className='btn btn-outline btn-warning' type="submit" value="Add item" />
                </div>
            </form>
        </div>
    );
};

export default AddServices;