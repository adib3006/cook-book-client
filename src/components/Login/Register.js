import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/login.jpg';
import { AuthContext } from './../../contexts/AuthProvider';

const Register = () => {
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const imageURL = form.imageURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser(name, imageURL)
                    .then(result => {
                        const currentUser = {
                            email: user.email
                        }

                        fetch('http://localhost:5000/jwt', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(currentUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                localStorage.setItem('cookBook-token', data.token);
                                navigate(from, { replace: true });
                            })
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => console.error(error))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('cookBook-token', data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => console.error(error))
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
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name='imageURL' placeholder="imageURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-accent" type="submit" value="Register" />
                        </div>
                    </form>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline mx-auto mb-5'>Sign in With Google</button>
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