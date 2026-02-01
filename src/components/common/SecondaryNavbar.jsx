import React from 'react';
import Logo from '../../assets/Logo Section.png';
import './SecondaryNavbar.css';

function SecondaryNavbar({ onNavigate, isVisible }) {
    return (
        <nav className={`secondary-navbar ${isVisible ? 'visible' : ''}`}>
            {/* Left: Navigation Links */}
            <div className="secondary-nav-left">
                {['Home', 'About', 'Initiatives', 'Impact', 'Events'].map((item) => {
                    const pageMap = {
                        'Home': 5,
                        'About': 1,
                        'Initiatives': 3,
                        'Impact': 6,
                        'Events': 7,
                        'Contact': 4
                    };
                    return (
                        <button
                            key={item}
                            onClick={() => onNavigate(pageMap[item])}
                            className="secondary-nav-link"
                        >
                            {item}
                        </button>
                    );
                })}
            </div>

            {/* Center: Brand Identity */}
            <div className="secondary-nav-center" onClick={() => onNavigate(0)}>
                <img src={Logo} alt="Logo" className="secondary-nav-logo" />
            </div>

            {/* Right: Contact Button Only */}
            <div className="secondary-nav-right">
                <button
                    className="secondary-nav-btn"
                    onClick={() => onNavigate(4)}
                >
                    Contact Us
                </button>
            </div>
        </nav>
    );
}

export default SecondaryNavbar;
