import React, { useState } from 'react';
import CancelOrderModal from './CancelOrderModal';

const MyOrderCard = ({ order, refetch }) => {
    const { _id, name, address, quantity, price, image } = order;
    const [cancel, setCancel] = useState(null)
    // console.log(order)



    return (
        <div className="flex max-w-4xl w-full mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-gray-800">
            <div className="w-1/3 bg-cover m-2 rounded-md" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

            <div className="w-2/3 p-4 md:p-4 flex justify-between">
                <div className='flex flex-col gap-2'>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{name}</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Address: {address}</p>
                    <div className='flex gap-2 md:gap-6'>
                        <h3 className="text-md font-semibold text-gray-700 dark:text-gray-200 md:text-md">Quantity: {quantity}</h3>
                        <h3 className="text-md font-semibold text-gray-700 dark:text-gray-200 md:text-md">Price: ${price}</h3>
                    </div>
                    <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">Total price: ${price * quantity}</h3>
                </div>

                <div className="flex justify-around mt-3 item-center flex-col ">
                    <button
                        className="px-4 py-2 text-xs max-h-8 font-bold text-white uppercase transition-colors duration-200 transform bg-accent rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Pay
                    </button>

                    <label
                        onClick={() => setCancel(order)}
                        for="cancel-order-modal"
                        className="px-4 py-2 text-xs cursor-pointer font-bold text-white uppercase transition-colors duration-200 transform bg-red-500 rounded dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-600 focus:outline-none focus:bg-red-700 dark:focus:bg-red-600">Cancel
                    </label>
                </div>
            </div>
            {
                cancel && <CancelOrderModal
                    setCancel={setCancel}
                    cancel={cancel}
                    refetch={refetch}
                ></CancelOrderModal>
            }
        </div>
    );
};

export default MyOrderCard;