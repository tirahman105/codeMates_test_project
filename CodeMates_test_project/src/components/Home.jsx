import React from 'react';
import Banner from './Banner';
import Deals from './Deals';
import Team from './Team';
import Choose from './Choose';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Deals></Deals>
            <Team></Team>
            <Choose></Choose>
            <Review></Review>
        
        </div>
    );
};

export default Home;