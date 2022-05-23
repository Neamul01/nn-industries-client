import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import SocialLogin from './SocialLogin';
import LoadingSpinner from '../Shared/LoadingSpinner';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [customError, setCustomError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const onSubmit = data => {
        console.log(data)
        if (data.password !== data.confirmPassword) {
            setCustomError('Password and Confirm password must be same.')
        }
        else {
            createUserWithEmailAndPassword(data.email, data.password)
        }
    };

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user, navigate])

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='py-6 md:py-12'>
            <div className="w-full max-w-lg p-14 m-auto bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Sign Up</h1>

                <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">Name</label>
                        <input type="text"
                            {...register("name", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {errors.name?.type === 'required' && <span><small className='text-red-500 text-left'>"Name is required"</small></span>}
                    </div>

                    <div className='mt-4'>
                        <label htmlFor="email" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                        <input type="email"
                            {...register("email", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {errors.email?.type === 'required' && <span><small className='text-red-500 text-left'>"Email is required"</small></span>}
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                            <a href="!#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</a>
                        </div>

                        <input type="password"
                            {...register("password", { required: true, maxLength: 20 })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {errors.password?.type === 'required' && <span><small className='text-red-500 text-left'>"Password is required"</small></span>}
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="confirmPassword" className="block text-sm text-gray-800 dark:text-gray-200">Confirm Password</label>
                        </div>

                        <input type="password"
                            {...register("confirmPassword", { required: true, maxLength: 20 })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {errors.confirmPassword?.type === 'required' && <span><small className='text-red-500 text-left'>"Confirm password is required"</small></span>}
                        {customError && <span><small className='text-red-500 text-left'>{customError}</small></span>}
                    </div>

                    <div className="mt-6">
                        <input
                            type='submit'
                            value='Signin'
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                    </div>
                </form>


                <SocialLogin></SocialLogin>

                <p className="mt-2 text-xs font-light text-center text-gray-400"> Already have an account? <Link to={'/login'}
                    className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;