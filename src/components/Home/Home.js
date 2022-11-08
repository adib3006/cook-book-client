import React from 'react';
import AwardSection from '../AwardSection/AwardSection';
import Menu from '../Menu/Menu';
import NewlyArriveSection from '../NewlyArriveSection/NewlyArriveSection';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Menu></Menu>
            <NewlyArriveSection></NewlyArriveSection>
            <AwardSection></AwardSection>
        </div>
    );
};

export default Home;