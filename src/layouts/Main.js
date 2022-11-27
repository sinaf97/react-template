import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      {children}
      <Outlet />
    </React.Fragment>
  );
};

export default MainLayout;
