import React from 'react'
import { Link } from 'react-router-dom';
import icon from '../../assets/images/greyscopes_brand_allwhite.png'
import './footer.scss'
// import coverImage from "../../assets/images/direction.png"
import twitter from "../../assets/images/twitter_wh.png"
import facebook from "../../assets/images/facebook_wh.png"
import instagram from "../../assets/images/instagram_wh.png"
import youtube from "../../assets/images/youtube_wh.png"
// import appoint from "../../assets/images/appointment-book.png"

const Footer = () => {

    const currentYear = new Date().getFullYear();
        
  return (
    <div>
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-col">
                    <img src={icon} alt="" />
                    {/* <div className="logo-text">...we are always available</div> */}
                </div>
                <div className="footer-col">
                    <div className="footer-col-header-text">
                        SITE MAP
                    </div>
                    <div className="footer-col-sub-text">
                        <Link to='/about' className='link'><span>About Us</span></Link>
                        <Link to='/blog' className='link'><span>Blog</span></Link>
                        <Link to='/gallery' className='link'><span>Gallery</span></Link>
                        <Link to='/contact' className='link'><span>Contact Us</span></Link>
                        <Link to='/book-appointment' className='link'><span>Book an appointment</span></Link>
                    </div>

                </div>
                <div className="footer-col">
                    <div className="footer-col-header-text">
                        SOCIAL
                    </div>
                    <div className="footer-col-sub-social">
                        <div className="footer-col-sub-social-link">
                            <img src={facebook} alt='facebook' title="Facebook"/>
                            {/* <div>Facebook</div> */}
                        </div>
                        <div className="footer-col-sub-social-link">
                            <img src={instagram} alt='instagram' title="Instagram"/>
                            {/* <div>Instagram</div> */}
                        </div>
                        <div className="footer-col-sub-social-link">
                            <img src={youtube} alt='youtube' title="Youtube" />
                            {/* <div>Youtube</div> */}
                        </div>
                        <div className="footer-col-sub-social-link">
                            <img src={twitter} alt='twitter' title="Twitter" />
                            {/* <div>Twitter</div> */}
                        </div>
                        {/* <div className="footer-col-sub-social-link">
                            <img src={facebook} />
                            <div>Tiktok</div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="footer-tail">Copyright {currentYear} © All rights reserved</div>
        </div>
    </div>
  )
}

export default Footer