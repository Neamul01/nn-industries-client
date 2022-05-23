import React from 'react';

const AddReview = () => {
    return (
        <div className='w-full'>
            <h2 className="text-2xl text-center text-secondary font-bold mb-4">Add a Review</h2>
            <div className="w-full">

                <div class="w-full max-w-lg p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">

                    <form class="mt-6 w-full">
                        <div className='w-full'>
                            <label for="Name" class="block text-sm text-gray-800 dark:text-gray-200">Name</label>
                            <input type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center justify-between">
                                <label for="rating" class="block text-sm text-gray-800 dark:text-gray-200">Rating</label>
                            </div>

                            <input type="number"
                                placeholder='Your ratings...'
                                class="block w-1/3 px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center justify-between">
                                <label for="description" class="block text-sm text-gray-800 dark:text-gray-200">Description</label>
                            </div>

                            <textarea type="number"
                                placeholder='Please write more about us...'
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="mt-6">
                            <button
                                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                Submit
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddReview;