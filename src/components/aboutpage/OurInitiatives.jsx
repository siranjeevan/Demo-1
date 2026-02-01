import React, { useState, useEffect } from 'react';

function OurInitiatives({ isActive }) {
    const [mounted, setMounted] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(0);

    useEffect(() => {
        if (isActive) {
            setTimeout(() => setMounted(true), 100);
        } else {
            setMounted(false);
        }
    }, [isActive]);

    // Helper for staggered animations
    const getAnimation = (delay) => ({
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateX(0)' : 'translateX(30px)',
        transition: `all 0.8s ease-out ${delay}ms`,
    });

    const initiatives = [
        {
            id: 1,
            title: "Harmony for Hope",
            subtitle: "Fundraiser Concerts",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
            ),
            color: "#0ea5e9", // Sky
            gradient: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)",
            desc: "Through Harmony for Hope, we channel our performances into fundraising efforts that support youth healthcare and health-focused nonprofit organizations.",
        },
        {
            id: 2,
            title: "Together Through Music",
            subtitle: "Community Outreach",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
            ),
            color: "#14b8a6", // Teal
            gradient: "linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)",
            desc: "Bringing live music regarding shared musical experiences to senior centers and community spaces, using music as a source of connection and joy.",
        },
        {
            id: 3,
            title: "Social Impact Impact",
            subtitle: "Youth Welfare",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            ),
            color: "#f43f5e", // Rose
            gradient: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)",
            desc: "Helping ensure young people globally have access to the care, support, and opportunities they need to thrive.",
        }
    ];

    const styles = {
        section: {
            width: '100%',
            position: 'relative',
            backgroundColor: '#ffffff',
            padding: '80px 0',
            fontFamily: '"Inter", sans-serif',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        
        // Main Container: Side-by-Side Architectural Layout
        container: {
            width: '100%',
            maxWidth: '1200px',
            height: '400px', // Compact height
            display: 'flex',
            alignItems: 'stretch',
            gap: '60px',
            padding: '0 24px',
        },

        // --- Left Side: Header & Context ---
        headerSide: {
            flex: '0 0 300px', // Fixed width
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            ...getAnimation(0),
        },
        decorativeLine: {
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #014e63, #0ea5e9)',
            marginBottom: '24px',
            borderRadius: '2px',
        },
        badge: {
            fontSize: '11px',
            fontWeight: '800',
            letterSpacing: '2px',
            color: '#94a3b8',
            textTransform: 'uppercase',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
        },
        mainHeader: {
            fontSize: '48px',
            fontWeight: '900',
            color: '#014e63',
            lineHeight: '1.1',
            letterSpacing: '-1px',
            marginBottom: '24px',
            fontFamily: '"Playfair Display", serif',
        },
        statRow: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
        },
        statNumber: {
            fontSize: '64px',
            fontWeight: '800',
            color: 'rgba(1, 78, 99, 0.1)',
            lineHeight: '1',
        },
        statLabel: {
            fontSize: '14px',
            fontWeight: '600',
            color: '#64748b',
            maxWidth: '100px',
            lineHeight: '1.4',
        },

        // --- Right Side: Interactive Gallery ---
        gallerySide: {
            flex: 1,
            display: 'flex',
            gap: '16px',
            ...getAnimation(200),
        },
        card: (index) => ({
            flex: hoveredIndex === index ? 4 : 1, // High contrast ratio
            background: hoveredIndex === index 
                ? '#014e63' // Brand Teal for all expanded cards
                : '#f1f5f9',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '24px',
            boxShadow: hoveredIndex === index 
                ? '0 20px 40px -10px rgba(0,0,0,0.3)' 
                : 'inset 0 0 0 1px rgba(0,0,0,0.05)',
        }),
        
        cardContent: {
            opacity: 1,
            transition: 'all 0.4s ease',
            transform: 'translateY(0)',
            width: '100%', // Ensure text doesn't wrap weirdly when small
        },

        // Icon
        iconBox: (index) => ({
            position: 'absolute',
            top: '24px',
            left: '24px',
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            backgroundColor: hoveredIndex === index ? 'rgba(255,255,255,0.2)' : 'white',
            color: hoveredIndex === index ? 'white' : '#64748b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.4s ease',
            backdropFilter: 'blur(10px)',
        }),

        // Text
        cardTitle: (index) => ({
            fontSize: hoveredIndex === index ? '24px' : '0px', // Hide title when collapsed? Or rotate?
            fontWeight: '700',
            color: hoveredIndex === index ? 'white' : 'transparent',
            marginBottom: '8px',
            whiteSpace: 'nowrap',
            opacity: hoveredIndex === index ? 1 : 0,
            transform: hoveredIndex === index ? 'translateX(0)' : 'translateX(-10px)',
            transition: 'all 0.4s ease',
            fontFamily: '"Playfair Display", serif',
        }),
        
        cardDesc: (index) => ({
            fontSize: '14px',
            lineHeight: '1.6',
            color: 'rgba(255,255,255,0.9)',
            maxHeight: hoveredIndex === index ? '200px' : '0px',
            opacity: hoveredIndex === index ? 1 : 0,
            overflow: 'hidden',
            transition: 'all 0.5s ease',
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
        }),

        // Vertical label for collapsed state
        verticalLabel: (index) => ({
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%) rotate(-90deg)',
            whiteSpace: 'nowrap',
            fontSize: '12px',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: '#94a3b8',
            opacity: hoveredIndex === index ? 0 : 1,
            transition: 'opacity 0.3s ease',
        })
    };

    return (
        <div style={styles.section}>
             <style>{`
                @media (max-width: 900px) {
                    .initiative-container {
                        flex-direction: column !important;
                        height: auto !important;
                        gap: 40px !important;
                    }
                    .header-side {
                        flex: none !important;
                        text-align: center !important;
                        align-items: center !important;
                    }
                    .gallery-side {
                        flex-direction: column !important;
                        height: 500px !important;
                        width: 100% !important;
                    }
                }
            `}</style>

            <div style={styles.container} className="initiative-container">
                
                {/* 1. Architectural Header (Left Side) */}
                <div style={styles.headerSide} className="header-side">
                    <div style={styles.decorativeLine}></div>
                    <span style={styles.badge}>
                        What We Do
                    </span>
                    <h1 style={styles.mainHeader}>
                        Our <br/>Initiatives
                    </h1>
                    
                    <div style={styles.statRow}>
                        <span style={styles.statNumber}>03</span>
                        <span style={styles.statLabel}>Core Programs Active</span>
                    </div>
                </div>

                {/* 2. Interactive Gallery (Right Side) */}
                <div style={styles.gallerySide} className="gallery-side">
                    {initiatives.map((init, index) => (
                        <div
                            key={init.id}
                            style={styles.card(index)}
                            onMouseEnter={() => setHoveredIndex(index)}
                        >
                            {/* Icon */}
                            <div style={styles.iconBox(index)}>
                                {init.icon}
                            </div>

                            {/* Collapsed Label */}
                            <span style={styles.verticalLabel(index)}>
                                {init.subtitle}
                            </span>

                            {/* Expanded Content */}
                            <div style={styles.cardContent}>
                                <h3 style={styles.cardTitle(index)}>{init.title}</h3>
                                <p style={styles.cardDesc(index)}>
                                    {init.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurInitiatives;
