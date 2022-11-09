import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Reviews from '../Reviews/Reviews';
import AddReview from '../Reviews/AddReview';
import { AuthContext } from './../../contexts/AuthProvider';

const Details = () => {
    const {user} = useContext(AuthContext);
    const [refresh,setRefresh] = useState(true);
    const {item} = useLoaderData();
    const { _id, title, img, ratings, price, description } = item;
    return (
        <PhotoProvider>
            <div>
                <div className='m-10'>
                    <div className='flex justify-center mb-4'>
                        <PhotoView key={_id} src={img}><img className='rounded-xl w-1/2 mx-auto' src={img} alt="" />
                        </PhotoView>
                    </div>
                    <h1 className='text-5xl text-center font-bold mb-6'>{title}</h1>
                    <p className='text-2xl font-semibold mb-4'>Price : ${price}</p>
                    <p className='text-2xl font-semibold flex items-center mb-4'>Ratings : {ratings}<span className='text-orange-500'><FaRegStar /></span></p>
                    <p className='text-2xl font-semibold mb-4'>Description : {description}</p>
                </div>
            </div>
            <h1 className='text-5xl text-center font-bold my-5'>Reviews</h1>
            <div>
                <Reviews item={item} refresh={refresh}></Reviews>
                {
                    user ? <AddReview item={item} refresh={refresh} setRefresh={setRefresh}></AddReview> : <p className='text-xl text-center my-5'>Please <Link to='/login' className='underline-offset-2 text-orange-500 font-semibold'>Login</Link> to add review</p>
                }
            </div>
        </PhotoProvider>
    );
};

export default Details;