import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/login.jpg';

const Register = () => {

    const handleRegister = () => {

    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20 lg:ml-16">
                    <h1 className="text-5xl font-bold text-center">Register</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-accent" type="submit" value="Register" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-semibold' to='/login'>Login</Link></p>
                </div>
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;