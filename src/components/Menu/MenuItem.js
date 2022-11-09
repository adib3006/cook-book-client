import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const MenuItem = ({ menuItem }) => {
    const { _id, img, title, price, ratings, description } = menuItem;
    let cardDescription = '';
    if (description.length > 100) {
        cardDescription = description.slice(0, 100);
    }
    else {
        cardDescription = description;
    }
    return (
        <PhotoProvider>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <PhotoView key={_id} src={img}><figure><img src={img} alt="Shoes" /></figure></PhotoView>
                <div className="card-body">
                    <div className='flex items-center justify-between'>
                        <h2 className="card-title">{title}</h2>
                        <div className="badge badge-warning">{ratings} <FaRegStar /></div>
                    </div>
                    <p className='text-2xl font-semibold text-orange-600'>Price : ${price}</p>
                    <p>Description: {cardDescription}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/menu/${_id}`}>
                            <button className="btn btn-error">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default MenuItem;