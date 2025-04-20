import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const { user, accessToken } = useSelector((state) => state.auth);

    if (!accessToken || !user || user.role_id !== 1) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;