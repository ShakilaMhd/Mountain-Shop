import React, { useContext, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Footer = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {token, setToken} = useContext(ShopContext)

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
  };

  const handleNavigation = (patch) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    navigate(patch);
  };

  return (
    <div>
      <div className="footer">
        <div className="footer-top">
          <h2>آپدیت آخرین پیشنهادات</h2>
          <p>برای دیدن جدیدترین اخبار عضو شوید</p>
          <div className="input">
            <button onClick={logout}> عضوشوید</button>
            <input
              type="email"
              name="email"
              id=""
              placeholder="ایمیل خود را بنویسید"
            />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-left">
            <h2>لباسکده</h2>
            <div className="socials">
              <FaFacebook className="social-icon" />
              <FaInstagram className="social-icon" />
              <FaYoutube className="social-icon" />
            </div>
          </div>
          <div className="footer-right">
            <ul>
              <Link to="/">
                <li>خانه</li>
              </Link>
              {/* <li>سرویس ها</li> */}
              <Link to="/about">
                <li>درباره ما</li>
              </Link>
              {/* <li>privacy policy</li> */}
            </ul>
          </div>
        </div>
        <p className="copy">فروشگاه لباسکده</p>
      </div>
    </div>
  );
};

export default Footer;
