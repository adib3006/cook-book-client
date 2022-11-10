import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center my-14'>Welcome to Blogs</h1>
            <div className="card w-4/5 mx-auto border rounded-xl shadow-xl mb-10">
                <div className="card-body">
                    <h1 className='text-3xl font-bold mb-5'>Difference between SQL and NoSQL</h1>
                    <p className='font-semibold text-xl'>SQL and NoSQL both are used for database management. SQL works with tabular format whereas NoSQL works with non tabular format.</p>
                </div>
            </div>
            <div className="card w-4/5 mx-auto border rounded-xl shadow-xl mb-10">
                <div className="card-body">
                    <h1 className='text-3xl font-bold mb-5'>What is JWT, and how does it work?</h1>
                    <p className='font-semibold text-xl'>SQL and NoSQL both are used for database management. SQL works with tabular format whereas NoSQL works with non tabular format.</p>
                </div>
            </div>
            <div className="card w-4/5 mx-auto border rounded-xl shadow-xl mb-10">
                <div className="card-body">
                    <h1 className='text-3xl font-bold mb-5'>What is the difference between javascript and NodeJS?</h1>
                    <p className='font-semibold text-xl'>SQL and NoSQL both are used for database management. SQL works with tabular format whereas NoSQL works with non tabular format.</p>
                </div>
            </div>
            <div className="card w-4/5 mx-auto border rounded-xl shadow-xl mb-10">
                <div className="card-body">
                    <h1 className='text-3xl font-bold mb-5'>How does NodeJS handle multiple requests at the same time?</h1>
                    <p className='font-semibold text-xl'>SQL and NoSQL both are used for database management. SQL works with tabular format whereas NoSQL works with non tabular format.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;