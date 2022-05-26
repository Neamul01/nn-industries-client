import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { request } from '../utils/axios-utils'
import LoadingSpinner from '../Shared/LoadingSpinner';
import { toast } from 'react-toastify';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1x3aK0JmsF527V0F9dw7yf3UaxzCJYiUTFPOyoYuzDhFTmYt1uIpdCsp9lZALnjYNB1zbCn7PiSRc2VQpbhjLT00oIWbVByj');

const Payment = () => {
    const [processing, setProcessing] = useState(false);
    const { id } = useParams();
    const { data: singleOrder, isLoading, error } = useQuery('singleOrder', async () => await request({ url: `/orders/${id}`, method: 'get' }));

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (error) {
        toast.error(error?.message)
    }
    console.log(singleOrder)


    const { name, address, email, image, price, quantity } = singleOrder;


    return (
        <div className='w-full'>
            {
                processing && <LoadingSpinner></LoadingSpinner>
            }
            <div className="flex max-w-4xl w-full mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-gray-800">
                <div className="w-1/3 bg-cover m-2 rounded-md" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

                <div className="w-2/3 p-4 md:p-4 flex justify-between">
                    <div className='flex flex-col gap-2'>
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{name}</h1>
                        <div className='flex flex-col'>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Email: {email}</p>
                            <p className="my-2 text-sm text-gray-600 dark:text-gray-400">Address: {address}</p>
                        </div>
                        <div className='flex gap-2 md:gap-6'>
                            <h3 className="text-md font-semibold text-gray-700 dark:text-gray-200 md:text-md">Quantity: {quantity}</h3>
                            <h3 className="text-md font-semibold text-gray-700 dark:text-gray-200 md:text-md">Price: ${price}</h3>
                        </div>
                        <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">Total price: ${Number(price) * Number(quantity)}</h3>
                    </div>
                </div>
            </div>

            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm setProcessing={setProcessing} singleOrder={singleOrder} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;