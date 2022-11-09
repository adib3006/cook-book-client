import React, { useContext } from 'react';
import { AuthContext } from './../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const AddReview = ({item}) => {
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
        console.log(review);
        fetch(`http://localhost:5000/menu/${_id}`,{
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
                toast.success('order placed successfully');
            }
        })
        .catch(err => console.error(err))
    }
    return (
        <div className='m-10 p-2'>
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