import React from "react";
import Navbar from "../pages/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl p-4 mx-auto">
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
