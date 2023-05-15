import React from 'react'
import Navbar from '../../components/navigation/Navbar'
import { HeroCarousel } from '../../components/carousel/Carousel'

function Home() {
  return (
    <div>
        <Navbar />
            {/* Home */}
        <HeroCarousel />
    </div>
  )
}

export default Home