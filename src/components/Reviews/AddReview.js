import React, { useContext } from 'react';
import { AuthContext } from './../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const AddReview = ({item,refresh,setRefresh}) => {
    const {user} = useContext(AuthContext);
    const {_id, title, img} = item;
    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewText = form.review.value;
        const ratings = form.ratings.value;
        const review = {
            email: user.email,
            item_id: _id,
            userImage: user.photoURL,
            userName: user.displayName,
            reviewText,
            ratings,
            title,
            img
        }
        fetch(`https://cook-book-server.vercel.app/menu/${_id}`,{
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                form.reset();
                toast.success('Review added successfully');
                setRefresh(!refresh);
            }
        })
        .catch(err => console.error(err))
    }
    return (
        <div className='mx-auto w-4/5 lg:w-2/3 my-10 p-2'>
            <form onSubmit={handleAddReview}>
                <h2 className="text-4xl text-center mb-5">Add your review</h2>
                <textarea name='review' className="textarea textarea-bordered textarea-warning h-24 w-full mb-5" placeholder="Review" required></textarea>
                <input name='ratings' type="text" placeholder="Item Ratings" className="input input-bordered input-warning w-1/2" required/>
                <div className='flex justify-center'>
                    <input className='btn btn-outline btn-warning my-5' type="submit" value="Post" />
                </div>
            </form>
        </div>
    );
};

export default AddReview;