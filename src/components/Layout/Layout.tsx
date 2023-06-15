import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
