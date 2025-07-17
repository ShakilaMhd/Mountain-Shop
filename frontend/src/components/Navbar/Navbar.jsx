import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser, BiCart } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { FaCentos } from "react-icons/fa";
import "./Navbar.css";
import { ShopContext } from "../../context/ShopContext";

function Navbar() {
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const { updateSearchTerm, getCartCount, token, setToken, searchTerm } =
    useContext(ShopContext);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
    console.log("token pak shod");
  };

  const handleNavigation = (patch) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    navigate(patch);
  };

  const handleSearch = () => {
    updateSearchTerm(searchInput);
  };

  useEffect(() => {
    if (!token) {
      // getCartCount(0)
      navigate("/login");
    }
  }, []);

  return (
    <div>
      {loading && (
        <div className="loader-container">
          <div className="loader">
            {" "}
            <FaCentos className="loader-icon" />
          </div>
        </div>
      )}

      <nav className="navbar">
        <div className="nav-top">
          <Link to="/">
            <h2>لباسکده</h2>
          </Link>

          <div className="search-bar">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="search-input"
              placeholder="محصول خودرا سرچ کنید..."
            />
            <button onClick={handleSearch} className="search-btn">
              جستجو
            </button>
          </div>
          <div className="icons">
            <div className="profile-group">
              <BiUser className="icon" />
              <div className="dropdown-menu">
                <Link to="/login">
                  <p className="dropdown-item">
                    <BiUser className="icon" />
                    ورود/ثبت نام
                  </p>
                </Link>
                <Link to="/orders" className="dropdown-item">
                  <p className="dropdown-item">
                    <BiCart className="icon" />
                    سفارشات
                  </p>
                </Link>
                <p onClick={logout} className="dropdown-item">
                  <IoMdLogOut className="icon" />
                  خروج
                </p>
              </div>
            </div>
            <div
              className="cart-icon"
              onClick={() => handleNavigation("/cart")}
            >
              <BiCart className="icon" />
              <span className="cart-count">{getCartCount()}</span>
            </div>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="nav-container">
            <div
              onClick={() => handleNavigation("/category/Men")}
              className="navbar-link"
            >
              مردانه
            </div>
            <div
              onClick={() => handleNavigation("/category/Women")}
              className="navbar-link"
            >
              زنانه
            </div>
            <div
              onClick={() => handleNavigation("/category/Kids")}
              className="navbar-link"
            >
              بچگانه
            </div>
          </div>

          {/* <div className="nav-container">
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
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
