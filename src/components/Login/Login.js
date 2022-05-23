import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import SocialLogin from './SocialLogin';
import LoadingSpinner from '../Shared/LoadingSpinner';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password)
    };

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user, navigate, from])

    if (loading) {
        console.log('loading...')
        return <LoadingSpinner></LoadingSpinner>
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
                    <SocialLogin></SocialLogin>
                    <p className="mt-2 text-xs font-light text-center text-gray-400"> Don't have an account? <Link to={'/signup'}
                        className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;