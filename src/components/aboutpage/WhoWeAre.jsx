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

    const styles = {
        section: {
            width: '100%',
            position: 'relative',
            backgroundColor: '#f8fafc',
            overflow: 'hidden',
            padding: '70px 0',
            fontFamily: '"Inter", sans-serif',
        },
        headerWrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            padding: '8px 0',
            marginBottom: '60px',
            flexShrink: 0,
        },
        headerDividerLine: {
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(1, 78, 99, 0.05)',
            zIndex: 0,
        },
        headerContent: {
            backgroundColor: '#f8fafc',
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
        },
        subHeader: {
            color: 'rgba(1, 78, 99, 0.4)',
            fontSize: '10px',
            fontWeight: '900',
            letterSpacing: '0.6em',
            textTransform: 'uppercase',
            marginBottom: '4px',
        },
        mainHeader: {
            color: '#014e63',
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '-0.05em',
            lineHeight: '1',
            marginBottom: '4px',
        },
        headerFooter: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
        },
        smallDivider: {
            width: '24px',
            height: '1px',
            backgroundColor: 'rgba(1, 78, 99, 0.2)',
        },
        tagline: {
            color: 'rgba(1, 78, 99, 0.4)',
            fontSize: '9px',
            fontWeight: '700',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
        },

        container: {
            maxWidth: '1200px',
            width: '90%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '80px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out',
        },
        leftColumn: {
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
        },
        paragraph: {
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#334155',
            margin: 0,
            fontWeight: '400',
        },
        rightColumn: {
            flex: '0.8',
            width: '100%',
        },
        card: {
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08)',
            border: '1px solid #e2e8f0',
        },
        cardTitle: {
            fontFamily: '"Inter", sans-serif',
            fontSize: '24px',
            fontWeight: '800',
            color: '#014e63',
            marginBottom: '30px',
            marginTop: 0,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
        },
        valuesList: {
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
        },
        valueItem: {
            display: 'flex',
            gap: '20px',
            alignItems: 'flex-start',
        },
        iconBox: {
            color: '#0ea5e9',
            marginTop: '4px',
        },
        valueContent: {
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
        },
        valueTitle: {
            fontSize: '18px',
            fontWeight: '700',
            color: '#0f172a',
            margin: 0,
        },
        valueDesc: {
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#64748b',
            margin: 0,
        },
    };

    return (
        <div style={styles.section}>
            <style>{`
                @media (max-width: 1024px) {
                    .who-we-are-container {
                        flex-direction: column !important;
                        gap: 40px !important;
                    }
                    .who-we-are-right {
                        width: 100% !important;
                        flex: auto !important;
                    }
                }
            `}</style>
            
            {/* Header Section from AboutPage */}
            <div style={styles.headerWrapper}>
                <div style={styles.headerDividerLine}></div>
                <div style={styles.headerContent}>
                    <span style={styles.subHeader}>Our Journey</span>
                    <h1 style={styles.mainHeader}>
                        Who We Are
                    </h1>
                    <div style={styles.headerFooter}>
                        <span style={styles.smallDivider}></span>
                        <span style={styles.tagline}>Est. 2024</span>
                        <span style={styles.smallDivider}></span>
                    </div>
                </div>
            </div>

            <div style={styles.container} className="who-we-are-container">
                
                {/* LEFT COLUMN: Text Content */}
                <div style={styles.leftColumn}>
                    <p style={styles.paragraph}>
                        Dhwayam was born from the shared vision of two young musicians in Seattle, deeply rooted in the rich tradition of Carnatic music yet passionate about addressing the challenges of our generation.
                    </p>
                    <p style={styles.paragraph}>
                        As Gen Z artists, we understand the power of music to transcend boundaries and create meaningful connections. We've taken the classical foundations of Carnatic music and woven them with contemporary sounds to create something uniquely ours—music that honors our heritage while speaking to today's world.
                    </p>
                    <p style={styles.paragraph}>
                        Our journey began with a simple question: How can we use our musical gifts to make a real difference? The answer became Dhwayam—a platform where every note played serves a greater purpose.
                    </p>
                </div>

                {/* RIGHT COLUMN: Values Card */}
                <div style={styles.rightColumn} className="who-we-are-right">
                    <div style={styles.card}>
                        <h2 style={styles.cardTitle}>Our Values</h2>

                        <div style={styles.valuesList}>
                            {/* Value 1 */}
                            <div style={styles.valueItem}>
                                <div style={styles.iconBox}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                                </div>
                                <div style={styles.valueContent}>
                                    <h3 style={styles.valueTitle}>Compassion</h3>
                                    <p style={styles.valueDesc}>Every performance is driven by genuine care for our community.</p>
                                </div>
                            </div>

                            {/* Value 2 */}
                            <div style={styles.valueItem}>
                                <div style={styles.iconBox}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                </div>
                                <div style={styles.valueContent}>
                                    <h3 style={styles.valueTitle}>Unity</h3>
                                    <p style={styles.valueDesc}>Music brings people together across all boundaries.</p>
                                </div>
                            </div>

                            {/* Value 3 */}
                            <div style={styles.valueItem}>
                                <div style={styles.iconBox}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                                </div>
                                <div style={styles.valueContent}>
                                    <h3 style={styles.valueTitle}>Excellence</h3>
                                    <p style={styles.valueDesc}>We strive for the highest quality in both our music and our impact.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default WhoWeAre;
