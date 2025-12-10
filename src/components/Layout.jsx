import React from "react";
import Navbar from "../pages/Navbar";

function Layout({ children, onHandleToggleForm }) {
  return (
    <>
      <Navbar onHandleToggleForm={onHandleToggleForm} />
      <div className="max-w-full min-h-[calc(100vh-81px)] p-4 m-0 bg-[#565050]">
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
