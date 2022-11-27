import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  return (
    <React.Fragment>
      {children}
      <Outlet />
    </React.Fragment>
  );
};

export default DashboardLayout;
