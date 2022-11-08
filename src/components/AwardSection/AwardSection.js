import React from 'react';
import cover1 from '../../assets/cover 1.jpg';
import cover2 from '../../assets/cover 2.jpg';

const AwardSection = () => {
    return (
        <div className='my-10'>
            <h1 className='text-5xl font-semibold text-center mb-5'>Award <span className='text-orange-500'>&</span> Achievements</h1>
            <p className='text-xl font-semibold text-center mb-10'>The lastest recognition for our services gives a clear understanding of our efforts and quality of foods that we provide.</p>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={cover1} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Best Cloud Kitchen Award 2022</h1>
                        <p className="py-6">"They provide best quality foods at a very affordable price. Delivery is always on time."</p>
                        <p><small>- The Food Critic Society.</small></p>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 className="text-5xl font-bold">The Foodies Award 2022</h1>
                        <p className="py-6">"They never compromise on their quality and they mantain a great price to quantity ratio."</p>
                        <p><small>- The Foodies.</small></p>
                    </div>
                    <img src={cover2} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                </div>
            </div>
        </div>
    );
};

export default AwardSection;