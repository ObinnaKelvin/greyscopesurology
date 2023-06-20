import React from 'react';
import './gallery.scss';
import Navbar from '../../components/navigation/Navbar'
import Footer from '../../components/footer/Footer';

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