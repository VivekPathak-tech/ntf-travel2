import React from 'react';
import Banner from '../components/Banner';
import AboutUsComp from '../components/AboutUsComp';
import AboutUsIcon from '../components/AboutUsIcon';
import TravelDestination from '../components/TravelDestination';
import TravelExperience from '../components/TravelExperience';
import LaunchCelebration from '../components/LaunchCelebration';
import MostPopularTour from '../components/MostPopularTour';
import './Home.css'; 

export default function Home() {
    return (
        <div>
            <Banner />
            <AboutUsComp />
            <AboutUsIcon />
            <TravelDestination />
            <TravelExperience />
            <LaunchCelebration />
            <MostPopularTour />
        </div>
    );
}