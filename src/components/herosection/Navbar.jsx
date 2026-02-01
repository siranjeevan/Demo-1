function Navbar() {
    const navItems = ['Explore', 'Artists', 'Causes', 'How It Works']

    return (
        <nav className="absolute top-10 left-40 z-20">
            <ul className="flex items-center gap-8">
                {navItems.map((item, index) => (
                    <li key={item} className="relative group">
                        <a
                            href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                            className="text-[#014e63] text-[13px] font-black uppercase tracking-[0.2em] transition-colors duration-300 block"
                        >
                            {item}
                        </a>
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#014e63] group-hover:w-full transition-all duration-300 ease-out"></span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
