import React from 'react';

const ProductUpdate = () => {
    return (
        <section className=' py-6 md:py-8 lg:py-24'>
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-md">
                <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-around">
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                        Get Out Products Update
                    </h2>

                    <div className="mt-8 lg:mt-0">
                        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                            <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address" />

                            <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                Submit
                            </button>
                        </div>

                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">Please provide your email to get our latest product update.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductUpdate;