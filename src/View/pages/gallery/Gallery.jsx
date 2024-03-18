import React, { useState } from 'react';
import './gallery.scss';
import Navbar from '../../components/navigation/Navbar'
import Footer from '../../components/footer/Footer';
import play from '../../assets/images/play-button.png';
import close from '../../assets/images/close.png';
import vidpic1 from '../../assets/images/interview1.PNG';
import vidpic2 from '../../assets/images/laser1.PNG';
import vidpic3 from '../../assets/images/laser2.PNG';
import vidpic4 from '../../assets/images/endoscopic.PNG';
import vidpic5 from '../../assets/images/kidneystones.PNG';
import vid1 from '../../assets/videos/laser1.mp4';
import vid2 from '../../assets/videos/laser2.mp4';
import vid3 from '../../assets/videos/shomoyeInterview.mp4';
import vid4 from '../../assets/videos/intrarenal.mp4';
// import vid5 from '../../assets/videos/stones.mp4';
import pic1 from '../../assets/images/pic1.jpg';
const vid5 = 'https://firebasestorage.googleapis.com/v0/b/sapphire-15128.appspot.com/o/videos%2Fstones.mp4?alt=media&token=5244f1b0-8c7f-41ed-9d1f-50a4c5022b7d'

const Gallery = () => {
  const[currentVideo, setCurrentVideo] = useState('')

  const playVideo = (video) => {
    setCurrentVideo(video)
  }

  const closeVideo = () => {
    setCurrentVideo('')
  }



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
                    <img className='video-cover' src={vidpic5} alt="interview cover" />
                  <div className="gallery-video-play" onClick={() => playVideo(vid5)}>
                      <img className='play-button' src={play} alt='play button'/>
                    </div>
                  </div>
                  <div className="gallery-video-description">
                    <div className="gallery-video-text1">Procedure</div>
                    <div className="gallery-video-text2">Removal of huge stones in the kidney with laser through a very tiny incision.</div>
                  </div>
              </div>
              <div className="gallery-video-item">
                  <div className="gallery-video-cover">
                    <img className='video-cover' src={vidpic4} alt="interview cover" />
                  <div className="gallery-video-play" onClick={() => playVideo(vid4)}>
                      <img className='play-button' src={play} alt='play button'/>
                    </div>
                  </div>
                  <div className="gallery-video-description">
                    <div className="gallery-video-text1">Procedure</div>
                    <div className="gallery-video-text2">Endoscopic Combined Intrarenal Surgery. The first time it was performed in Nigeria.</div>
                  </div>
              </div>
              <div className="gallery-video-item">
                  <div className="gallery-video-cover">
                    <img className='video-cover' src={vidpic1} alt="interview cover" />
                    {/* <div className="gallery-video-play" onClick={() => playVideo(vid3)}> */}
                  <div className="gallery-video-play" onClick={() => playVideo(vid3)}>
                      <img className='play-button' src={play} alt='play button'/>
                    </div>
                  </div>
                  <div className="gallery-video-description">
                    <div className="gallery-video-text1">Interview</div>
                    <div className="gallery-video-text2">Mr. Shomoye's experience</div>
                  </div>
              </div>
              <div className="gallery-video-item">
                  <div className="gallery-video-cover">
                    <img className='video-cover' src={vidpic2} alt="interview cover" />
                    <div className="gallery-video-play" onClick={() => playVideo(vid1)}>
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
                    <div className="gallery-video-play" onClick={() => playVideo(vid2)}>
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
        
        {/* <div className="video-player">
          <video width="100%" controls autoPlay>
            <source src={currentVideo} type='video/mp4' />
          </video>
        </div> */}
        <div className={currentVideo ? `video-player-wrapper`: `video-player-wrapper inactive`} onClick={() => closeVideo()}>
          <div className={currentVideo ? `video-player`: `video-player inactive`}>
            <div className="close-wrapper" onClick={() => closeVideo()}>
              <img src={close} className='close-btn'/>
            </div>
            <video width="100%" src={currentVideo} controls autoPlay></video>
          </div>
        </div>

        <div className="gallery-pictures">
          <div className="gallery-pictures-header">
            <p>Pictures</p>
          </div>
          <div className="gallery-pictures-wrapper">
            <div className="gallery-pictures-item">
              <img src={pic1} className='pic-cover'/>
            </div>
          </div>
        </div>
      <Footer />

    </div>
  )
}

export default Gallery