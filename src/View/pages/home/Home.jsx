import React from 'react'
import Navbar from '../../components/navigation/Navbar'
import { HeroCarousel } from '../../components/carousel/Carousel'
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

import './home.scss';

function Home() {

  return (
    <div className='home-container'>
        <Navbar />
            {/* Home */}
        <HeroCarousel />

        <div className='services-container'>
                <span className="services-header">Top Services</span>
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
                    {/* <div className="services-item">
                        <div className="image">
                            <img src={kidney} class="" alt="Kidney"/>
                        </div>
                        <div className="description">
                            <h2>Nephrology</h2>
                            <p>Haemodialysis</p>
                            <p>Continuous Renal Replacement Therapy</p>
                            <p>Drug Overdose Clearance</p>
                            <p>Ultrasound Guided Renal Biopsy</p>
                            <p>Renal Transplantation</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="image">
                            <img src={microb} class="" alt="Kidney"/>
                        </div>
                        <div className="description">
                            <h2>Urology</h2>
                            <p>Ultra sound Scan Guided Prostate Biopsy</p>
                            <p>Endoscopic Prostate Surgeries</p>
                            <p>Laser Stone Surgeries</p>
                            <p>Prostate Cancer Treatment</p>
                            <p>Pediatric Urology(Undescended Testis, Hypospadias)</p>
                            <p>Male Infertility Treatment</p>
                            <p>Laparoscopy</p>
                        </div>
                    </div> */}
                </div>
        </div>
    </div>
  )
}

export default Home