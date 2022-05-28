import React from 'react';
import { FaHandsHelping } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";

const Speciality = () => {
    return (
        <section className="bg-white dark:bg-gray-900 rounded-md    ">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our <span className="text-blue-500">Speciality</span></h1>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl shadow-lg dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            <FaHandsHelping className='text-7xl' />
                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Trusted</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            We are trusted to our coustomers. Our Customers give us good feedback and we have high number of repeated coustomers.
                        </p>

                    </div>

                    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl shadow-lg dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            <FaClock className='text-7xl' />
                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Punctual</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            We give our delivery to our Customers on time. Coustomers is happy with our Services and they are happy to business with us.
                        </p>

                    </div>

                    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl shadow-lg dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            <FaBalanceScale className='text-7xl' />
                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Quality products</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            Our all products are qualityfull and international standard. We give a long time warranty to our coustomers .
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Speciality;