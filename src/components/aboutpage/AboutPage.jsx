import ConcertImg from '../../assets/StockCake-Silhouetted_Concert_Moment-1844489-standard.jpg'
import BandImg from '../../assets/Hero2.png'
import Logo from '../../assets/Logo Section.png'
import Hero1 from '../../assets/Hero1.png'

function AboutPage({ isActive }) {
    return (
        <div className="fixed inset-0 w-screen h-screen bg-[#f8fafc] z-50 flex items-center justify-center p-6 md:p-12 pt-56 md:pt-64 pb-16 md:pb-24 overflow-hidden">
            
            <div className={`w-full max-w-7xl h-full flex flex-col gap-8 transition-all duration-1000 ease-out transform ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 translate-y-12'}`}>
                
                {/* 0. Common Page Header - Elegant & Clear */}
                <div className="flex flex-col items-center justify-center text-center relative py-2 shrink-0">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#014e63]/5 -z-10"></div>
                    <div className="bg-[#f8fafc] px-6 flex flex-col items-center">
                        <span className="text-[#014e63]/40 text-[10px] font-black tracking-[0.6em] uppercase mb-1">The Collective</span>
                        <h1 className="text-[#014e63] text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-1">
                            Dhwayam
                        </h1>
                        <div className="flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-[#014e63]/20"></span>
                            <span className="text-[#014e63]/40 text-[9px] font-bold tracking-widest uppercase">Est. 2024</span>
                            <span className="w-6 h-[1px] bg-[#014e63]/20"></span>
                        </div>
                    </div>
                </div>

                {/* 2. Main Bento Grid - Flexible Height */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 flex-1 min-h-0">
                    
                    {/* 1. Left Block - Full Height Story Card */}
                    <div className="md:col-span-6 min-h-0 h-full">
                        {/* Story Card */}
                        <div className="bg-white rounded-[2rem] p-10 md:p-12 shadow-xl h-full flex flex-col justify-center relative overflow-hidden group border border-[#014e63]/10">
                            {/* Decorative background element */}
                            <div 
                                className="absolute -top-20 -left-20 w-64 h-64 bg-[#014e63]/5 rounded-full blur-3xl group-hover:bg-[#014e63]/10 transition-all duration-700"
                            ></div>
                            
                            <div className="flex flex-col items-center text-center gap-6 md:gap-8 relative z-10">
                                {/* Centered Header */}
                                <div className="flex flex-col items-center gap-3 md:gap-4">
                                    <span className="text-[#014e63]/60 text-xs font-bold tracking-widest uppercase block">We Are</span>
                                    <h3 className="text-[#014e63] text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none text-center">
                                        The <span className="text-[#0284c7] text-2xl md:text-5xl font-bold tracking-widest ml-2 uppercase">New Wave</span>
                                    </h3>
                                    <div className="mt-1">
                                        <span className="bg-transparent border-2 border-[#014e63] text-[#014e63] px-5 py-2 rounded-full text-[12px] font-black tracking-widest uppercase">GEN-Z</span>
                                    </div>
                                </div>

                                {/* Centered Divider */}
                                <div className="w-24 h-1.5 bg-[#014e63]/10 rounded-full"></div>

                                {/* Centered Text Content */}
                                <div className="flex flex-col gap-4 md:gap-6 max-w-xl px-4">
                                    <p className="text-[#014e63] text-sm md:text-base lg:text-lg leading-relaxed font-bold text-center">
                                        As a Gen Z–led Carnatic fusion band, we reimagine classical Carnatic music through contemporary sound, creating experiences that connect generations while driving meaningful social change.
                                    </p>
                                    <p className="text-[#014e63]/80 text-[11px] md:text-sm lg:text-base leading-relaxed text-center font-medium">
                                        Through our initiatives <span className="font-bold text-[#014e63]">Harmony for Hope</span> (fundraising concerts) and <span className="font-bold text-[#014e63]">Together Through Music</span> (community outreach), we blend deep Carnatic roots with modern musical expression to uplift communities, support youth healthcare, and spread connection.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Right Block */}
                    <div className="md:col-span-6 grid grid-rows-2 gap-5 md:gap-6 min-h-0 h-full">
                        
                        {/* Top: Mission Statement (Hero Card) */}
                        <div className="bg-gradient-to-br from-[#014e63] to-[#003847] rounded-[2rem] p-10 md:p-12 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-xl border border-white/5">
                            {/* Subtle glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-white/5 blur-3xl rounded-full opacity-20 pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6">
                                <span className="text-[#4cc9f0] text-[10px] font-bold tracking-[0.4em] uppercase py-1 px-3 border border-[#4cc9f0]/30 rounded-full">Mission</span>

                                <h2 className="text-white text-xl md:text-3xl lg:text-4xl font-medium leading-relaxed">
                                    "To use music as a <span className="text-[#4cc9f0] font-bold">bridge</span> between tradition and purpose, transforming performance into <span className="text-[#4cc9f0] font-bold">impact</span>."
                                </h2>
                                
                                <div className="w-12 h-1 bg-[#4cc9f0]/20 rounded-full mt-2"></div>
                            </div>
                        </div>

                        {/* Bottom Split: Photos Only */}
                        <div className="min-h-0 h-full">
                            {/* Photo Mosiac - Two Large Images */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                                 <div 
                                     className="bg-gray-800 rounded-[1.5rem] relative overflow-hidden group bg-cover bg-center shadow-lg h-full"
                                     style={{ backgroundImage: `url(${Hero1})` }}
                                 >
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-white/90 text-sm font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-4">The Moment</div>
                                 </div>
                                 
                                 <div className="bg-[#014e63] rounded-[1.5rem] relative overflow-hidden group shadow-lg border border-white/5 h-full">
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 h-full" 
                                        style={{ backgroundImage: `url(${BandImg})` }}
                                    ></div>
                                    <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-[#4cc9f0]/20 transition-all duration-700"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-white/90 text-sm font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 relative z-10 text-center px-4">The Band</div>
                                 </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default AboutPage
