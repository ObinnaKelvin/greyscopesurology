import React from 'react'
import Navbar from '../../components/navigation/Navbar'
import './about.scss'

const About = () => {
  return (
    <div className='about-container'>
        <Navbar />

        <div className="about-banner">
            <div className='about-darkOverlay'></div>
            <div className="about-header">
                    <p>About Us</p>
            </div>
        </div>

        <div className="about-journey">
            <div className="about-journey-wrapper">
                    <div className="about-journey-left"></div>
                    <div className="about-journey-right">
                        <span className="about-journey-header">
                            Our Journey
                            <hr className='line'/>
                        </span>
                        <br />
                        <p>
                            Greyscopes Urology was established by Dr Anyadike in 2019.
                            His aim was to set up a modern hi-brid practice where the most advanced endourology care would be offered in the Nigeria.
                            We partner with other specialists and have several visiting urologists who come around to share and learn with us.
                        </p>
                    </div>
            </div>
        </div>
        
    </div>
  )
}

export default About