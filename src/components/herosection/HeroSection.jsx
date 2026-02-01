import Hero from './Hero'
import Footer from './Footer'
import Navbar from './Navbar'
import SupportText from './SupportText'
import SloganText from './SloganText'
import logo from '../../assets/LogoSection.png'

function HeroSection({ onNavigate }) {
    return (
        <>
            <img src={logo} alt="Logo" className="absolute top-4 left-8 w-23 h-auto z-20 drop-shadow-lg" />
            <Navbar onNavigate={onNavigate} />
            <Hero />
            <Footer />
            <SupportText />
            <SloganText />
        </>
    )
}

export default HeroSection
