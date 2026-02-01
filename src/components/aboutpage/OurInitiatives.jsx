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
        section: {
            width: '100%',
            position: 'relative',
            backgroundColor: '#f8fafc',
            overflow: 'hidden',
            padding: '70px 0',
            fontFamily: '"Inter", sans-serif',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        // Common Header Styles
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
        // Content Styles
        container: {
            maxWidth: '1200px',
            width: '90%',
            margin: '0 auto',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out',
        },
        featuredCard: {
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: '60px',
            boxShadow: '0 20px 40px -12px rgba(1, 78, 99, 0.08)',
            border: '1px solid #e2e8f0',
            borderTop: '6px solid #0ea5e9',
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
        },
        featureIcon: {
            fontSize: '64px',
            marginBottom: '16px',
            display: 'inline-block',
        },
        featureTitle: {
            fontFamily: '"Inter", sans-serif',
            fontSize: '32px',
            fontWeight: '800',
            color: '#014e63',
            margin: 0,
            letterSpacing: '-0.5px',
        },
        featureSubtitle: {
            fontSize: '14px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: '#0ea5e9',
            marginTop: '-16px', // Pull it closer to title
        },
        featureText: {
            fontSize: '20px',
            lineHeight: '1.7',
            color: '#475569',
            maxWidth: '750px',
            margin: '0 auto',
            fontWeight: '400',
        },
        featureHighlight: {
            color: '#0f172a',
            fontWeight: '600',
        },
    };

    return (
        <div style={styles.section}>
            {/* Common Page Header */}
            <div style={styles.headerWrapper}>
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

            <div style={styles.container}>
                <div style={styles.featuredCard}>
                    <div style={styles.featureIcon}>🌱</div>
                    
                    <h2 style={styles.featureTitle}>Harmony for Hope</h2>
                    <span style={styles.featureSubtitle}>Fundraiser Concert Series</span>
                    
                    <p style={styles.featureText}>
                        Through Harmony for Hope, we channel our performances into fundraising efforts that support youth healthcare and health-focused nonprofit organizations. Each concert transforms creativity into tangible support, allowing audiences to contribute to causes that create real impact.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OurInitiatives;
