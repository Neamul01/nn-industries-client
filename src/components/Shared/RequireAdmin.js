import React from 'react';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner'
import { signOut } from 'firebase/auth';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (!user || !admin) {
        signOut(auth);
        localStorage.removeItem("accessToken")
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default RequireAdmin;