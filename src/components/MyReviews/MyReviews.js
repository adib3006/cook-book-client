import React, { useContext } from 'react';
import { AuthContext } from './../../contexts/AuthProvider';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1 className='text-center text-5xl font-bold'>Hello, {user.displayName}.</h1>
        </div>
    );
};

export default MyReviews;