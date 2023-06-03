import React from 'react'
import Navbar from '../../components/navigation/Navbar'
import { HeroCarousel, HeroSwiperCarousel, PeopleSayCarousel } from '../../components/carousel/Carousel'
import kidney from "../../assets/images/kidneys.gif"
import microb from "../../assets/images/microorganism.gif"
import fertilization from "../../assets/images/fertilization.gif"
import testicular from "../../assets/images/testicular.gif"
import dropper from "../../assets/images/dropper.gif"
import pills from "../../assets/images/pills.gif"
import microorg from "../../assets/images/microorg.gif"
import microscope from "../../assets/images/microscope.gif"
import laser from "../../assets/images/laser.gif"
import tube from "../../assets/images/tube.gif"
import thermometer from "../../assets/images/thermometer.gif"
import vasectomy from "../../assets/images/vasectomy.gif"
import people from "../../assets/images/group.png"
import doctor from "../../assets/images/doctor.png"
import medal from "../../assets/images/medal.png"
import machine from "../../assets/images/ventilation.png"
import stethoscope from "../../assets/images/stethoscope.png"
import ambulance from "../../assets/images/ambulance.png"
import clock from "../../assets/images/clock.png"
import pin from "../../assets/images/pin.png"
import call from "../../assets/images/call.png"
import email from "../../assets/images/open.png"
import coverImage from "../../assets/images/direction.png"
import twitter from "../../assets/images/twitter.png"
import facebook from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
import youtube from "../../assets/images/youtube.png"
import appoint from "../../assets/images/appointment-book.png"
import CountUp from 'react-countup';
// import { faPeopleArrows, faPeopleLine } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './home.scss';

function Home() {

  return (
    <div className='home-container'>
        <Navbar />
            {/* Home */}
        {/* <HeroCarousel /> */}
        <HeroSwiperCarousel />

        <div className='services-container'>
                {/* <hr className='line'/> */}
                <span className="services-header">
                    Professional Services
                    <hr className='line'/>
                </span>
                <div className="services-wrapper">
                    <div className="services-item">
                        <div className="image">
                            <img src={kidney} class="" alt="Kidney"/>
                        </div>
                        <div className="description">
                            <p>Haemodialysis</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="image">
                            <img src={dropper} class="" alt="Kidney"/>
                        </div>
                        <div className="description">
                            <p>Continuous Renal Replacement Therapy</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="image">
                            <img src={pills} class="" alt="Kidney"/>
                        </div>
                        <div className="description">
                            <p>Drug Overdose Clearance</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="image">
                            <img src={microb} class="" alt="Kidney"/>
                        </div>
                        <div className="description">
                            <p>Ultrasound Guided Renal Biopsy</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="image">
                            <img src={tube} class="" alt="Kidney"/>
                        </div>
                        <div className="description">
                            <p>Renal Transplantation</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="image">
                            <img src={microorg} class="" alt="Kidney"/>
                        </div>
                        <div className="description">
                            <p>Ultra sound Scan Guided Prostate Biopsy</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="image">
                            <img src={vasectomy} class="" alt="Kidney"/>
                        </div>
                        <div className="description">
                            <p>Endoscopic Prostate Surgeries</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="image">
                            <img src={laser} class="" alt="Kidney"/>
                        </div>
                        <div className="description">
                            <p>Laser Stone Surgeries</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="image">
                            <img src={testicular} class="" alt="Kidney"/>
                        </div>
                        <div className="description">
                            <p>Prostate Cancer Treatment</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="image">
                            <img src={thermometer} class="" alt="Kidney"/>
                        </div>
                        <div className="description">
                            <p>Pediatric Urology</p>
                            {/* <p>Pediatric Urology(Undescended Testis, Hypospadias)</p> */}
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="image">
                            <img src={fertilization} class="" alt="Kidney"/>
                        </div>
                        <div className="description">
                            <p>Male Infertility Treatment</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="image">
                            <img src={microscope} class="" alt="Kidney"/>
                        </div>
                        <div className="description">
                            <p>Laparoscopy</p>
                        </div>
                    </div>
                </div>
                    

        </div>

        
        <div className="stats-wrapper">
            <div className="stats-item">
                <div className="stat-icon-holder">
                    <img src={people} className="stat-icon" alt='happy clients'/>
                </div>
                <div className="stat-figure"><CountUp end={500} duration={2} enableScrollSpy={true}/>+</div>
                <div className="stat-description">Happy Patients</div>
            </div>
            <div className="stats-item">
                <div className="stat-icon-holder">
                    <img src={doctor} className="stat-icon doctor" alt='Professional Doctors'/>
                </div>
                <div className="stat-figure doctor"><CountUp end={1500} duration={2} enableScrollSpy={true}/>+</div>
                <div className="stat-description">Consultations</div>
            </div>
            <div className="stats-item">
                <div className="stat-icon-holder">
                    <img src={medal} className="stat-icon experience" alt='Years of Experience'/>
                </div>
                <div className="stat-figure experience"><CountUp end={20} duration={2} enableScrollSpy={true}/>+</div>
                <div className="stat-description">Years of Experience</div>
            </div>
        </div>

        <div className="whyUs-container">
                <div className="whyUs-wrapper">
                    <span className="whyUs-header">
                        Why Choose Greyscopes Urology?
                        <hr className='line'/>
                    </span>
                    <div className="whyUs-items">
                        <div className="whyUs-item active">
                            <div className="whyUs-item-header">
                                <img src={stethoscope} className="whyUs-icon" alt='Qualified Specialists'/>
                                <p><strong>Qualified Specialists</strong></p>
                            </div>
                            <div className="whyUs-description">
                                <p>Our team of more than 20 professionals have trained in the UK and abroad, creating a highly skilled,
                                    friendly and multi-lingual team to best serve our patient's needs.
                                </p>
                            </div>
                        </div>
                        <div className="whyUs-item">
                            <div className="whyUs-item-header">
                                <img src={machine} className="whyUs-icon" alt='High-end equipments'/>
                                <p>Modern Equipments</p>
                            </div>
                            <div className="whyUs-description">
                                <p>We boast a pleathora of first-class medical equipment for top-notch diagnostics and quality care. </p>
                            </div>
                        </div>
                        <div className="whyUs-item">
                            <div className="whyUs-item-header">
                                <img src={ambulance} className="whyUs-icon" alt='Emergency Diagnostics'/>
                                <p>Emergency Diagnostics</p>
                            </div>
                            <div className="whyUs-description">
                                <p>Our emergency diagnostics service help you get the most accurate diagnosis in a minimal time.</p>
                            </div>
                        </div>
                        <div className="whyUs-item">
                            <div className="whyUs-item-header">
                                <img src={clock} className="whyUs-icon" alt='Emergency Diagnostics'/>
                                <p>Quick Response</p>
                            </div>
                            <div className="whyUs-description">
                                <p>Because our patients are our priority, we ensure that they experience zero to minimal delay.</p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>

        <div className='consult-container'>
            <div className='consult-darkOverlay'></div>
            <div className="consult-wrapper">
                <div className="consult-left">
                    <p>We've been there. We understand.</p>
                    <p>Everything we do is driven by our universal mission to enhance
                        the lives of our patients.
                    </p>
                </div>
                <div className="consult-right">
                        <div className='consult-button'>
                            <p>Book an Appointment</p>
                        </div>
                </div>
            </div>
        </div>

        <div className='reachOut-container'>
                <div className="reachOut-wrapper">
                    <div className="reachOut-left">
                        <div className="headerText">
                            <p><h1>Looking for Advice?</h1></p>
                            <p>Let's talk about your health and how we can help you feel better.</p>
                        </div>
                        <div className="location">
                            <p><img class="reachout-icon" src={pin} alt="location" /></p>
                            <p>9B Idejo street, Victoria Island Lagos.</p>
                        </div>
                        <div className="phone">
                            <p><img class="reachout-icon" src={call} alt="phone" /></p>
                            <p>08033382044</p>
                        </div>
                        <div className="email">
                            <p><img class="reachout-icon" src={email} alt="email" /></p>
                            <p>greyscopesurology@gmail.com</p>
                        </div>
                    </div>
                    <div className="reachOut-right">
                        <div className="msg-form">
                            <p className='msg-form-header'>Drop us a Message!</p>
                            <form>
                                <section>
                                        <input type="text" className="formInput" placeholder="Your name"/>
                                        <input type="text" className="formInput" placeholder="Your email"/>
                                </section>
                                <section>
                                        <textarea className="formTextArea" type="text" placeholder="Message"/>
                                </section>
                                <button className='send-button'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
        </div>

        <div className='peopleSay-container'>
            <div className='peopleSay-darkOverlay'></div>
            <PeopleSayCarousel />
        </div>
    </div>
  )
}

export default Home