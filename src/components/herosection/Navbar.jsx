function Navbar({ onNavigate }) {
    const navItems = ['About', 'Initiatives', 'Impact', 'Events']

    return (
        <nav className="absolute top-10 left-40 z-20">
            <ul className="flex items-center gap-8">
                {navItems.map((item, index) => {
                    const pageMap = {
                        'About': 1,
                        'Initiatives': 3,
                        'Impact': 6,
                        'Events': 7
                    };
                    return (
                        <li key={item} className="relative group">
                            <button
                                onClick={() => onNavigate(pageMap[item])}
                                className="text-[#014e63] text-[13px] font-black uppercase tracking-[0.2em] transition-colors duration-300 block border-none bg-transparent p-0 cursor-pointer"
                            >
                                {item}
                            </button>
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#014e63] group-hover:w-full transition-all duration-300 ease-out"></span>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default Navbar
