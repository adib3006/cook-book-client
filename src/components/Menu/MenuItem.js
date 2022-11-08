import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ menuItem }) => {
    const { item_id, img, title, price, ratings } = menuItem;
    console.log(menuItem);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex items-center justify-between'>
                    <h2 className="card-title">{title}</h2>
                    <div className="badge badge-warning">{ratings}</div>
                </div>
                <p className='text-2xl font-semibold text-orange-600'>Price : ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/menu/${item_id}`}>
                        <button className="btn btn-error">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;