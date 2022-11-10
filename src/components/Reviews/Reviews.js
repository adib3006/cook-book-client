import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = ({item,refresh}) => {
    const [reviews,setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://cook-book-server.vercel.app/menu/${item._id}`)
            .then(res => res.json())
            .then(data => setReviews(data.reviews))

    }, [item._id,refresh]);
    return (
        <div className='m-10'>
            {
                reviews?.map(review=><ReviewCard key={review._id} review={review}></ReviewCard>)
            }
        </div>
    );
};

export default Reviews;