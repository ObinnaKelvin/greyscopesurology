import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import './carousel.scss'
import bg1 from '../../assets/images/bg9.jpg';
import bg9 from '../../assets/images/bg9.jpg';
import bg10 from '../../assets/images/bg10.jpg';
import bg11 from '../../assets/images/bg11.jpg';
import 'swiper/swiper-bundle.css'
import SwiperCore, {Autoplay} from 'swiper';

//Import Swiper Styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

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

export const HeroSwiperCarousel = () => {
    SwiperCore.use([Autoplay])
    return (
        <>
            <Swiper
             spaceBetween={30}
             effect={"fade"}
            //  navigation={true}
             navigation={false}
             pagination={{clickakble: true}}
             modules={[EffectFade, Navigation, Pagination]}
             className='heroCarousel-container'
             autoplay={{delay: 5000}}
            >
                {/* <div className="overlay"></div> */}
                <SwiperSlide>
                    <img src={bg1}  alt='beegee 1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bg10} alt='beegee 10'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bg11} alt='beegee 11'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bg9} alt='beegee 9'/>
                </SwiperSlide>

            </Swiper>

        </>
    )
}