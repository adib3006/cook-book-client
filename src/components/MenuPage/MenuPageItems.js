import React from 'react';
import { Link } from 'react-router-dom';
import {FaRegStar} from 'react-icons/fa';

const MenuPageItems = ({menuItem}) => {
    const { item_id, img, title, price, ratings, description } = menuItem;
    let cardDescription = '';
    if(description.length > 100){
        cardDescription = description.slice(0,100);
    }
    else{
        cardDescription = description;
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex items-center justify-between'>
                    <h2 className="card-title">{title}</h2>
                    <div className="badge badge-warning">{ratings} <FaRegStar/></div>
                </div>
                <p className='text-2xl font-semibold text-orange-600'>Price : ${price}</p>
                <p>Description: {cardDescription}</p>
                <div className="card-actions justify-end">
                    <Link to={`/menu/${item_id}`}>
                        <button className="btn btn-error">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MenuPageItems;