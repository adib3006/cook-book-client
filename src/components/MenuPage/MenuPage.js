import React, { useEffect, useState } from 'react';
import MenuPageItems from './MenuPageItems';

const MenuPage = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])
    return (
        <div className='m-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-5'>
            {
                menu.map(menuItem => <MenuPageItems key={menuItem._id} menuItem={menuItem}></MenuPageItems>)
            }
        </div>
    );
};

export default MenuPage;