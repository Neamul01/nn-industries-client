import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';
import { request } from '../utils/axios-utils';
import { useForm } from "react-hook-form";


const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [btnDisable, setBtnDisable] = useState(false);
    const [customError, setCustomError] = useState('')

    const { data: singleProduct, isLoading, error } = useQuery('singleProduct', async () => await request({ url: `/products/${id}`, method: 'get' }))

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (error) {
        toast.error(error.message)
    }
    const { product, price, minimumQuantity, image, description, availableQuantity } = singleProduct;

    const handleQuantity = inputQuantity => {
        if (Number(inputQuantity) < Number(minimumQuantity) || Number(inputQuantity) > Number(availableQuantity)) {
            setCustomError('Invalid Quantity..')
            setBtnDisable(true)
        }
        else {
            setBtnDisable(false);
            setCustomError('')
        }
    }

    const formSubmit = data => {
        console.log(data)
        console.log("submit")
    };


    return (
        <section className=" dark:bg-gray-900 lg:py-12 lg:flex lg:justify-around">
            <div className="dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg w-full justify-around">
                <div className="lg:w-1/2">
                    <div className="h-64 bg-cover lg:rounded-lg lg:h-full" style={{ backgroundImage: `url(${image})` }}></div>
                </div>

                <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{product}</h2>
                        <p className='text-left border-y-2 py-2 my-3'>{description}</p>
                        <div className="flex w-full">
                            <p className='text-left font-bold'>Min Quantity: {minimumQuantity} </p>
                            <p className='text-left font-bold'>Available: {availableQuantity} </p>
                        </div>
                        <p className="text-left font-bold w-full ">Price:{price} </p>
                        <form onSubmit={handleSubmit(formSubmit)} className='w-full my-4'>
                            <div >
                                <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200 text-left">Name</label>
                                <input type="text"
                                    // {...register("name", { required: true })}
                                    value={user?.displayName || ''}
                                    disabled
                                    className="block w-full px-4 py-2  text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div className="mt-2">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                                </div>

                                <input type="email"
                                    // {...register("email", { required: true })}
                                    value={user?.email || ''}
                                    disabled
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div>
                                <label htmlFor="username" className="block mt-2 text-sm text-gray-800 dark:text-gray-200 text-left">Address</label>
                                <input type="text"
                                    {...register("address", { required: true })}
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                {errors.address?.type === 'required' && <p className="text-red-500 text-left"><small>"Address is required"</small></p>}
                            </div>
                            <div className='w-full'>
                                <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200 text-left">Quantity</label>
                                <input type="number"
                                    {...register("quantity", {
                                        required: true,
                                        min: minimumQuantity,
                                        max: availableQuantity
                                    })}
                                    onBlur={e => handleQuantity(e.target.value)}
                                    className="block w-1/2 px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                {errors.quantity?.type === 'required' && <p className="text-red-500 text-left"><small>"Quantity is required"</small></p>}
                                {errors.quantity?.type === 'min' && <p className="text-red-500 text-left"><small>"Quantity should more then minimum Quantity"</small></p>}
                                {errors.quantity?.type === 'max' && <p className="text-red-500 text-left"><small>"Quantity should lower then Available Quaantity"</small></p>}
                                {customError && <p className="text-red-500 text-left"><small>{customError}</small></p>}

                            </div>
                            <input
                                type='submit'
                                disabled={btnDisable}
                                value='Place Order'
                                className="btn w-full btn-primary text-left mt-4"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Purchase;