import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const UpdateMyReviews = () => {
    const router = useParams();
    const [review, setReview] = useState({});
    const { id } = router;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews/${id}`)
            .then((res) => res.json())
            .then((data) => setReview(data))
            .catch((err) => toast.error(err));
    }, [id]);

    const handleUpdateReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewText = form.review.value;
        const ratings = form.ratings.value;
        const updatedReview = {
            reviewText,
            ratings
        }

        fetch(`http://localhost:5000/myreviews/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedReview)
        })
        .then(res => res.json())
        .then(data => {
                toast.success('Review updated');
                navigate("/myreviews");
            })
        .catch(err => toast.error(err))
    }

    return (
        <div className='m-10 p-2'>
            <form onSubmit={handleUpdateReview}>
                <h2 className="text-4xl text-center mb-5">Update your review</h2>
                <textarea name='review' defaultValue={review.reviewText} className="textarea textarea-bordered textarea-warning h-24 w-full mb-5" placeholder="Review" required></textarea>
                <input name='ratings' defaultValue={review.ratings} type="text" placeholder="Item Ratings" className="input input-bordered input-warning w-1/2" required />
                <div className='flex justify-center'>
                    <input className='btn btn-outline btn-warning my-5' type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default UpdateMyReviews;