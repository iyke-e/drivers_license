import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="w-screen min-h-screen overflow-hidden">
            <Outlet />
        </div>
    );
};

export default AdminLayout;
