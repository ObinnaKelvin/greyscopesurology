import React from 'react'
import icon from '../../assets/images/greyscopes_brand_allwhite.png'
import './footer.scss'
// import coverImage from "../../assets/images/direction.png"
// import twitter from "../../assets/images/twitter.png"
// import facebook from "../../assets/images/facebook.png"
// import instagram from "../../assets/images/instagram.png"
// import youtube from "../../assets/images/youtube.png"
// import appoint from "../../assets/images/appointment-book.png"

const Footer = () => {
  return (
    <div>
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-col">
                    <img src={icon} alt="" />
                    <div className="logo-text">Greyscopes Urology</div>
                </div>
                <div className="footer-col"></div>
                <div className="footer-col"></div>
            </div>
            <div className="footer-tail"></div>
        </div>
    </div>
  )
}

export default Footer