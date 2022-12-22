import React, { useEffect, useState } from 'react';
import MenuPageItems from './MenuPageItems';
import { Helmet } from 'react-helmet';

const MenuPage = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('https://cook-book-server.vercel.app/menu')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])
    return (
        <div className='md:m-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-5'>
            <Helmet>
                <title>Cook Book | Menu</title>
            </Helmet>
            {
                menu.map(menuItem => <MenuPageItems key={menuItem._id} menuItem={menuItem}></MenuPageItems>)
            }
        </div>
    );
};

export default MenuPage;