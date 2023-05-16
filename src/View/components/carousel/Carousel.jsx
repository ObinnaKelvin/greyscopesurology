import React from 'react'
import './carousel.scss'
import bg1 from '../../assets/images/bg9.jpg';
// function Carousel() {
//   return (
//     <div>Carousel</div>
//   )
// }

// export default Carousel

export const HeroCarousel = () => {
    return(
        <div className='heroCarousel-container'>
            {/* <img src={bg1} alt="carousel background" /> */}
            {/* Hero Carousel */}
            <div className="overlay"></div>
            <div className="dots">
                <div className="dot active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <img src={bg1} alt="carousel background" />
        </div>
    )
}