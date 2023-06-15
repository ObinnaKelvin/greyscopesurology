import { useState } from 'react'
import './navbar.scss'; 
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/greyscopes_landscape_brand.png';

function Navbar() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);    
  const[activeState, setActiveState] = useState(1)

  const switchMenu = (index) => {
    setActiveState(index)
    localStorage.setItem('activeMenu', JSON.stringify(index))
    console.log("Active Menu Index:", activeState)
  }

  const currentMenu = JSON.parse(localStorage.getItem('activeMenu'))
  console.log("Current Menu", currentMenu)

  const toggle = () => {
    setOpen(!open)
    console.log(open)
  }

  return (
    <div className='navBar'>
        <div className="navBar-header">
          <div className="navBar-header-logo">
            <Link to={'/'}  className='link'>
              <img src={logo} alt="greyscopes urology logo" className='nav-logo'/>
            </Link>
          </div>
          <div className="navBar-header-right">
            <Link to={'/'}  className={currentMenu === 1 ? 'link active' : 'link'} onClick={() => switchMenu(1)}>
              <div>Home</div>
            </Link>
            <Link to={'/about'} className={currentMenu === 2 ? 'link active' : 'link'} onClick={() => switchMenu(2)}>
              <div>About</div>
            </Link>
            <Link to={'/blog'} className={currentMenu === 3 ? 'link active' : 'link'} onClick={() => switchMenu(3)}>
              <div>Blog</div>
            </Link>
            <Link to={'/gallery'} className={currentMenu === 4 ? 'link active' : 'link'} onClick={() => switchMenu(4)}>
              <div>Gallery</div>
            </Link>
            <Link to={'/contact-us'} className={currentMenu === 5 ? 'link active' : 'link'} onClick={() => switchMenu(5)}>
              <div>Contact Us</div>
            </Link>
            <Link to={'/book-appointment'} className='link book' onClick={() => switchMenu(6)}>
              <div>Book Appointment</div>
            </Link>
            {/* <div className='navbar-hamburger'>
                <span className="hamOne"></span>
                <span className="hamTwo"></span>
                <span className="hamThree"></span>
            </div> */}
          </div>
          <div className='navbar-hamburger' onClick={toggle}>
                <span className="hamOne"></span>
                <span className="hamTwo"></span>
                <span className="hamThree"></span>
          </div>
        </div>
        <div className={ open ? 'navbar-sidebar open' : 'navbar-sidebar'}>
            {/* <div className="navbar-overlay"></div> */}
            <Link to={'/'}  className={currentMenu === 1 ? 'link active' : 'link'} onClick={() => switchMenu(1)}>
              <div>Home</div>
            </Link>
            <Link to={'/about'} className={currentMenu === 2 ? 'link active' : 'link'} onClick={() => switchMenu(2)}>
              <div>About</div>
            </Link>
            <Link to={'/blog'} className={currentMenu === 3 ? 'link active' : 'link'} onClick={() => switchMenu(3)}>
              <div>Blog</div>
            </Link>
            <Link to={'/gallery'} className={currentMenu === 4 ? 'link active' : 'link'} onClick={() => switchMenu(4)}>
              <div>Gallery</div>
            </Link>
            <Link to={'/contact-us'} className={currentMenu === 5 ? 'link active' : 'link'} onClick={() => switchMenu(5)}>
              <div>Contact Us</div>
            </Link>
            <Link to={'/book-appointment'} className='link book' onClick={() => switchMenu(6)}>
              <div>Book Appointment</div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar