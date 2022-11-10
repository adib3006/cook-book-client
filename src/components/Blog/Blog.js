import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center my-14'>Welcome to Blogs</h1>
            <div className="card w-4/5 mx-auto border rounded-xl shadow-xl mb-10">
                <div className="card-body">
                    <h1 className='text-3xl font-bold mb-5'>Difference between SQL and NoSQL</h1>
                    <p className='font-semibold text-xl'>SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL. SQL databases represent massive communities, stable codebases, and proven standards. Multitudes of examples are posted online and experts are available to support those new to programming relational data. NoSQL technologies are being adopted quickly, but communities remain smaller and more fractured. However, many SQL languages are proprietary or associated with large single-vendors, while NoSQL communities benefit from open systems and concerted commitment to onboarding users. SQL is available to most major platforms, from operating systems to architectures and programming languages. Compatibility varies more widely for NoSQL, and dependencies need to be investigated more carefully.</p>
                </div>
            </div>
            <div className="card w-4/5 mx-auto border rounded-xl shadow-xl mb-10">
                <div className="card-body">
                    <h1 className='text-3xl font-bold mb-5'>What is JWT, and how does it work?</h1>
                    <p className='font-semibold text-xl'>JSON Web Token JWT is an open standard for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider. So the integrity and authenticity of the token can be verified by other parties involved. Basically the identity provider generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
                </div>
            </div>
            <div className="card w-4/5 mx-auto border rounded-xl shadow-xl mb-10">
                <div className="card-body">
                    <h1 className='text-3xl font-bold mb-5'>What is the difference between javascript and NodeJS?</h1>
                    <p className='font-semibold text-xl'> JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language. As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.</p>
                </div>
            </div>
            <div className="card w-4/5 mx-auto border rounded-xl shadow-xl mb-10">
                <div className="card-body">
                    <h1 className='text-3xl font-bold mb-5'>How does NodeJS handle multiple requests at the same time?</h1>
                    <p className='font-semibold text-xl'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;