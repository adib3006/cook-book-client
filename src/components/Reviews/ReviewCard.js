import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    const {userImage, userName, reviewText, ratings} = review;
    return (
        <div className="card w-full border rounded-xl shadow-xl mb-5">
            <div className="card-body">
                <div className='flex items-center justify-start'>
                    <div className="avatar mr-5">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={userImage} alt=''/>
                        </div>
                    </div>
                    <h3 className='text-3xl'>{userName}</h3>
                </div>
                <p>{reviewText}</p>
                <p className='flex items-center'>Ratings : {ratings}<span className='text-orange-500'>
                    <FaRegStar /></span></p>
            </div>
        </div>
    );
};

export default ReviewCard;