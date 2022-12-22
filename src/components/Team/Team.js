import React from 'react';
import picture from '../../assets/mirza adnan.jpg';

const Team = () => {
    return (
        <div>
            <div className='w-2/3 my-10 mx-auto flex flex-col justify-center items-center rounded shadow-xl'>
                <img src={picture} alt="" className='rounded-2xl mb-10 w-2/3 lg:w-1/2' />
                <h2 className='text-center text-5xl font-bold text-gray-700 mb-5'>Mirza Adnan</h2>
                <p className='text-center text-xl font-semibold text-gray-700 mb-5'>Full stack web developer | Front-end Engineer</p>
                <p className='text-center text-xl font-semibold text-gray-700 mb-5'><a href="mailto:ma.adib3006@gmail.com">ma.adib3006@gmail.com</a></p>
                <p className='text-center underline text-xl font-semibold text-gray-700 mb-2'>Connect Me On</p>
                <p className='text-center text-xl font-semibold text-sky-700 mb-5'>
                    <a className='hover:underline' target="_blank" rel='noreferrer' href="https://github.com/adib3006">Github</a> |
                    <a className='hover:underline' target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/mirza-adnan-310b81184/"> LinkedIn</a> |
                    <a className='hover:underline' target="_blank" rel='noreferrer' href="https://sites.google.com/diu.edu.bd/mirza-adnan/home"> Google Site</a></p>
            </div>
        </div>
    );
};

export default Team;