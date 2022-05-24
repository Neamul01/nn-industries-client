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
    const { _id,product, price, minimumQuantity, image, description, availableQuantity } = singleProduct;

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

    const onSubmit = data => {
        const order={
            productId:id,
            name:user.displayName,
            email:user.email,
            address:data.address,
            quantity:data.quantity,
            phone:data.phone,
        }
        console.log(order)
        request({url:'/orders',method:'post',data:order})
        .then(res=>{
            toast.success('Order placed successfully...')
        })
        .catch(err=>{
            toast.error(err?.message)
        })
        reset()
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
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 w-full">
                        <div className='w-full'>
                            <label htmlFor="Name" className="block text-sm text-gray-800 dark:text-gray-200 text-left">Name</label>
                            <input type="text"
                            defaultValue={user?.displayName||''}
                            disabled
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className='w-full mt-4'>
                            <label htmlFor="email" className="block text-sm text-gray-800 dark:text-gray-200 text-left">Email</label>
                            <input type="email"
                            defaultValue={user?.email||''}
                            disabled
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className='w-full mt-4'>
                            <label htmlFor="address" className="block text-sm text-gray-800 dark:text-gray-200 text-left">Address</label>
                            
                            <input type="text"
                            {...register("address",{
                                required: true
                            })}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                {errors.address?.type === 'required' && <p className="text-red-500 text-left"><small>"Address is required"</small></p>}
                        </div>

                        <div className='w-full mt-4'>
                            <label htmlFor="phone" className="block text-sm text-gray-800 dark:text-gray-200 text-left">Phone Number</label>
                            
                            <input type="number"
                            {...register("phone",{
                                required: true
                            })}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                {errors.number?.type === 'required' && <p className="text-red-500 text-left"><small>"Number is required"</small></p>}
                        </div>

                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <label htmlFor="quantity" className="block text-sm text-gray-800 dark:text-gray-200">Quantity</label>
                            </div>

                            <input type="number"
                            {...register("quantity",{
                                required: true,
                                min: minimumQuantity,
                                max: availableQuantity
                            })}
                            onBlur={e=>handleQuantity(e.target.value)}
                                placeholder='Quantity...'
                                className="block w-1/3 px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                {errors.quantity?.type === 'required' && <p className="text-red-500 text-left"><small>"Quantity is required"</small></p>}
                                {errors.quantity?.type === 'min' && <p className="text-red-500 text-left"><small>"Quantity should more then minimum Quantity"</small></p>}
                                {errors.quantity?.type === 'max' && <p className="text-red-500 text-left"><small>"Quantity should lower then Available Quaantity"</small></p>}
                                {customError && <p className="text-red-500 text-left"><small>{customError}</small></p>}
                        </div>

                        <div className="mt-6">
                            <input type='submit'
                            value='submit'
                            disabled={btnDisable===true}
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"/>
                                
                        </div>

                    </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Purchase;