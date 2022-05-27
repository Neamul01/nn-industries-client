import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiFillProfile } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BsNewspaper } from "react-icons/bs";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const { photoURL, displayName, email } = user

    return (
        <div className='py-6 md:pb-8'>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">
                    {/* <!-- Page content here --> */}
                    <h2 className="text-4xl text-primary text-center font-bold pb-4">Dashboard</h2>
                    <label htmlFor="dashboard-sidebar" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>

                    <div className="flex flex-col w-64  py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600 pb-4 overflow-x-hidden">

                        <div className="flex flex-col items-center mt-6 -mx-2">
                            <img className="object-cover w-24 h-24 mx-2 rounded-full" src={photoURL ? photoURL : 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'} alt="avatar" />
                            <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">{displayName}</h4>
                            <h4 className="mx-2 mt-2 font-medium text-success dark:text-gray-200 hover:underline">{admin && 'Admin'}</h4>
                            <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">{email}</p>
                        </div>

                        <div className="flex flex-col justify-between flex-1 mt-6">
                            <nav className='pb-4'>
                                <Link to={'/dashboard'} className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <AiFillProfile />

                                    <span className="mx-4 font-medium">Orders</span>
                                </Link>

                                <Link to={'/dashboard/myreview'} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <MdRateReview />

                                    <span className="mx-4 font-medium">Add Review</span>
                                </Link>

                                <Link to={'/dashboard/myprofile'} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <CgProfile />

                                    <span className="mx-4 font-medium">Profile</span>
                                </Link>

                                <Link to='/dashboard/allorders' className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <BsNewspaper />

                                    <span className="mx-4 font-medium">All Orders</span>
                                </Link>

                                <Link to='/dashboard/addproduct' className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">

                                    <MdOutlineProductionQuantityLimits />

                                    <span className="mx-4 font-medium">Add Product</span>
                                </Link>

                                <Link to='/dashboard/manageproduct' className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <MdOutlineProductionQuantityLimits />

                                    <span className="mx-4 font-medium">Manage Products</span>
                                </Link>

                                <Link to='/dashboard/makeadmin' className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <MdOutlineAdminPanelSettings />

                                    <span className="mx-4 font-medium">Make Admin</span>
                                </Link>
                            </nav>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;