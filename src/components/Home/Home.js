import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';
import ProductUpdate from './ProductUpdate';
import Review from './Review';
import Speciality from './Speciality';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
            <Speciality></Speciality>
            <ProductUpdate></ProductUpdate>
        </div>
    );
};

export default Home;