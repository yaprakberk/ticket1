import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthRoute, MainRoutes } from "../constants/Routes";
import { appLogout } from "../state/slices/authSlice";

const Navbar = () => {
  const navi = useNavigate();

  const logout = async () => {
    await dispatch(appLogout());
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar-container">
        <div className="img-container">
          <img src="/15945.png" alt="logo" />
        </div>
        <NavLink className="link" to={MainRoutes.home}>
          Ana Sayfa
        </NavLink>
        <NavLink className="link" to={MainRoutes.about}>
          Hakkında
        </NavLink>
        <NavLink className="link" to={MainRoutes.cancer}>
          Konser
        </NavLink>
        <NavLink className="link" to={MainRoutes.theatre}>
          Tiyatro
        </NavLink>
        <button
          className="link"
          onClick={async () => {
            await logout();
            await navi(AuthRoute.signup);
            console.log("asd");
          }}>
          Logout
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
