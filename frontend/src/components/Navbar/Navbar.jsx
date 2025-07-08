import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser, BiCart } from "react-icons/bi";
import { FaCentos } from "react-icons/fa";
import "./Navbar.css";
import { ShopContext } from "../../context/ShopContext";

function Navbar() {
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const { updateSearchTerm, getCartCount, token, setToken, searchTerm } =
    useContext(ShopContext);



const logout = () => {
  navigate("/login")
  localStorage.removeItem("token")
  setToken("")
}

  const navigate = useNavigate();

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
            <h2>فروشگاه لباس</h2>
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
                  <p className="dropdown-item">ورود/ثبت نام</p>
                </Link>
                <Link to='/orders' className="dropdown-item">
                سفارشات
                </Link>
                <p onClick={logout} className="dropdown-item">خروج</p>
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

 <div className="filter-and-products-container">
        {/* filter option */}
        <div className="filter-container">
          {/* category filter */}
          <div className="filter-section">
            <p className="filter-title">جنسیت</p>
            <div className="filter-category">
              <p className="filter-item">
                <input type="checkbox" />
                مردانه
              </p>
              <p className="filter-item">
                <input type="checkbox" />
                زنانه
              </p>
              <p className="filter-item">
                <input type="checkbox" />
                بچگانه
              </p>
            </div>
          </div>
          {/* size category */}
          <div className="filter-section">
            <p className="filter-title">براساس سایز</p>
            <div className="filter-category">
              <p className="filter-item">
                <input type="checkbox" />
                نوجوانان
              </p>
              <p className="filter-item">
                <input type="checkbox" />
                ریز اندام
              </p>
              <p className="filter-item">
                <input type="checkbox" />
                سایز بزرگ
              </p>
            </div>
          </div>
          {/* material filter */}
          <div className="filter-section">
            <p className="filter-title">مواد اولیه</p>
            <div className="filter-category">
              <p className="filter-item">
                <input type="checkbox" />
                پنبه
              </p>
              <p className="filter-item">
                <input type="checkbox" />
                چرم
              </p>
              <p className="filter-item">
                <input type="checkbox" />
                ابریشم
              </p>
              <p className="filter-item">
                <input type="checkbox" />
                چرم جیر
              </p>
            </div>
          </div>
        </div>
        {/* productCotainer */}
        <div className="product-container">
          <div className="product-header">
            <h2>همه محصولات</h2>
            <select name="" className="sort-dropdown" id="">
              <option value="وابسته">مرتب سازی براساس وابستگی</option>
              <option value="پایین-بالا">پایین-بالا</option>
              <option value="بالا-پایین">بالا-پایین</option>
            </select>
          </div>
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
