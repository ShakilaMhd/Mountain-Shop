import React from "react";
import hero_img from "../../assets/woman1.png";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-top">
          <div className="hero-left">
            <h2>سبک منحصر به فرد خود را رها کنید</h2>
            <h1>با مجموعه هایی که به سبک و مد شما اجازه می دهد صحبت کند</h1>
            <p>
              آخرین روندها و ملزومات کلاسیک را از مجموعه های ما خریداری کنید
            </p>
          </div>
          <div className="hero-right">
            <img src={hero_img} alt="" />
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-content">
            <div className="info-icon">
              <FaShippingFast className="hero-icon" />
            </div>
            <div className="detail">
              <h3>حمل و نقل رایگان</h3>
              <p>حمل و نقل رایگان به ترتیب</p>
            </div>
          </div>
          <div className="hero-content">
            <div className="info-icon">
              <FiSend className="hero-icon" />
            </div>
            <div className="detail">
              <h3>تحویل در سراسر جهان</h3>
              <p>ما به همه کشورها تحویل می دهیم</p>
            </div>
          </div>
          <div className="hero-content">
            <div className="info-icon">
              <BiSupport className="hero-icon" />
            </div>

            <div className="detail">
              <h3>پشتیبانی ۲۴ ساعته</h3>
              <p>پشتیبانی کامل از روند</p>
            </div>
          </div>
          <div className="hero-content">
            <div className="info-icon">
              <MdPayment className="hero-icon" />
            </div>

            <div className="detail">
              <h3>پرداخت ایمن</h3>
              <p>پرداخت شما ایمن است</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
