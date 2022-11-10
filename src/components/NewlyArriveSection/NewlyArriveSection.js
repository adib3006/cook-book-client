import React from 'react';
import { Link } from 'react-router-dom';
import slide1 from '../../assets/slide1.jpg';

const NewlyArriveSection = () => {
    return (
        <div className='mt-10 mb-20'>
            <h1 className='text-5xl font-semibold text-center mb-5'>Our latest <span className='text-orange-500'>Meal</span></h1>
            <p className='text-xl font-semibold text-center mb-10'>Enjoy our latest combo with your friends and family</p>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={slide1} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">The Weekend Meal</h1>
                        <p className='my-3'>Full package includes food for 4 persons</p>
                        <p><small>- tacos, pizza, macoroni</small></p>
                        <p><small>- fried rice, sushi, steak</small></p>
                        <p><small>- sub sandwich, burger, fries</small></p>
                        <button className="btn btn-outline btn-error mt-4"><Link to='/menu'>Order Now</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewlyArriveSection;