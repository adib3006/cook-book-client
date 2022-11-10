import React from 'react';
import AwardSection from '../AwardSection/AwardSection';
import Menu from '../Menu/Menu';
import NewlyArriveSection from '../NewlyArriveSection/NewlyArriveSection';
import Slider from '../Slider/Slider';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Cook Book | Home</title>
            </Helmet>
            <Slider></Slider>
            <Menu></Menu>
            <NewlyArriveSection></NewlyArriveSection>
            <AwardSection></AwardSection>
        </div>
    );
};

export default Home;