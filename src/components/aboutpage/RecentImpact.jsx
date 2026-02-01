import React, { useState, useEffect } from 'react';

function RecentImpact({ isActive }) {
    const [mounted, setMounted] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

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
        transform: mounted ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.8s ease-out ${delay}ms`,
    });

    const events = [
        {
            id: 1,
            date: "November 2025",
            title: "Sankara Healthcare",
            desc: "Raised funds to provide prosthetics for 100 children, giving them new hope and mobility.",
            stat: "100 Children",
            subStat: "Helped",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 0 0 5 2h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a.3.3 0 0 0-.2.5l5 7a.3.3 0 0 0 .5-.2v-7a1 1 0 0 1 1-1h5a.3.3 0 0 1 .2.5l-8 11a.3.3 0 0 1-.5-.2v-6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a.3.3 0 0 0 .3.3H4.8z"></path></svg>
            )
        },
        {
            id: 2,
            date: "October 2025",
            title: "Microsoft Giving",
            desc: "Partnered with Asha for Education & REDP to support educational initiatives through music.",
            stat: "$4,000",
            subStat: "Raised",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            )
        },
        {
            id: 3,
            date: "October 2025",
            title: "Diwali at Aegis",
            desc: "Brought joy and cultural celebration to senior community members through live performances.",
            stat: "50+",
            subStat: "Seniors",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            )
        }
    ];

    const styles = {
        section: {
            width: '100%',
            position: 'relative',
            backgroundColor: '#f8fafc',
            padding: '100px 0',
            fontFamily: '"Inter", sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '80vh',
        },
        container: {
            width: '100%',
            maxWidth: '1200px',
            padding: '0 24px',
            position: 'relative',
        },

        // --- Minimalist Header ---
        headerWrapper: {
            textAlign: 'center',
            marginBottom: '60px',
        },
        badge: {
            backgroundColor: 'rgba(1, 78, 99, 0.08)',
            color: '#014e63',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            marginBottom: '16px',
            border: '1px solid rgba(1, 78, 99, 0.1)',
            display: 'inline-block',
        },
        mainHeader: {
            fontSize: '48px',
            fontWeight: '900',
            color: '#014e63', // Brand Teal
            letterSpacing: '-1px',
            margin: 0,
            fontFamily: '"Playfair Display", serif',
        },

        // --- Modern Card Grid ---
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
        },

        // Card Styles
        card: (index) => ({
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '32px',
            position: 'relative',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Springy
            cursor: 'pointer',
            border: hoveredIndex === index ? '1px solid #014e63' : '1px solid transparent', // Brand Border on hover
            transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)',
            boxShadow: hoveredIndex === index 
                ? '0 25px 50px -12px rgba(1, 78, 99, 0.15)'
                : '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '320px', // Uniform height
        }),

        // Top Of Card
        cardTop: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '20px',
        },
        dateTag: {
            fontSize: '11px',
            fontWeight: '700',
            color: '#94a3b8',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            backgroundColor: '#f1f5f9',
            padding: '6px 12px',
            borderRadius: '8px',
        },
        iconCircle: (index) => ({
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: hoveredIndex === index ? '#014e63' : '#f1f5f9',
            color: hoveredIndex === index ? 'white' : '#64748b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
        }),

        // Middle Content
        content: {
            flex: 1,
        },
        cardTitle: {
            fontSize: '22px',
            fontWeight: '700',
            color: '#0f172a',
            marginBottom: '12px',
            fontFamily: '"Playfair Display", serif',
            lineHeight: '1.2',
        },
        cardDesc: {
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#64748b',
        },

        // Bottom Stat
        statArea: (index) => ({
            marginTop: '24px',
            paddingTop: '20px',
            borderTop: '1px solid #f1f5f9',
            display: 'flex',
            alignItems: 'baseline',
            gap: '8px',
            color: hoveredIndex === index ? '#014e63' : '#334155', // Change color on hover
            transition: 'color 0.3s ease',
        }),
        statValue: {
            fontSize: '32px',
            fontWeight: '800',
            fontFamily: '"Inter", sans-serif',
            letterSpacing: '-1px',
        },
        statLabel: {
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: '#94a3b8',
        }
    };

    return (
        <div style={styles.section}>
             <style>{`
                @media (max-width: 900px) {
                    .impact-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .impact-card {
                        height: auto !important;
                        min-height: 280px;
                    }
                }
            `}</style>
            
            <div style={styles.container}>
                
                {/* Header */}
                <div style={{...styles.headerWrapper, ...getAnimation(0)}}>
                    <span style={styles.badge}>Recent Stories</span>
                    <h1 style={styles.mainHeader}>Making a Difference</h1>
                </div>

                <div style={styles.grid} className="impact-grid">
                    {events.map((event, index) => (
                        <div 
                            key={event.id} 
                            style={{...styles.card(index), ...getAnimation(index * 150 + 200)}}
                            className="impact-card"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            
                            {/* Top: Date & Icon */}
                            <div style={styles.cardTop}>
                                <span style={styles.dateTag}>{event.date}</span>
                                <div style={styles.iconCircle(index)}>
                                    {event.icon}
                                </div>
                            </div>

                            {/* Middle: Title & Text */}
                            <div style={styles.content}>
                                <h3 style={styles.cardTitle}>{event.title}</h3>
                                <p style={styles.cardDesc}>{event.desc}</p>
                            </div>

                            {/* Bottom: Big Stat */}
                            <div style={styles.statArea(index)}>
                                <span style={styles.statValue}>{event.stat}</span>
                                <span style={styles.statLabel}>{event.subStat}</span>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default RecentImpact;
