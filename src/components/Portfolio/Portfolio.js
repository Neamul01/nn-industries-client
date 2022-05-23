import React from 'react';
import Intro from './Intro';
import Timeline from './Timeline';

const Portfolio = () => {
    return (
        <div>
            <h2 className="text-3xl text-center text-primary font-bold py-2">About Myself</h2>
            <Intro></Intro>
            <Timeline />
        </div>
    );
};

export default Portfolio;