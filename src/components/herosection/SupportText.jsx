function SupportText() {
    return (
        <div className="absolute bottom-24 left-2 flex flex-col items-start gap-2 z-0">
            <p className="text-white text-3xl font-black tracking-[0.05em] uppercase drop-shadow-sm">Support Music.</p>
            <p className="text-white text-3xl font-black tracking-[0.05em] uppercase drop-shadow-sm">Support Humanity.</p>
            <p className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase border-l-4 border-white/40 pl-4 mt-2">
                Where Every Song Gives Back.
            </p>
            <button className="mt-5 text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:text-white/80 transition-colors duration-300 flex items-center gap-2 group">
                View Details
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
        </div>
    )
}

export default SupportText
