import React from 'react'
import Navbar from '../../components/navigation/Navbar'
import './blog.scss'
import Footer from '../../components/footer/Footer'

const Blog = () => {
  return (
    <div className='blog-container'>
        <Navbar />

        <div className="blog-banner">
            <div className='blog-darkOverlay'></div>
            <div className="blog-header">
                    <p>Blog Post</p>
            </div>
        </div>

        <div className="blog-nothing">
            <div className="blog-wrapper">
                
            </div>
        </div>

        <Footer />
        
    </div>
  )
}

export default Blog