import React from "react";
import Navbar from "../pages/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="max-w-full h-screen p-4 m-0 bg-[#565050]">
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
