import React from 'react';
import { request } from '../utils/axios-utils';

const CancelOrderModal = ({ setCancel, cancel, refetch }) => {


    const handleDelete = () => {
        request({ url: `/orders/${cancel._id}`, method: 'delete' })
            .then(res => {
                console.log(res)
                refetch();
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <input type="checkbox" id="cancel-order-modal" class="modal-toggle" />
            <label for="cancel-order-modal" class="modal cursor-pointer">
                <label class="modal-box relative" for="cancel-order-modal">
                    <label for="cancel-order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className='flex gap-4'>
                        <button
                            onClick={handleDelete}
                            className="px-4 py-2 text-xs max-h-8 font-bold text-white uppercase transition-colors duration-200 transform bg-accent rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Ok
                        </button>
                        <button
                            onClick={() => setCancel(null)}
                            for="cancel-order-modal"
                            className="px-4 py-2 text-xs cursor-pointer font-bold text-white uppercase transition-colors duration-200 transform bg-red-500 rounded dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-600 focus:outline-none focus:bg-red-700 dark:focus:bg-red-600">cancel
                        </button>
                    </div>
                </label>
            </label>
        </div >
    );
};

export default CancelOrderModal;