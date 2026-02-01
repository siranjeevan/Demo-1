import { useState } from 'react'

function Hero() {
    const [isAnimating, setIsAnimating] = useState(false)

    const triggerAnimation = () => {
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 700)
    }

    return (
        <div className="absolute top-0 right-0 w-[420px] h-[80px] z-10">
            <div className="w-full h-full bg-white rounded-[0_24px_0_60px] border border-[#014e63]/30 backdrop-blur-[20px] relative overflow-hidden flex items-center justify-end pr-10 gap-5 shadow-sm">
                {/* Music Button */}
                <button className="relative z-10 w-12 h-12 bg-[#014e63] rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform duration-300 group border border-[#014e63]/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                    </svg>
                </button>
                {/* Instagram Button */}
                <button className="relative z-10 w-12 h-12 bg-[#014e63] rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform duration-300 group border border-[#014e63]/20">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06zm1.132 1.545c-2.465 0-2.882.013-3.957.062-1.082.05-1.666.216-2.115.391a3.356 3.356 0 00-1.25.814 3.356 3.356 0 00-.814 1.25c-.175.449-.34.933-.391 2.015-.049 1.076-.06 1.586-.06 4.029v.053c0 2.443.012 2.953.06 4.029.049 1.082.216 1.666.391 2.115a3.356 3.356 0 001.25 1.25c.449.175.933.34 2.015.391 1.076.049 1.586.06 4.029.06h.053c2.443 0 2.953-.012 4.029-.06 1.082-.049 1.666-.216 2.115-.391a3.356 3.356 0 001.25-1.25c.175-.449.34-.933.391-2.015.049-1.076.06-1.586.06-4.029v-.053c0-2.443-.012-2.953-.06-4.029-.049-1.082-.216-1.666-.391-2.115a3.356 3.356 0 00-1.25-1.25c-.449-.175-.933-.34-2.015-.391-1.076-.049-1.586-.06-4.029-.06h-.053zM12 7.02c2.722 0 4.98 2.258 4.98 4.98s-2.258 4.98-4.98 4.98c-2.722 0-4.98-2.258-4.98-4.98S9.308 7.02 12 7.02zm0 1.545c-1.879 0-3.435 1.556-3.435 3.435 0 1.879 1.556 3.435 3.435 3.435 1.879 0 3.435-1.556 3.435-3.435 0-1.879-1.556-3.435-3.435-3.435zm5.858-3.329c0 .531-.416.963-.948.963s-.947-.432-.947-.963c0-.531.416-.962.947-.962s.948.432.948.962z" clipRule="evenodd" />
                    </svg>
                </button>
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

                    <span className="absolute left-1/2 -translate-x-1/2 z-10 text-[12.7px] font-black tracking-[0.2em] uppercase font-bold group-hover:text-white transition-colors duration-300">Contact Us</span>

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

export default Hero
