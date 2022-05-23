import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = async data => {
        console.log(data)
        await signInWithEmailAndPassword(data.email, data.password)
    };

    if (user) {
        navigate('/')
    }

    if (loading) {
        console.log('loading...')
    }

    return (
        <div className='py-6 md:py-12'>
            <div className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')" }}></div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">Login</h2>

                    <p className="text-xl text-center text-gray-600 dark:text-gray-200">Welcome back!</p>

                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
                            <input {...register("email", { required: true })} id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                            {errors.email?.type === 'required' && "First name is required"}
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
                                <a href="!#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                            </div>

                            <input {...register("password", { required: true })} id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                            {errors.password?.type === 'required' && "First name is required"}
                        </div>

                        <div className="mt-8">
                            <input
                                type='submit'
                                value='Login'
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                        </div>
                    </form>


                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                        <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login with Social Media</a>

                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                    </div>

                    <div className="flex items-center mt-6 -mx-2">
                        <button type="button"
                            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white btn-active transition-colors duration-200 transform  rounded-md bg-primary hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
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
                    <p className="mt-2 text-xs font-light text-center text-gray-400"> Don't have an account? <Link to={'/signup'}
                        className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;