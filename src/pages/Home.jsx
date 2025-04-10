import React from 'react';
import Banner from '../components/Banner';
import AboutUsComp from '../components/AboutUsComp';
import AboutUsIcon from '../components/AboutUsIcon';
import TravelDestination from '../components/TravelDestination';

export default function Home() {
    return (
        <div>
            <Banner />
            <AboutUsComp />
            <AboutUsIcon />
            <TravelDestination />
        </div>
    );
}