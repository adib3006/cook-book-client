import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = ({item}) => {
    const [reviews,setReviews] = useState([])
    console.log(item);
    useEffect(() => {
        fetch(`http://localhost:5000/menu/${item._id}`)
            .then(res => res.json())
            .then(data => setReviews(data.reviews))

    }, [item._id,reviews])
    return (
        <div className='m-10'>
            {
                reviews?.map(review=><ReviewCard key={review._id} review={review}></ReviewCard>)
            }
        </div>
    );
};

export default Reviews;