import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../contexts/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const {user, logOut} = useContext(AuthContext);
    const [reviews,setReviews] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
            headers:{
                authorization: `Bearer ${localStorage.getItem('cookBook-token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    return logOut();
                }
                return res.json()
            })
            .then(data => setReviews(data))

    }, [user?.email, logOut])

    const len = reviews.length;

    return (
        <div className='m-10'>
            <h1 className='text-center text-5xl font-bold m-5'>Hello, {user.displayName}.</h1>
            {
                 len ? reviews?.map(review => <MyReviewCard key={review._id} review={review} setReviews={setReviews} reviews={reviews}></MyReviewCard>) : <h2 className='text-2xl text-center my-40'>No reviews were added</h2>
            }
            
        </div>
    );
};

export default MyReviews;