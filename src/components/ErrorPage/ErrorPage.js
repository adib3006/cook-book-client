import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='pt-40 text-center'>
            <h1 className='text-8xl text-red-600 font-extrabold'>{error.status}</h1>
            <p className='text-4xl text-gray-800 font-bold'>{error.statusText}</p>
            <p className='text-4xl'>Go to <Link className='text-orange-500 hover:underline' to='/home'>Home</Link></p>
        </div>
    );
};

export default ErrorPage;