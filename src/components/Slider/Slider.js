import React from 'react';
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import SliderItems from './SliderItems';

const Slider = () => {
    const slides = [
        {
            image: image1,
            prev: 3,
            id: 1,
            next: 2
        },
        {
            image: image2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: image3,
            prev: 2,
            id: 3,
            next: 1
        }
    ]
    return (
        <div className="carousel w-full pb-10">
            {
                slides.map(slide => <SliderItems key={slide.id} slide={slide}></SliderItems>)
            }
        </div>
    );
};

export default Slider;