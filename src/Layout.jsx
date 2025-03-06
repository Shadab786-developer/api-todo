import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./component/Sidebar/Sidebar";

function Layout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default Layout;
