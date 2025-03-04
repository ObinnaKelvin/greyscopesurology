import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navigation/Navbar'
import './contact.scss'

const Contact = () => {
  return (
    <div className='contact-container'>
        <Navbar />

        <div className="contact-banner">
            <div className='contact-darkOverlay'></div>
            <div className="contact-header">
                    <p>Contact Us</p>
            </div>
        </div>

        <div className="contact-body">
            {/* <div className='contact-wrapper'>
              Hi Hi
              <div className="contact-items-group">

              </div>

              <div className="contact-map">

              </div>

            </div> */}
        </div>
        
        <Footer />
    </div>
  )
}

export default Contact