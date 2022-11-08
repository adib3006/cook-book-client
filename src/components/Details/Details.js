import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Details = () => {
    const item = useLoaderData();
    const { title, img, ratings, price, description } = item;
    return (
        <PhotoProvider>
            <div>
                <div className='m-10'>
                    <div className='flex justify-center mb-4'>
                        <PhotoView key={item.item_id} src={img}><img className='rounded-xl' src={img} alt="" />
                        </PhotoView>
                    </div>
                    <h1 className='text-5xl text-center font-bold mb-6'>{title}</h1>
                    <p className='text-2xl font-semibold mb-4'>Price : ${price}</p>
                    <p className='text-2xl font-semibold flex items-center mb-4'>Ratings : {ratings}<span className='text-orange-500'><FaRegStar /></span></p>
                    <p className='text-2xl font-semibold mb-4'>Description : {description}</p>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default Details;