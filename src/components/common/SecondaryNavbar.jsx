import React from 'react';
import Logo from '../../assets/Logo Section.png';

function SecondaryNavbar({ onNavigate }) {
    return (
        <nav 
            style={{
                position: 'fixed',
                top: '24px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%',
                maxWidth: '1100px',
                zIndex: 100,
                padding: '10px 48px',
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                borderRadius: '24px',
                boxShadow: '0 8px 40px rgba(1, 78, 99, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            {/* Left: Navigation Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                {['Home', 'About', 'Who We Are', 'Initiatives', 'Contact'].map((item, index) => (
                    <button
                        key={item}
                        onClick={() => {
                            if (index < 4) onNavigate(index);
                        }}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#1e3a5f',
                            fontSize: '14px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            padding: 0,
                            transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#0284c7'}
                        onMouseLeave={(e) => e.target.style.color = '#1e3a5f'}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Center: Brand Identity */}
            <div 
                onClick={() => onNavigate(0)}
                style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}
            >
                <img src={Logo} alt="Logo" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
            </div>

            {/* Right: Contact Button Only */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button
                    style={{
                        background: 'transparent',
                        border: '2px solid #014e63',
                        color: '#014e63',
                        padding: '10px 32px',
                        borderRadius: '50px',
                        fontSize: '13px',
                        fontWeight: '700',
                        letterSpacing: '0.5px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = '#014e63';
                        e.target.style.color = 'white';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 25px rgba(1, 78, 99, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#014e63';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                    }}
                >
                    Contact Us
                </button>
            </div>
        </nav>
    );
}

export default SecondaryNavbar;
