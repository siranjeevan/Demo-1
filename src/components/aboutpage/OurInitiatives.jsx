import React, { useState, useEffect } from 'react';

function OurInitiatives({ isActive }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (isActive) {
            setTimeout(() => setMounted(true), 100);
        } else {
            setMounted(false);
        }
    }, [isActive]);

    const styles = {
        container: {
            position: 'relative', // Changed from fixed
            width: '100vw',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff', 
            zIndex: 10,
            fontFamily: '"Inter", sans-serif',
            overflow: 'hidden',
            opacity: 1, // Always visible
            pointerEvents: 'auto',
        },
        headerSection: {
            textAlign: 'center',
            marginBottom: '60px', // Spacing for title
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 0.8s ease',
        },
        overline: {
            display: 'block',
            color: '#bae6fd', // Light Blue accent (Same as WhoWeAre)
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginBottom: '16px',
            textShadow: '0 2px 10px rgba(0,0,0,0.05)',
        },
        mainTitle: {
            color: '#014e63', // Brand Dark Teal (Same as WhoWeAre)
            fontSize: '60px',
            fontWeight: '900',
            textTransform: 'uppercase',
            margin: 0,
            lineHeight: '1',
            letterSpacing: '-2px',
        },
        gridContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '40px',
            maxWidth: '1200px',
            width: '90%',
            padding: '0 20px',
        },
        card: {
            backgroundColor: '#ffffff', // White Card
            borderRadius: '24px',
            padding: '48px',
            border: '1px solid #e2e8f0', // Slate 200 Border
            boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.05)', // Soft shadow
            transition: 'all 0.4s ease',
            cursor: 'default',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(40px)',
            position: 'relative',
            overflow: 'hidden',
        },
        iconWrapper: { 
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '32px',
            fontSize: '32px',
        },
        cardTitle: {
            color: '#0f172a', // Dark Slate Title
            fontSize: '32px',
            fontWeight: '800',
            marginBottom: '8px',
            letterSpacing: '-0.5px',
        },
        cardSubtitle: {
            color: '#64748b', // Slate 500 Subtitle
            fontSize: '14px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '24px',
            display: 'block',
        },
        cardDescription: {
            color: '#475569', // Slate 600 Body
            fontSize: '16px',
            lineHeight: '1.7',
            fontWeight: '400',
        },
        gradientLine: {
            width: '60px',
            height: '4px',
            borderRadius: '2px',
            marginTop: '32px',
        }
    };

    return (
        <div style={styles.container}>
            
            {/* Header */}
            <div style={styles.headerSection}>
                <span style={{...styles.overline, color: '#0ea5e9'}}>Making An Impact</span>
                <h1 style={styles.mainTitle}>Our Initiatives</h1>
            </div>

            {/* Grid Layout */}
            <div style={styles.gridContainer}>
                
                {/* Initiative 1: Harmony for Hope */}
                <div 
                    style={{...styles.card, transitionDelay: '0.2s'}}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-10px)';
                        e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(1, 78, 99, 0.15)'; // Teal shadow
                        e.currentTarget.style.borderColor = '#bae6fd'; // Light blue border
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(0, 0, 0, 0.05)';
                        e.currentTarget.style.borderColor = '#e2e8f0';
                    }}
                >
                    <div style={{...styles.iconWrapper, background: 'linear-gradient(135deg, #e0f2fe, #bae6fd)', color: '#0284c7'}}>
                        🎵
                    </div>
                    <h3 style={styles.cardTitle}>Harmony for Hope</h3>
                    <span style={styles.cardSubtitle}>Fundraiser Concert Series</span>
                    <p style={styles.cardDescription}>
                        We channel our performances into fundraising efforts that support youth healthcare and health-focused nonprofits. Each concert transforms creativity into tangible support, creating real impact.
                    </p>
                    <div style={{...styles.gradientLine, background: 'linear-gradient(90deg, #0284c7, transparent)'}}></div>
                </div>

                {/* Initiative 2: Together Through Music */}
                <div 
                    style={{...styles.card, transitionDelay: '0.4s'}}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-10px)';
                        e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(13, 148, 136, 0.15)'; // Teal shadow
                        e.currentTarget.style.borderColor = '#99f6e4'; // Teal border
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                         e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(0, 0, 0, 0.05)';
                        e.currentTarget.style.borderColor = '#e2e8f0';
                    }}
                >
                    <div style={{...styles.iconWrapper, background: 'linear-gradient(135deg, #ccfbf1, #99f6e4)', color: '#0d9488'}}>
                        🤝
                    </div>
                    <h3 style={styles.cardTitle}>Together Through Music</h3>
                    <span style={styles.cardSubtitle}>Community Outreach Program</span>
                    <p style={styles.cardDescription}>
                        Bringing live music to senior centers and community spaces as a source of connection and joy. These performances are meaningful human experiences that foster emotional well-being.
                    </p>
                     <div style={{...styles.gradientLine, background: 'linear-gradient(90deg, #0d9488, transparent)'}}></div>
                </div>

            </div>
        </div>
    );
}

export default OurInitiatives;
