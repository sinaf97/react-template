import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <React.Fragment>
      {children}
      <Outlet />
    </React.Fragment>
  );
};

export default AuthLayout;
