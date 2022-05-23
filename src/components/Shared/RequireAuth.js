import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify';
import LoadingSpinner from './LoadingSpinner';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (error) {
        toast.error(error.message)
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;