import React from 'react';
import './gallery.scss';
import Navbar from '../../components/navigation/Navbar'

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

    </div>
  )
}

export default Gallery