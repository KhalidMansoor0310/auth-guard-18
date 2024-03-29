import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({
    isAuthenticated,
    children,
    adminRoute,
    isAdmin,
    redirect = "/login",
    redirectAdmin = "/profile",
}) => {
    if (!isAuthenticated) {
        return <Navigate to={redirect} />;
    }

    if (adminRoute && !isAdmin) {
        return <Navigate to={redirectAdmin} />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoutes;