import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/login.jpg';
import { AuthContext } from './../../contexts/AuthProvider';
import { Helmet } from 'react-helmet';

const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                fetch('https://cook-book-server.vercel.app/jwt', {
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

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                fetch('https://cook-book-server.vercel.app/jwt', {
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
        <div className="hero w-full my-5 md:my-20">
            <Helmet>
                <title>Cook Book | Login</title>
            </Helmet>
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="hidden md:block">
                    <img className='md:w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-accent" type="submit" value="Login" />
                        </div>
                    </form>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline mx-auto mb-5'>Sign in With Google</button>
                    <p className='text-center'>New to Cook Book? <Link className='text-orange-600 font-semibold' to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;