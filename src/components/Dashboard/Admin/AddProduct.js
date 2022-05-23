import React from 'react';

const AddProduct = () => {
    return (
        <div>

            <div className="w-full">

                <div className="w-full max-w-2xl p-6 md:p-16 md:pt-6 pt-4 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-2xl text-center text-secondary font-bold mb-10">Add a Product</h2>
                    <form className="mt-6 w-full">
                        <div className='w-full overflow-hidden'>
                            <label htmlFor="productName" className="block text-sm text-gray-800 dark:text-gray-200">Product Name</label>
                            <input type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>


                        <div className='mt-4'>
                            <label htmlFor="description" className="block text-sm text-gray-800 dark:text-gray-200">Description</label>
                            <textarea type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className=" w-full flex justify-between">
                            <div className="mt-4 w-45">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="minimumQuantity" className="block text-sm text-gray-800 dark:text-gray-200">Minimum Quantity</label>
                                </div>

                                <input type="number"
                                    placeholder='Minimum Quantity...'
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div className="mt-4 w-45">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="availableQuantity" className="block text-sm text-gray-800 dark:text-gray-200">Available Quantity</label>
                                </div>

                                <input type="number"
                                    placeholder='Available Quantity...'
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                        </div>

                        <div className=" w-full flex justify-between">
                            <div className="mt-4 w-50">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="price" className="block text-sm text-gray-800 dark:text-gray-200">Price</label>
                                </div>

                                <input type="number"
                                    placeholder='Price...'
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div className="mt-4 w-50 ml-4">
                                <div className="flex items-center justify-between ml-4">
                                    <label htmlFor="rating" className="block text-sm text-gray-800 dark:text-gray-200">Image</label>
                                </div>

                                <input type="file"
                                    placeholder='Your ratings...'
                                    className="block w-full px-4 py-2 mt-2 text-gray-700  rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
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