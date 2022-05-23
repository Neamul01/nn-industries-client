import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <h2 className="text-2xl text-center text-secondary font-bold mb-4">Add a Product</h2>

            <div className="w-full">

                <div class="w-full max-w-2xl p-6 md:p-16 md:pt-6 pt-4 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-2xl text-center text-secondary font-bold mb-10">Profile</h2>
                    <form class="mt-6 w-full">
                        <div className='w-full overflow-hidden'>
                            <label for="Name" class="block text-sm text-gray-800 dark:text-gray-200">Name</label>
                            <input type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className='mt-4'>
                            <label for="email" class="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                            <input type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className='mt-4'>
                            <label for="email" class="block text-sm text-gray-800 dark:text-gray-200">College</label>
                            <input type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className=" w-full flex justify-between">
                            <div class="mt-4 w-45">
                                <div class="flex items-center justify-between">
                                    <label for="rating" class="block text-sm text-gray-800 dark:text-gray-200">City</label>
                                </div>

                                <input type="text"
                                    placeholder='Your ratings...'
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div class="mt-4 w-45">
                                <div class="flex items-center justify-between">
                                    <label for="rating" class="block text-sm text-gray-800 dark:text-gray-200">District</label>
                                </div>

                                <input type="text"
                                    placeholder='Your ratings...'
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                        </div>

                        <div className=" w-full flex justify-between">
                            <div class="mt-4 w-50">
                                <div class="flex items-center justify-between">
                                    <label for="rating" class="block text-sm text-gray-800 dark:text-gray-200">City</label>
                                </div>

                                <input type="text"
                                    placeholder='Your ratings...'
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div class="mt-4 w-50">
                                <div class="flex items-center justify-between">
                                    <label for="rating" class="block text-sm text-gray-800 dark:text-gray-200">District</label>
                                </div>

                                <input type="text"
                                    placeholder='Your ratings...'
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                        </div>

                        <div class="mt-6">
                            <button
                                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                Upload
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;