import OurInitiatives from './components/aboutpage/OurInitiatives'
import WhoWeAre from './components/aboutpage/WhoWeAre'
import OurImpact from './components/aboutpage/OurImpact'
import RecentImpact from './components/aboutpage/RecentImpact'
import Footer from './components/common/Footer'
import React, { useState, useEffect } from 'react'
import './index.css' // Ensure tailwind is loaded via index.css
import HeroSection from './components/herosection/HeroSection'
import About from './components/aboutpage/About'
import AboutDetail from './components/aboutpage/AboutDetail'
import InitiativesDetail from './components/aboutpage/InitiativesDetail'
import ImpactDetail from './components/aboutpage/ImpactDetail'
import EventsDetail from './components/aboutpage/EventsDetail'
import ContactDetail from './components/aboutpage/ContactDetail'
import SecondaryNavbar from './components/common/SecondaryNavbar'

import Hero1 from './assets/Hero1.png'
import Hero2 from './assets/Hero2.png'

function App() {
  const [currentPage, setCurrentPage] = useState(0) // 0 = Hero, 1 = About, 2 = Who We Are, 3 = Initiatives, 4 = Contact
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
      // Only handle transition between Hero (0) and Main Content
      if (isTransitioning) return

      if (e.deltaY > 10 && currentPage === 0) {
        // Scrolling down from Hero -> Go to Landing Dashboard (index 5)
        setIsTransitioning(true)
        setCurrentPage(5)
        setTimeout(() => setIsTransitioning(false), 800)
      } else if (e.deltaY < -10 && currentPage === 5) {
        // Scrolling up ONLY from the Dashboard (5) -> Go back to Hero
        // This ensures standalone pages like AboutDetail stay put.
        const mainContent = document.getElementById('main-scroll-container');
        if (mainContent && mainContent.scrollTop === 0) {
            setIsTransitioning(true)
            setCurrentPage(0)
            setTimeout(() => setIsTransitioning(false), 800)
        }
      }
    }

    // Capture wheel events on window
    window.addEventListener('wheel', handleWheel, { passive: true })
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [currentPage, isTransitioning])

  return (
    <>
      {/* Universal Nav */}
      <SecondaryNavbar onNavigate={setCurrentPage} isVisible={currentPage !== 0} />

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
            <HeroSection onNavigate={setCurrentPage} />
        </div>
      </div>

      {/* Main Content Container */}
      <div 
        id="main-scroll-container"
        className={`fixed inset-0 w-full h-full bg-white z-50 overflow-y-auto hide-scrollbar transition-transform duration-700 ease-in-out ${
          currentPage !== 0 ? 'translate-y-0' : 'translate-y-[100vh]'
        }`}
      >
        {/* Separate About Page */}
        {currentPage === 1 && <AboutDetail />}

        {/* Standalone Pages */}
        {currentPage === 2 && <WhoWeAre isActive={true} />}
        {currentPage === 3 && <InitiativesDetail />}
        {currentPage === 4 && <ContactDetail />}
        {currentPage === 6 && <ImpactDetail />}
        {currentPage === 7 && <EventsDetail />}

        {/* Landing Dashboard View (Stacked) */}
        {currentPage === 5 && (
          <>
            <About isActive={true} />
            <OurImpact isActive={true} />
            <WhoWeAre isActive={true} />
            <OurInitiatives isActive={true} />
            <RecentImpact isActive={true} />
          </>
        )}
        
        <Footer />
      </div>
    </>
  )
}

export default App