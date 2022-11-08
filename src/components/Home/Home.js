import React from 'react';
import AwardSection from '../AwardSection/AwardSection';
import NewlyArriveSection from '../NewlyArriveSection/NewlyArriveSection';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <NewlyArriveSection></NewlyArriveSection>
            <AwardSection></AwardSection>
        </div>
    );
};

export default Home;