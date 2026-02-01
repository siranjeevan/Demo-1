import React, { useState, useEffect } from 'react';

function WhoWeAre({ isActive }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (isActive) {
            setTimeout(() => setMounted(true), 100);
        } else {
            setMounted(false);
        }
    }, [isActive]);

    return (
        <div className="w-full relative bg-[#f8fafc] overflow-hidden py-32">
            
            <div className={`w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-16 transition-all duration-1000 ease-out transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                
                {/* 1. Header (Consistent) */}
                <div className="flex flex-col items-center justify-center text-center relative py-2 shrink-0">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#014e63]/5 -z-10"></div>
                    <div className="bg-[#f8fafc] px-8 flex flex-col items-center">
                        <span className="text-[#014e63]/40 text-[10px] font-black tracking-[0.6em] uppercase mb-2">Our Journey</span>
                        <h1 className="text-[#014e63] text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2">
                            Who We Are
                        </h1>
                    </div>
                </div>

                {/* 2. Modern Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                    
                    {/* Block A: The Origin (White Card) */}
                    <div className="md:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-500 flex flex-col gap-6">
                        <div className="w-12 h-12 rounded-full bg-[#e0f2fe] flex items-center justify-center text-[#0284c7] text-xl">🌱</div>
                        <h3 className="text-2xl font-bold text-[#0f172a]">The Beginning</h3>
                        <p className="text-lg text-[#334155] leading-relaxed">
                            We are two young, passionate musicians from Seattle brought together by a shared love for Carnatic music. What began as attending and performing in traditional Carnatic kutcheris slowly grew into a deeper friendship and creative partnership.
                        </p>
                    </div>

                    {/* Block B: The Quote (Dark Teal Card - Visual Anchor) */}
                    <div className="md:col-span-5 md:row-span-2 bg-[#014e63] p-8 md:p-12 rounded-[2.5rem] shadow-2xl flex flex-col justify-between text-white relative overflow-hidden group">
                        {/* Decorative Blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0ea5e9] rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        
                        <div className="relative z-10">
                            <span className="text-[#bae6fd] text-6xl font-serif leading-none">"</span>
                            <p className="text-2xl md:text-3xl font-serif italic leading-tight mt-[-20px] mb-8">
                                That journey led to the formation of Dhwayam, a fusion band rooted in Carnatic music.
                            </p>
                        </div>
                        
                        <div className="relative z-10 border-t border-white/10 pt-8">
                            <span className="text-xs font-bold tracking-widest uppercase text-[#bae6fd]">Our Turning Point</span>
                        </div>
                    </div>

                    {/* Block C: The Evolution (Light Blue Card) */}
                    <div className="md:col-span-7 bg-[#f0f9ff] p-8 md:p-12 rounded-[2.5rem] border border-[#bae6fd]/30 hover:shadow-md transition-shadow duration-500 flex flex-col gap-6">
                         <div className="w-12 h-12 rounded-full bg-[#0ea5e9] flex items-center justify-center text-white text-xl">🚀</div>
                        <h3 className="text-2xl font-bold text-[#0c4a6e]">The Evolution</h3>
                        <p className="text-lg text-[#334155] leading-relaxed">
                             Starting with vocal and violin, we began jamming simply for the joy of making music. As our sound evolved, we started collaborating with other young musicians, blending styles, cultures, and perspectives to create something entirely new.
                        </p>
                    </div>

                </div>

                {/* 3. Bottom Full Width Banner - The Present */}
                <div className="w-full bg-white p-10 md:p-14 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    <div className="flex-1">
                         <span className="text-[#0ea5e9] text-sm font-bold tracking-widest uppercase mb-2 block">Today</span>
                         <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] mb-6 leading-tight">
                            Creating Impact <br/> Through Sound.
                         </h2>
                         <p className="text-lg text-[#475569] leading-relaxed">
                            <strong className="text-[#014e63]">Dhwayam</strong> fuses the timeless beauty of Indian Carnatic music with contemporary sounds to create performances that inspire, connect, and uplift communities.
                         </p>
                    </div>
                    
                    {/* Mission Badge/Circle */}
                    <div className="shrink-0 relative w-48 h-48 flex items-center justify-center">
                        <div className="absolute inset-0 border-2 border-dashed border-[#cbd5e1] rounded-full animate-spin-slow"></div>
                        <div className="text-center">
                            <span className="block text-3xl font-black text-[#014e63]">Mission</span>
                            <span className="text-xs font-bold text-[#64748b] uppercase tracking-wider mt-1 block">Serve & Connect</span>
                        </div>
                    </div>
                </div>

            </div>
             <style>{`
                .animate-spin-slow {
                    animation: spin 10s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}

export default WhoWeAre;
