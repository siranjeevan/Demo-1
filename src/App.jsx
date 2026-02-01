import { useState, useEffect } from 'react'
import './index.css' // Ensure tailwind is loaded via index.css
import HeroSection from './components/herosection/HeroSection'
import AboutPage from './components/aboutpage/AboutPage'
import SecondaryNavbar from './components/common/SecondaryNavbar'

import Hero1 from './assets/Hero1.png'
import Hero2 from './assets/Hero2.png'

function App() {
  const [currentPage, setCurrentPage] = useState(0) // 0 = Hero, 1 = About
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

      if (e.deltaY > 0 && currentPage === 0) {
        // Scrolling down - go to About page
        setIsTransitioning(true)
        setCurrentPage(1)
        setTimeout(() => setIsTransitioning(false), 800)
      } else if (e.deltaY < 0 && currentPage === 1) {
        // Scrolling up - go back to Hero
        setIsTransitioning(true)
        setCurrentPage(0)
        setTimeout(() => setIsTransitioning(false), 800)
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
          currentPage === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
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

      {/* About Page - Full Screen (no borders) */}
      <div 
        className={`transition-all duration-700 ease-in-out ${
          currentPage === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <AboutPage isActive={currentPage === 1} />
      </div>
    </>
  )
}

export default App