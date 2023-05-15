import React from 'react'
import './navbar.scss'; 
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/greyscopes_landscape_brand_white.png';

function Navbar() {
  const navigate = useNavigate()

  return (
    <div className='navBar'>
      <div className="navBar-header-logo">
        <Link to={'/'}  className='link'>
          <img src={logo} alt="greyscopes urology logo" className='nav-logo'/>
        </Link>
      </div>
      <div className="navBar-header-right">
        <Link to={'/'}  className='link'>
          <div>Home</div>
        </Link>
        <Link to={'/about'} className='link'>
          <div>About</div>
        </Link>
        <Link to={'/blog'} className='link'>
          <div>Blog</div>
        </Link>
        <Link to={'/contact'} className='link'>
          <div>Contact Us</div>
        </Link>
        <Link to={'/book'} className='link book'>
          <div>Book Appointment</div>
        </Link>
      </div>
      <div className='navbar-hamburger'>
          <span className="hamOne"></span>
          <span className="hamTwo"></span>
          <span className="hamThree"></span>
      </div>
    </div>
  )
}

export default Navbar