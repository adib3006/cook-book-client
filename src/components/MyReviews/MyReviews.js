import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../contexts/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews,setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email])
    return (
        <div className='m-10'>
            <h1 className='text-center text-5xl font-bold m-5'>Hello, {user.displayName}.</h1>
            {
                reviews?.map(review => <MyReviewCard key={review._id} review={review} setReviews={setReviews} reviews={reviews}></MyReviewCard>)
            }
        </div>
    );
};

export default MyReviews;