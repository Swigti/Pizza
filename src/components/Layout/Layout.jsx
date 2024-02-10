import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import userImg from "../../assets/Intersect.png";
import menuIcon from "../../assets/menu-icon.svg";
import cartIcon from "../../assets/cart-icon.svg";
import group from "../../assets/group.svg";
import { useSelector } from "react-redux";

const Layout = () => {
  const location = useLocation();
  const {user} = useSelector((state)=> state.auth.user)
  console.log(user);
  return (
    <div className="layout">
      <div className="sidebar">
        <div className="user">
          <img src={userImg} alt="" />
          <div className="name">{user?.name}</div>
          <div className="email">{user?.email}</div>
        </div>
        <div className="menu">
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <img src={menuIcon} alt="menu-icon.svg" />
            Menu
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to={"/cart"}
          >
            <img src={cartIcon} alt="" />
            Cart
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to={"/add_product"}
          >
            Add Product
          </NavLink>
        </div>
        <button className="exit btn">
          <img src={group} alt="" />
          Выход
        </button>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
