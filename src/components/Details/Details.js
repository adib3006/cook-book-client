import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const item = useLoaderData();
    const {title} = item;
    return (
        <div>
            <h1 className='text-5xl text-center font-bold'>{title}</h1>
        </div>
    );
};

export default Details;