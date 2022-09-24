import React from 'react'
import './footer.css'
import osh from '../images/OSH.jpg'
import logo from '../images/logo-text.jpg'
import icon from '../images/logo-icon.jpg'

const Footer = () => {
  return (
    <div>
      <div className="top_footer">
        <img src={osh} alt="" />
        <div className="blackline_footer"></div>
        <div className="ghs">GHS</div>
        <div className="red_footer"></div>
      </div>
      <div className="footer">
        <div className="division_logo">
          <img src={icon} alt="" />
        </div>
        <div className="divisions_sublogo">
          <img src={logo} alt="" />
          <div className="location">
            <p><i className="fa fa-map-marker" aria-hidden="true"></i>Beavercreek, Ohio, USA</p>
          </div>
          <div className="phone">
            <p><i className="fa fa-phone" aria-hidden="true"></i>+1 937 344 6241</p>
          </div>
          <div className="mail">
            <a href="mailto:info@onesmarter.com"><i className="fa fa-envelope-o" aria-hidden="true"></i>info@onesmarter.com</a>
          </div>
        </div>
        <div className="divisions">
          <div className="heading_foot">PRODUCTS</div>
          <div className="product_detiles">
            <a href="/">HSC ™️ </a>
            <a href="/">MTC ™️ </a>
            <a href="/">SC ™️ </a>
          </div>
        </div>
        <div className="divisions">
          <div className="heading_foot">SERVICES</div>
          <div className="product_detiles">
            <a href="/">100/65 ™️ </a>
            <a href="/">CAM ™️ </a>
            <a href="/">MSUV ™️ </a>
          </div>
        </div>
        <div className="divisions">
          <div className="heading_foot">FOLLOW US</div>
          <div className="social_links">
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer