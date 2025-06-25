import React from 'react'
import {FaFacebook} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="footer-top">
                <h2>آپدیت آخرین پیشنهادات</h2>
                <p>برای دیدن جدیدترین اخبار عضو شوید</p>
                <div className="input">
                    <button> عضو شید</button>
                    <input type="email" name='email' id='' placeholder='ایمیل خود را بنویسید' />
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-left">
                    <h2>فروشگاه کوه</h2>
                    <div className="socials">
                        <FaFacebook className='social-icon' />
                        <FaInstagram className='social-icon'/>
                        <FaYoutube className='social-icon'/>
                    </div>
                </div>
                <div className="footer-right">
                    <ul>
                        <li>خانه</li>
                        <li>سرویس ها</li>
                        <li>درباره ما</li>
                        <li>privacy policy</li>
                    </ul>
                </div>
            </div>
            <p className='copy'>@ 2024 فروشگاه کوه. all rights reseved.</p>
        </div>
    </div>
  )
}

export default Footer