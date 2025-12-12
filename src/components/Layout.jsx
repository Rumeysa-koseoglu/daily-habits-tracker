import Navbar from "../pages/Navbar";

function Layout({ children, onHandleToggleForm }) {
  return (
    <>
      <Navbar onHandleToggleForm={onHandleToggleForm} />
      <div>
        <main className="max-w-screen h-screen bg-[#565050]">{children}</main>
      </div>
    </>
  );
}

export default Layout;
