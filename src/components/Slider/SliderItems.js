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
                    <h1 className='text-6xl font-bold text-white'>Best <br />
                        Quality <span className='text-orange-500'>food</span> <br />
                        At your doorstep.
                    </h1>
                </div>
                <div className="absolute flex-col justify-end transform -translate-y-1/2 left-24 top-1/2 w-2/5">
                    <p className='text-white text-xl pb-10'>Enjoy our exquisite flavours with inhouse spices and sauses.Give your taste buds an amazing experience.</p>
                    <button className='btn btn-outline btn-error'>Order Now</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default SliderItems;