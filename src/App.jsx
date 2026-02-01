import OurInitiatives from './components/aboutpage/OurInitiatives'
import WhoWeAre from './components/aboutpage/WhoWeAre'
import React, { useState, useEffect } from 'react'
import './index.css' // Ensure tailwind is loaded via index.css
import HeroSection from './components/herosection/HeroSection'
import AboutPage from './components/aboutpage/AboutPage'
import SecondaryNavbar from './components/common/SecondaryNavbar'

import Hero1 from './assets/Hero1.png'
import Hero2 from './assets/Hero2.png'

function App() {
  const [currentPage, setCurrentPage] = useState(0) // 0 = Hero, 1 = About, 2 = Who We Are, 3 = Initiatives
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [currentHeroImage, setCurrentHeroImage] = useState(0)
  const heroImages = [Hero1, Hero2]

  // Image Slideshow Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleWheel = (e) => {
      if (isTransitioning) return

      if (e.deltaY > 0) {
        // Scrolling down
        if (currentPage < 3) {
            setIsTransitioning(true)
            setCurrentPage(prev => prev + 1)
            setTimeout(() => setIsTransitioning(false), 800)
        }
      } else if (e.deltaY < 0) {
        // Scrolling up
        if (currentPage > 0) {
            setIsTransitioning(true)
            setCurrentPage(prev => prev - 1)
            setTimeout(() => setIsTransitioning(false), 800)
        }
      }
    }

    window.addEventListener('wheel', handleWheel)
    return () => window.removeEventListener('wheel', handleWheel)
  }, [currentPage, isTransitioning])

  return (
    <>
      {/* Universal Nav for Inner Pages */}
      <div className={`transition-all duration-700 ease-in-out z-[100] ${
        currentPage !== 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <SecondaryNavbar onNavigate={setCurrentPage} />
      </div>

      <div 
        className={`w-full h-full rounded-3xl border-[0px] border-[#014e63] flex flex-col relative transition-all duration-700 ease-in-out overflow-hidden ${
          currentPage === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none fixed inset-0'
        }`}
      >
        {/* Background Image Slideshow */}
        {heroImages.map((img, index) => (
            <div
                key={index}
                className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-all duration-[2000ms] ease-in-out transform ${
                    index === currentHeroImage ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-sm'
                }`}
                style={{ backgroundImage: `url(${img})` }}
            />
        ))}

        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full">
            <HeroSection />
        </div>
      </div>

      {/* About Page */}
      <div 
        className={`transition-all duration-700 ease-in-out ${
          currentPage === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <AboutPage isActive={currentPage === 1} />
      </div>

      {/* Who We Are Page */}
      <div 
        className={`transition-all duration-700 ease-in-out ${
          currentPage === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <WhoWeAre isActive={currentPage === 2} />
      </div>

      {/* Our Initiatives Page */}
      <div 
        className={`transition-all duration-700 ease-in-out ${
          currentPage === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <OurInitiatives isActive={currentPage === 3} />
      </div>
    </>
  )
}

export default App