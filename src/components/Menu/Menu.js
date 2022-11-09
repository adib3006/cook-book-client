import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';

const Menu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])
    return (
        <div id='menu'>
            <div className='text-center mb-6'>
                <p className="text-2xl font-bold text-orange-600">Menu</p>
                <h2 className="text-5xl font-semibold mb-5">Our Foods</h2>
                <p className='mx-28'>Select from our featured items and enjoy tasty foods delivered at your doorstep.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-5'>
                {
                    menu.map(menuItem => <MenuItem key={menuItem._id} menuItem={menuItem}></MenuItem>)
                }
            </div>
            <div className='flex items-center justify-center mt-5'>
                <Link to='/menu'>
                    <button className="btn btn-outline btn-error">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default Menu;