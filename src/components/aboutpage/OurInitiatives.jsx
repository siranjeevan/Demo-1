import React, { useState, useEffect } from 'react';

    const [mounted, setMounted] = useState(false);

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

    const styles = {
        section: {
            width: '100%',
            position: 'relative',
            backgroundColor: '#f8fafc',
            overflow: 'hidden',
            padding: '70px 0 100px 0',
            fontFamily: '"Inter", sans-serif',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
            width: '100%',
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
            fontFamily: '"Inter", sans-serif',
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
        wrapper: {
            width: '100%',
            maxWidth: '1100px',
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
        },
        splitCard: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px -15px rgba(0,0,0,0.1)',
            minHeight: '400px',
        },
        leftPanel: {
            width: '40%',
            backgroundColor: '#014e63',
            padding: '60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            position: 'relative',
            color: 'white',
        },
        decorativeCircle: {
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.05)',
        },
        decorativeCircle2: {
            position: 'absolute',
            bottom: '20px',
            left: '-30px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.05)',
        },
        iconLarge: {
            fontSize: '48px',
            marginBottom: '24px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            width: '80px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '16px',
        },
        panelTitle: {
            fontFamily: '"Playfair Display", serif',
            fontSize: '36px',
            fontWeight: '700',
            color: '#ffffff',
            margin: 0,
            lineHeight: '1.2',
        },
        rightPanel: {
            width: '60%',
            padding: '60px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        subtitle: {
            fontSize: '12px',
            fontWeight: 'bold',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#0ea5e9',
            marginBottom: '20px',
            display: 'block',
        },
        description: {
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#334155',
            marginBottom: '32px',
        },
        statsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
        },
        statBox: {
            backgroundColor: 'white',
            padding: '32px 24px',
            borderRadius: '24px',
            textAlign: 'center',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
            border: '1px solid #f1f5f9',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        statValue: {
            fontSize: '42px',
            fontWeight: '900',
            color: '#014e63',
            marginBottom: '8px',
            lineHeight: '1',
            fontVariantNumeric: 'tabular-nums',
        },
        statLabel: {
            fontSize: '11px',
            fontWeight: '800',
            color: '#64748b',
            textTransform: 'uppercase',
            letterSpacing: '1px',
        }
    };

    return (
        <div style={styles.section}>
             <style>{`
                @media (max-width: 900px) {
                    .initiative-card {
                        flex-direction: column !important;
                    }
                    .initiative-left, .initiative-right {
                        width: 100% !important;
                        padding: 40px !important;
                    }
                    .stats-grid-responsive {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 16px !important;
                    }
                }
                @media (max-width: 500px) {
                    .stats-grid-responsive {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>

            {/* Common Page Header - With Animation */}
            <div style={{...styles.headerWrapper, ...getAnimation(0)}}>
                <div style={styles.headerDividerLine}></div>
                <div style={styles.headerContent}>
                    <span style={styles.subHeader}>Seed of Change</span>
                    <h1 style={styles.mainHeader}>
                        Our Initiatives
                    </h1>
                    <div style={styles.headerFooter}>
                        <span style={styles.smallDivider}></span>
                        <span style={styles.tagline}>Est. 2024</span>
                        <span style={styles.smallDivider}></span>
                    </div>
                </div>
            </div>

            <div style={styles.wrapper}>
                
                {/* 1. Main Feature Card - With Animation */}
                <div style={{...styles.splitCard, ...getAnimation(200)}} className="initiative-card">
                    {/* Left Panel */}
                    <div style={styles.leftPanel} className="initiative-left">
                        <div style={styles.decorativeCircle}></div>
                        <div style={styles.decorativeCircle2}></div>
                        
                        <div style={styles.iconLarge}>🌱</div>
                        <h2 style={styles.panelTitle}>Harmony <br/>for Hope</h2>
                    </div>

                    {/* Right Panel */}
                    <div style={styles.rightPanel} className="initiative-right">
                        <span style={{...styles.subtitle, ...getAnimation(400)}}>Fundraiser Concert Series</span>
                        <p style={{...styles.description, ...getAnimation(500)}}>
                            Through Harmony for Hope, we channel our performances into fundraising efforts that support youth healthcare and health-focused nonprofit organizations. Each concert transforms creativity into tangible support, allowing audiences to contribute to causes that create real impact.
                        </p>
                    </div>
                </div>

                {/* 2. Animated Stats Grid - Removed (Moved to OurImpact.jsx) */}
            </div>
        </div>
    );
}

export default OurInitiatives;
