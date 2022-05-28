import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { BsFillPeopleFill } from "react-icons/bs";
import { BiMoney } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";


const BusinessSummary = () => {
    return (
        <div className='my-3 md:my-6 lg:my-24'>
            <h2 className="text-3xl text-center text-primary mb-3 md:mb-8 font-bold">Our Revenue</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 rounded-2xl overflow-hidden md:gap-0 items-center w-full bg-base-100 shadow-xl flex-row justify-center">
                <div className="card-body gap-5 text-center justify-center items-center bg-green-200 shadow-2xl py-24">
                    <BsFillPeopleFill className=' text-7xl ' />
                    <h2 className="card-title justify-center">Our Customers</h2>
                    <div className='flex justify-center font-bold text-2xl text-secondary'>
                        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible }) => (
                                <CountUp start={0} end={1000} delay={1}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                            )}
                        </VisibilitySensor>+
                    </div>
                </div>
                <div className="card-body gap-5 text-center justify-center items-center bg-green-300  py-24">
                    <BiMoney className=' text-7xl' />
                    <h2 className="card-title justify-center">Annual revenue</h2>
                    <div className='flex justify-center font-bold text-2xl text-secondary'>
                        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible }) => (
                                <CountUp start={0} end={50000} delay={1}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                            )}
                        </VisibilitySensor>+
                    </div>
                </div>
                <div className="card-body gap-5 text-center items-center justify-center bg-green-200 py-24">
                    <MdProductionQuantityLimits className=' text-7xl' />
                    <h2 className="card-title justify-center">Our Products</h2>
                    <div className='flex justify-center font-bold text-2xl text-secondary'>
                        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible }) => (
                                <CountUp start={0} end={500} delay={1}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                            )}
                        </VisibilitySensor>+
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;