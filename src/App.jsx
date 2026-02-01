import OurInitiatives from './components/aboutpage/OurInitiatives'
import WhoWeAre from './components/aboutpage/WhoWeAre'
import OurImpact from './components/aboutpage/OurImpact'
import RecentImpact from './components/aboutpage/RecentImpact'
import Footer from './components/common/Footer'
import React, { useState, useEffect } from 'react'
import './index.css' // Ensure tailwind is loaded via index.css
import HeroSection from './components/herosection/HeroSection'
import About from './components/aboutpage/About'
import SecondaryNavbar from './components/common/SecondaryNavbar'
import Founders from './components/aboutpage/Founders'

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
       // Only handle transition between Hero (0) and Main Content (1)
      if (isTransitioning) return

      if (e.deltaY > 0 && currentPage === 0) {
        // Scrolling down from Hero -> Go to Main Content
        setIsTransitioning(true)
        setCurrentPage(1)
        setTimeout(() => setIsTransitioning(false), 800)
      } else if (e.deltaY < 0 && currentPage === 1) {
        // Scrolling up from Main Content -> Go back to Hero
        // ONLY if we are at the very top of the scroll
        const mainContent = document.getElementById('main-scroll-container');
        if (mainContent && mainContent.scrollTop === 0) {
            setIsTransitioning(true)
            setCurrentPage(0)
            setTimeout(() => setIsTransitioning(false), 800)
        }
      }
    }

    window.addEventListener('wheel', handleWheel)
    return () => window.removeEventListener('wheel', handleWheel)
  }, [currentPage, isTransitioning])

  return (
    <>
      {/* Universal Nav */}
      <div className={`transition-all duration-700 ease-in-out z-[100] ${
        currentPage !== 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <SecondaryNavbar onNavigate={setCurrentPage} isVisible={currentPage !== 0} />
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

      {/* Main Content Container (About -> Who We Are -> Initiatives -> Impact) */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div 
        id="main-scroll-container"
        className={`fixed inset-0 w-full h-full bg-white z-50 overflow-y-auto no-scrollbar transition-transform duration-700 ease-in-out ${
          currentPage === 1 ? 'translate-y-0' : 'translate-y-[100vh]'
        }`}
      >
        <About isActive={currentPage === 1} />
        <OurImpact isActive={currentPage === 1} />
        <WhoWeAre isActive={currentPage === 1} />
        <Founders isActive={currentPage === 1} />
        <OurInitiatives isActive={currentPage === 1} />
        <RecentImpact isActive={currentPage === 1} />
        <Footer />
      </div>
    </>
  )
}

export default App