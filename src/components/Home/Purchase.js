import React from 'react';

const Purchase = () => {
    return (

        <section className=" dark:bg-gray-900 lg:py-12 lg:flex lg:justify-around">
            <div className="dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg w-full justify-around">
                <div className="lg:w-1/2">
                    <div className="h-64 bg-cover lg:rounded-lg lg:h-full" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')" }}></div>
                </div>

                <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="flex w-full">
                            <p className='text-left font-bold'>Min Quantity: </p>
                            <p className='text-left font-bold'>Available:</p>
                        </div>
                        <p className="text-left font-bold w-full ">Price:</p>
                        <div className='w-full my-4'>
                            <div >
                                <label for="username" className="block text-sm text-gray-800 dark:text-gray-200 text-left">Name</label>
                                <input type="text"
                                    className="block w-full px-4 py-2  text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="mt-2">
                                <div className="flex items-center justify-between">
                                    <label for="password" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                                </div>

                                <input type="email"
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label for="username" className="block mt-2 text-sm text-gray-800 dark:text-gray-200 text-left">Address</label>
                                <input type="text"
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div className='w-full'>
                                <label for="username" className="block text-sm text-gray-800 dark:text-gray-200 text-left">Quantity</label>
                                <input type="number"
                                    className="block w-1/2 px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className="text-xs text-gray-600 dark:text-gray-400 text-left">"Quantity should be higher then minimum quantity and less then total quantity."</p>
                            </div>
                        </div>
                        <button className="btn w-full btn-primary text-left">Place Order</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Purchase;