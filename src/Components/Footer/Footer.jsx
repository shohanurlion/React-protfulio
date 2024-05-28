import React from 'react'
import './Footer.css'
import { FaTwitter,FaInstagramSquare,FaFacebookF,FaLinkedin,FaYoutube   } from "react-icons/fa";
 function Footer() {
  return (
    <>
<div className="footer">
  <div className="container-fluid">
    <div className="container">
      <div className="footer-info">
        <h2>Liton Rahman</h2>
        <h3>123 Street, New York, USA</h3>
        <div className="footer-menu">
          <p>+08801645722096</p>
          <p>info@domain.com</p>
        </div>
        <div className="footer-social">
            <a href="#"><FaTwitter className='ficon'/></a> 
            <a href="#"><FaInstagramSquare className='ficon'/></a> 
            <a href="#"><FaFacebookF className='ficon'/></a> 
            <a href="#"><FaYoutube className='ficon'/></a> 
            <a href="#"><FaLinkedin className='ficon'/></a> 
        </div>
      </div>
    </div>
    <div className="container copyright">
      <p>© <a href="#">Your Site Name</a>, All Rights Reserved | Designed By <a target="_blank" rel="nofollow noopener" href="#">Md.Liton Rhaman.</a></p>
    </div>
  </div>
</div>
    </>
  )
}
export default Footer;