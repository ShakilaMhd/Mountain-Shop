import React from "react";
import { FaCentos } from "react-icons/fa";
import { IoIosLogOut, IoMdAddCircleOutline } from "react-icons/io";
import { MdFormatListBulletedAdd, MdAddShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <FaCentos className="sidebar-logo" />
      </div>
      <div className="sidebar-links">
        <NavLink className="sidebar-link" to="/add">
          <IoMdAddCircleOutline className="sidebar-icon" />
          <p className="sidebar-text">اضافه کردن محصول</p>
        </NavLink>
        <NavLink>
          <MdFormatListBulletedAdd   className="sidebar-icon" />
          <p className="sidebar-text">لیست محصولات</p>
        </NavLink>

        <NavLink className="sidebar-link" to="/orders">
          <MdAddShoppingCart className="sidebar-icon" />
          <p className="sidebar-text">سفارشات</p>
        </NavLink>

        <button className="sidebar-link">
          <IoIosLogOut className="sidevar-icon" />
          <p className="sidebar-text">سفارشات</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
