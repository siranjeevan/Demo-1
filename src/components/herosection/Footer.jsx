import { useState } from 'react'

function Footer() {
    const [isAnimating, setIsAnimating] = useState(false)

    const triggerAnimation = () => {
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 700)
    }

    return (
        <div className="absolute bottom-0 left-0 w-[300px] h-[80px] z-10">
            <div className="w-full h-full bg-white rounded-[0_60px_0_24px] border border-[#014e63]/30 backdrop-blur-[20px] relative overflow-hidden flex items-center justify-center shadow-sm">
                <button
                    onClick={triggerAnimation}
                    className="group relative w-56 h-12 bg-[#014e63] text-white rounded-full border border-[#014e63]/10 hover:border-[#014e63] transition-all duration-500 overflow-hidden shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-end"
                >
                    {/* Ripple Effect on Click */}
                    {isAnimating && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-full bg-white opacity-20 rounded-full animate-ping"></div>
                        </div>
                    )}

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out skew-x-12"></div>

                    <span className="absolute left-1/2 -translate-x-1/2 z-10 text-[12.7px] font-black tracking-[0.2em] uppercase font-bold group-hover:text-white transition-colors duration-300">Donate</span>

                    <div className="relative z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#014e63] shadow-sm group-hover:rotate-45 transition-all duration-300 group-hover:scale-110">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Footer
