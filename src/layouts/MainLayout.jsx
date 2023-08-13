import React from "react";
import { Outlet } from "react-router-dom";

// // static import
import NavBar from "../view/navBar/NavBar";

function MainLayout({ isAuthenticated }) {
  if (isAuthenticated) {
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    );
  }
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default MainLayout;
