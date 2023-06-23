import React from 'react';
import './gallery.scss';
import Navbar from '../../components/navigation/Navbar'
import Footer from '../../components/footer/Footer';
import play from '../../assets/images/play-button.png';
import vidpic1 from '../../assets/images/interview1.PNG';
import vidpic2 from '../../assets/images/laser1.PNG';
import vidpic3 from '../../assets/images/laser2.PNG';

const Gallery = () => {
  return (
    <div className='gallery-container'>
        <Navbar />

        <div className="gallery-banner">
            <div className='gallery-darkOverlay'></div>
            <div className="gallery-header">
                    <p>Gallery</p>
            </div>
        </div>

        <div className="gallery-videos">
          <div className="gallery-videos-header">
            <p>Videos</p>
          </div>
          <div className="gallery-videos-wrapper">
              <div className="gallery-video-item">
                  <div className="gallery-video-cover">
                    <img className='video-cover' src={vidpic1} alt="interview cover" />
                    <div className="gallery-video-play">
                      <img className='play-button' src={play} alt='play button'/>
                    </div>
                  </div>
                  <div className="gallery-video-description">
                    <div className="gallery-video-text1">Interview</div>
                    <div className="gallery-video-text2">Endoscopic Combined Intrarenal Surgery on Mr. Shomoye</div>
                  </div>
              </div>
              <div className="gallery-video-item">
                  <div className="gallery-video-cover">
                    <img className='video-cover' src={vidpic2} alt="interview cover" />
                    <div className="gallery-video-play">
                      <img className='play-button' src={play} alt='play button'/>
                    </div>
                  </div>
                  <div className="gallery-video-description">
                    <div className="gallery-video-text1">Procedure</div>
                    <div className="gallery-video-text2">Laser Lithotripsy (Part 1)</div>
                  </div>
              </div>
              <div className="gallery-video-item">
                  <div className="gallery-video-cover">
                    <img className='video-cover' src={vidpic3} alt="interview cover" />
                    <div className="gallery-video-play">
                      <img className='play-button' src={play} alt='play button'/>
                    </div>
                  </div>
                  <div className="gallery-video-description">
                    <div className="gallery-video-text1">Procedure</div>
                    <div className="gallery-video-text2">Laser Lithotripsy (Part 2)</div>
                  </div>
              </div>
          </div>
        </div>

        <div className="gallery-pictures">
          <div className="gallery-pictures-header">
            <p>Pictures</p>
          </div>
          <div className="gallery-pictures-wrapper">
            
          </div>
        </div>
      <Footer />

    </div>
  )
}

export default Gallery