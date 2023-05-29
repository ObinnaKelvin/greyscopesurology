import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import './carousel.scss'
import bg1 from '../../assets/images/bg9.jpg';
import bg9 from '../../assets/images/bg9.jpg';
import bg10 from '../../assets/images/bg10.jpg';
import bg11 from '../../assets/images/bg11.jpg';
import quote from '../../assets/images/left-quote.png'
import star from '../../assets/images/star.png'
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
                {/* <SwiperSlide>
                    <img src={bg9} alt='beegee 9'/>
                </SwiperSlide> */}

            </Swiper>

        </>
    )
}


export const PeopleSayCarousel = () => {
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
            //  className='peopleSay-wrapper'
             autoplay={{delay: 5000}}
            >
                {/* <div className="overlay"></div> */}
                <SwiperSlide>
                    <div className='peopleSay-card'>
                        <div className='peopleSay-mark'>
                            <img src={quote} alt="Quotation mark"/>
                        </div>
                        <div className='peopleSay-wrapper'>
                            <div className='peopleSay-comment'>
                                {/* <p> */}
                                    Top notch professional service! From the doctors to the nursing staff, 
                                    we received personalized care. The follow up was also amazing! I brought my 
                                    father to Greyscopes at the time when a lot of other hospitals had written him off. 
                                    Turns out all he needed was a specialized surgery that those other places didn't have 
                                    the knowledge and/or expertise for. Surgery was successfully carried out and he has made 
                                    a full recovery. I definitely will recommend this hospital for anyone needing their services
                                {/* </p> */}
                            </div>
                            <div className='peopleSay-user'> — Sylvia Ofoegbu</div>
                            <div className='peopleSay-rating'>
                                {
                                    Array(4).fill(0).map((item, index) => 
                                        <img src={star} alt="Star rating" />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='peopleSay-card'>
                        <div className='peopleSay-mark'>
                            <img src={quote} alt="Quotation mark"/>
                        </div>
                        <div className='peopleSay-wrapper'>
                            <div className='peopleSay-comment'>
                                {/* <p> */}
                                    Top notch professional service! From the doctors to the nursing staff, 
                                    we received personalized care. The follow up was also amazing! I brought my 
                                    father to Greyscopes at the time when a lot of other hospitals had written him off. 
                                    Turns out all he needed was a specialized surgery that those other places didn't have 
                                    the knowledge and/or expertise for. Surgery was successfully carried out and he has made 
                                    a full recovery. I definitely will recommend this hospital for anyone needing their services
                                {/* </p> */}
                            </div>
                            <div className='peopleSay-user'> — Sylvia Ofoegbu</div>
                            <div className='peopleSay-rating'>
                                {
                                    Array(4).fill(0).map((item, index) => 
                                        <img src={star} alt="Star rating" />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )

}