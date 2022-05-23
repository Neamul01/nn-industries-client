import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

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

    const onSubmit = data => {
        console.log(data)
        if (data.password !== data.confirmPassword) {
            setCustomError('Password and Confirm password must be same.')
        }
        createUserWithEmailAndPassword(data.email, data.password)
    };

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])

    if (loading) {
        console.log('loading...')
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

                    <div>
                        <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">Name</label>
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

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                    <a href="!#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login with Social Media</a>

                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                </div>

                <div className="flex items-center mt-6 -mx-2">
                    <button type="button"
                        className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                            <path
                                d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                            </path>
                        </svg>

                        <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                    </button>

                    <a href="!#"
                        className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-200 transform bg-gray-300 rounded-md hover:bg-gray-200">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path
                                d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z">
                            </path>
                        </svg>
                    </a>
                </div>

                <p className="mt-2 text-xs font-light text-center text-gray-400"> Already have an account? <Link to={'/login'}
                    className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;