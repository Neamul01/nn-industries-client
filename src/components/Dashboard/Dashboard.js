import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiFillProfile } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BsNewspaper } from "react-icons/bs";
// import { FiSettings } from "react-icons/fi";
// import { FiSettings } from "react-icons/fi";

const Dashboard = () => {
    return (
        <div className='py-6 md:pb-8'>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center">
                    {/* <!-- Page content here --> */}
                    <h2 className="text-4xl text-primary text-center font-bold pb-4">Dashboard</h2>
                    <label for="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>

                    <div class="flex flex-col w-64  py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600 pb-4 overflow-x-hidden">

                        <div class="flex flex-col items-center mt-6 -mx-2">
                            <img class="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                            <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">John Doe</h4>
                            <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">john@example.com</p>
                        </div>

                        <div class="flex flex-col justify-between flex-1 mt-6">
                            <nav className='pb-4'>
                                <Link to={'/dashboard/myorder'} class="flex items-center px-4 py-2 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <AiFillProfile />

                                    <span class="mx-4 font-medium">Orders</span>
                                </Link>

                                <Link to={'/dashboard/myreview'} class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <MdRateReview />

                                    <span class="mx-4 font-medium">Add Review</span>
                                </Link>

                                <Link to={'/dashboard/myprofile'} class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <CgProfile />

                                    <span class="mx-4 font-medium">Profile</span>
                                </Link>

                                <Link to='/dashboard/allorders' class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <BsNewspaper />

                                    <span class="mx-4 font-medium">All Orders</span>
                                </Link>

                                <Link to='/dashboard/addproduct' class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">

                                    <MdOutlineProductionQuantityLimits />

                                    <span class="mx-4 font-medium">Add Product</span>
                                </Link>

                                <Link to='/dashboard/manageproduct' class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <MdOutlineProductionQuantityLimits />

                                    <span class="mx-4 font-medium">Manage Products</span>
                                </Link>

                                <Link to='/dashboard/makeadmin' class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <MdOutlineAdminPanelSettings />

                                    <span class="mx-4 font-medium">Make Admin</span>
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