import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BiUser, BiCart } from "react-icons/bi";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (patch) => {
    navigate(patch);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-top">
          <Link to="/">
            <h2>فروشگاه کوه</h2>
          </Link>

          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="محصول خودرا سرچ کنید..."
            />
            <button className="search-btn">جستجو</button>
          </div>
          <div className="icons">
            <div className="profile-group">
              <BiUser className="icon" />
              <div className="dropdown-menu">
                <Link to="/login">
                  <p className="dropdown-item">حساب</p>
                </Link>
                <p className="dropdown-item">خروج</p>
              </div>
            </div>
            <div
              className="cart-icon"
              onClick={() => handleNavigation("/cart")}
            >
              <BiCart className="icon" />
              <span className="cart-count">0</span>
            </div>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="nav-container">
            <div
              onClick={() => handleNavigation("/category/clothes")}
              className="navbar-link"
            >
              لباس
            </div>
            <div
              onClick={() => handleNavigation("/category/tent")}
              className="navbar-link"
            >
              چادر
            </div>
            <div
              onClick={() => handleNavigation("/category/bag")}
              className="navbar-link"
            >
              کوله
            </div>
            <div
              onClick={() => handleNavigation("/category/shoes")}
              className="navbar-link"
            >
              کفش
            </div>
            <div
              onClick={() => handleNavigation("/category/accessories")}
              className="navbar-link"
            >
              لوازم جانبی
            </div>
            <div
              onClick={() => handleNavigation("/category/glasses")}
              className="navbar-link"
            >
              عینک
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
