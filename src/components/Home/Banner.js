import React from 'react';
import banner from '../../images/banner.jpg';
import bannerAlt from '../../images/banner-tiny.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-2xl font-medium tracking-wide dark:text-gray-800 text-white lg:text-4xl">Find your next level Business experience with US</h1>
                            <p className="mt-2 dark:text-gray-600 text-gray-300">We work with the best remunated dealers in US to find your new products.</p>
                            <div className="grid gap-6 mt-8 sm:grid-cols-2">
                                <div className="flex items-center dark:text-gray-800 -px-3 text-gray-200">
                                    <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className="mx-3">Premium selection</span>
                                </div>

                                <div className="flex items-center dark:text-gray-800 -px-3 text-gray-200">
                                    <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className="mx-3">Insurance</span>
                                </div>

                                <div className="flex items-center dark:text-gray-800 -px-3 text-gray-200">
                                    <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className="mx-3">All legal documents</span>
                                </div>

                                <div className="flex items-center dark:text-gray-800 -px-3 text-gray-200">
                                    <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className="mx-3">From US dealers</span>
                                </div>

                                <div className="flex items-center dark:text-gray-800 -px-3 text-gray-200">
                                    <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className="mx-3">Payment Security</span>
                                </div>

                                <div className="flex items-center dark:text-gray-800 -px-3 text-gray-200">
                                    <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className="mx-3 text-left">Fast shipping (+ Express)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img className="object-cover w-full h-full max-w-2xl rounded-md" src={bannerAlt} alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;