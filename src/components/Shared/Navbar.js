import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className="navbar justify-between bg-gray-100 sticky top-0 z-50 px-4 md:px-8 lg:px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/dashboard'}>Dashboard</Link></li>
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/signup'}>Sign Up</Link></li>
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">N&N Industries</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                    <li><Link to={'/portfolio'}>Portfolio</Link></li>
                    {
                        user ?
                            <button onClick={handleSignOut} className="btn btn-ghost">Sign Out</button>
                            :
                            <Link to={'/login'} className="btn btn-ghost">Sign Up</Link>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;