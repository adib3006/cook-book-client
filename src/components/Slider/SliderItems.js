import React from 'react';
import './SliderItems.css';

const SliderItems = ({ slide }) => {
    const { id, image, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} className="w-full rounded-xl" alt='' />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='lg:text-6xl text-2xl font-bold text-white'>Best <br />
                        Quality <span className='text-orange-500'>food</span> <br />
                        At your doorstep.
                    </h1>
                </div>
                <div className="absolute flex-col justify-end transform -translate-y-1/2 left-24 lg:top-1/2 top-3/4 w-2/5">
                    <p className='text-white lg:text-xl hidden lg:block pb-10'>Enjoy our exquisite flavours with inhouse spices and sauses.Give your taste buds an amazing experience.</p>
                    <a href="#menu"><button className='btn btn-outline btn-error'>Order Now</button></a>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default SliderItems;