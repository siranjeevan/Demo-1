import ConcertImg from '../../assets/StockCake-Silhouetted_Concert_Moment-1844489-standard.jpg'
import BandImg from '../../assets/Hero2.png'
import Logo from '../../assets/Logo Section.png'

function AboutPage({ isActive }) {
    return (
        <div className="fixed inset-0 w-screen h-screen bg-[#f8fafc] z-50 flex items-center justify-center p-6 md:p-12 overflow-hidden">
            
            <div className={`w-full max-w-7xl h-full md:h-[90%] grid grid-cols-1 md:grid-cols-12 gap-6 transition-all duration-1000 ease-out transform ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 translate-y-12'}`}>
                
                {/* 1. Header & Story Block (Left Col) - 6 Cols */}
                <div className="md:col-span-6 flex flex-col gap-6 h-full">
                    
                    {/* Header */}
                    <div className="relative rounded-[2rem] p-8 shadow-2xl flex flex-col justify-center items-center h-1/3 overflow-hidden group bg-white border border-[#014e63]/10">
                        {/* Background Logo & Overlay */}
                        <div 
                            className="absolute inset-0 bg-contain bg-center bg-no-repeat animate-float opacity-[0.20]" 
                            style={{ backgroundImage: `url(${Logo})` }}
                        ></div>
                        
                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center gap-1">
                            <span className="text-[#014e63]/60 text-[10px] font-bold tracking-[0.5em] uppercase border-b border-[#014e63]/10 pb-2 mb-2">The Band</span>
                            <h1 className="text-[#014e63] text-5xl md:text-6xl font-black uppercase tracking-tight leading-none">
                                Dhwayam
                            </h1>
                            <p className="text-[#014e63]/40 text-[10px] uppercase tracking-widest mt-1">Est. 2024</p>
                        </div>
                    </div>

                    {/* Story Card */}
                    <div className="bg-white rounded-[2rem] p-12 shadow-xl flex-1 flex flex-col justify-center relative overflow-hidden group border border-[#014e63]/10">
                        <div className="flex flex-col items-center text-center gap-6 relative z-10">
                            
                            {/* Centered Header */}
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-[#014e63]/60 text-xs font-bold tracking-widest uppercase block">We Are</span>
                                <h3 className="text-[#014e63] text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                                    The New Wave
                                </h3>
                                <div className="mt-1">
                                    <span className="bg-transparent border-2 border-[#014e63] text-[#014e63] px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest uppercase">GEN-Z</span>
                                </div>
                            </div>

                            {/* Centered Divider */}
                            <div className="w-24 h-1 bg-[#014e63]/10 rounded-full"></div>

                            {/* Centered Text Content */}
                            <div className="flex flex-col gap-4 max-w-2xl px-12">
                                <p className="text-[#014e63] text-sm md:text-base leading-relaxed font-bold text-center">
                                    As a Gen Z–led Carnatic fusion band, we reimagine classical Carnatic music through contemporary sound, creating experiences that connect generations while driving meaningful social change.
                                </p>
                                <p className="text-[#014e63]/80 text-xs md:text-sm leading-relaxed text-center font-medium">
                                    Through our initiatives <span className="font-bold text-[#014e63]">Harmony for Hope</span> (fundraising concerts) and <span className="font-bold text-[#014e63]">Together Through Music</span> (community outreach), we blend deep Carnatic roots with modern musical expression to uplift communities, support youth healthcare, and spread connection.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Main Visual Area (Right Block) - 6 Cols */}
                <div className="md:col-span-6 grid grid-rows-2 gap-6 h-full">
                    
                    {/* Top: Mission Statement (Hero Card) */}
                    <div className="bg-gradient-to-br from-[#014e63] to-[#003847] rounded-[2rem] p-12 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-xl border border-white/5">
                        {/* Subtle glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-white/5 blur-3xl rounded-full opacity-20 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col items-center gap-6">
                            <span className="text-[#4cc9f0] text-[10px] font-bold tracking-[0.4em] uppercase py-1 px-3 border border-[#4cc9f0]/30 rounded-full">Mission</span>

                            <h2 className="text-white text-2xl md:text-4xl font-medium leading-relaxed md:leading-relaxed">
                                "To use music as a <span className="text-[#4cc9f0] font-bold">bridge</span> between tradition and purpose, transforming performance into <span className="text-[#4cc9f0] font-bold">impact</span>."
                            </h2>
                            
                            <div className="w-12 h-1 bg-[#4cc9f0]/20 rounded-full mt-2"></div>
                        </div>
                    </div>

                    {/* Bottom Split: Photos Only */}
                    <div className="h-full">
                        {/* Photo Mosiac - Full Width */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
                             <div 
                                 className="bg-gray-800 rounded-[1.5rem] relative overflow-hidden group bg-cover bg-center"
                                 style={{ backgroundImage: `url(${ConcertImg})` }}
                             >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-white/90 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">Live</div>
                             </div>
                             <div className="bg-gradient-to-br from-[#e2e8f0] to-[#cbd5e1] rounded-[1.5rem] relative overflow-hidden group">
                                <div className="absolute inset-0 flex items-center justify-center text-[#014e63]/40 text-xs font-bold uppercase tracking-widest group-hover:scale-110 transition-transform duration-500">Studio</div>
                             </div>
                             <div className="bg-gradient-to-br from-[#e2e8f0] to-[#cbd5e1] rounded-[1.5rem] relative overflow-hidden group">
                                <div className="absolute inset-0 flex items-center justify-center text-[#014e63]/40 text-xs font-bold uppercase tracking-widest group-hover:scale-110 transition-transform duration-500">Crowd</div>
                             </div>
                             <div className="bg-[#014e63] rounded-[1.5rem] relative overflow-hidden group">
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-white/40 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors duration-300">Band</div>
                             </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default AboutPage
