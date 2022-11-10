import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const MyReviewCard = ({ review,setReviews,reviews }) => {
    const navigate = useNavigate();
    const { img, title, reviewText, ratings,_id } = review;
    const handleDelete = (id) => {
        const procced = window.confirm('Sure you want to delete this item?');
        if (procced) {
            fetch(`http://localhost:5000/myreviews/${id}`, {
                method: 'DELETE',
                headers:{
                    authorization: `Bearer ${localStorage.getItem('cookBook-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Deleted successfully');
                        const remaining = reviews.filter(rvw => rvw._id !== id);
                        setReviews(remaining);
                    }
                });
        }
    }

const handleEdit = (id) => {
    navigate(`/myreviews/update/${id}`)
  }
    return (
        <div className="card w-full border rounded-xl shadow-xl mb-5">
            <div className="card-body">
                <div className='flex items-center justify-start'>
                    <div className="avatar mr-5 w-1/5">
                        <div className="w-16 rounded">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <h4 className='text-xl w-1/5'>{title}</h4>
                    <p className='w-1/5'>Review: {reviewText}</p>
                    <p className='flex items-center w-1/5'>Ratings : {ratings}<span className='text-orange-500'>
                        <FaRegStar /></span></p>
                    <div>
                        <button onClick={()=>handleEdit(_id)} className='btn mr-2 btn-primary'>Update</button>
                        <button onClick={()=>handleDelete(_id)} className='btn'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;