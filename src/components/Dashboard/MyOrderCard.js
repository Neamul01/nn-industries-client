import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CancelOrderModal from './CancelOrderModal';

const MyOrderCard = ({ order, refetch }) => {
    const { _id, name, address, quantity, price, image, paid, transactionId } = order;
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
                    <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">Total price: ${Number(price) * Number(quantity)}</h3>
                    {
                        paid === true
                        &&
                        <p className="text-md font-semibold text-success dark:text-success md:text-md">TransactionId: {transactionId}</p>
                    }
                </div>

                <div className="flex justify-around mt-3 item-center flex-col ">
                    {
                        paid
                            ?
                            <button
                                className="px-4 py-2 text-xs cursor-auto max-h-8 font-bold text-white uppercase transition-colors duration-200 transform bg-gray-400 rounded dark:bg-gray-700   focus:outline-none  ">Paid
                            </button>
                            :
                            <Link
                                to={`/dashboard/payment/${_id}`}
                                className="px-4 py-2 text-xs text-center max-h-8 font-bold text-white uppercase transition-colors duration-200 transform bg-accent rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Pay
                            </Link>
                    }

                    <label
                        disabled={paid === true}
                        onClick={() => setCancel(order)}
                        htmlFor="cancel-order-modal"
                        className={paid === true ? "px-4 py-2 text-xs font-bold text-white uppercase transition-colors duration-200 transform rounded bg-gray-400"
                            : " cursor-pointer font-bold text-white px-4 py-2 text-xs uppercase transition-colors duration-200 transform bg-red-500 rounded dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-600 focus:outline-none focus:bg-red-700 dark:focus:bg-red-600"}>Cancel
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
        </div >
    );
};

export default MyOrderCard;