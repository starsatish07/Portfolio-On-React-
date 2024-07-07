import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            I am a frontend developer from, Noida wiht 1years of experience in
            copanies like Small copmany .
          </p>
        </div>
        <div className="footer-top-right">
          <dv className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </dv>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2024 Satish Gupta. All rights</p>
        <div className="footer-bottom-right">
          <p>Term of Servies</p>
          <p> Privacy Policy</p>
          <p> Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;