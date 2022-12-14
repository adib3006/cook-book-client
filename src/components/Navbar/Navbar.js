import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const hangleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar bg-white/75 px-2 md:px-20 backdrop-blur-lg sticky top-0 z-50 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/team'>Team</Link></li>
                        {
                            user ?
                                <>
                                    <li><Link to='/myreviews'>My Reviews</Link></li>
                                    <li><Link to='/addservices'>Add Services</Link></li>
                                </>
                                : <></>
                        }
                    </ul>
                </div>
                <div className='flex items-center ml-5'>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Cook <span className='text-orange-500'>Book</span></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/team'>Team</Link></li>
                    {
                        user ?
                            <>
                                <li><Link to='/myreviews'>My Reviews</Link></li>
                                <li><Link to='/addservices'>Add Services</Link></li>
                            </>
                            : <></>
                    }
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <button onClick={hangleLogOut} className='btn btn-outline btn-error'>Log Out</button> :
                        <Link to='/login' className="btn btn-outline">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;