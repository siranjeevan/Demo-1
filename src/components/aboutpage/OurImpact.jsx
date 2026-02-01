import React, { useState, useEffect } from 'react';

function OurImpact({ isActive }) {
    const [mounted, setMounted] = useState(false);
    const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);

    const stats = [
        { id: 1, value: 15000, label: "Total Funds Raised", prefix: "$", suffix: "+" },
        { id: 2, value: 25, label: "Events Completed", prefix: "", suffix: "+" },
        { id: 3, value: 500, label: "Communities Reached", prefix: "", suffix: "+" },
        { id: 4, value: 3, label: "Ongoing Initiatives", prefix: "", suffix: "" },
    ];

    useEffect(() => {
        if (isActive) {
            setTimeout(() => setMounted(true), 100);
        } else {
            setMounted(false);
            setAnimatedValues([0, 0, 0, 0]);
        }
    }, [isActive]);

    useEffect(() => {
        if (mounted) {
            stats.forEach((stat, index) => {
                const duration = 2500;
                const startTime = Date.now();
                const endValue = stat.value;

                const animate = () => {
                    const now = Date.now();
                    const progress = Math.min((now - startTime) / duration, 1);
                    const ease = 1 - Math.pow(1 - progress, 4);
                    
                    const currentValue = Math.floor(ease * endValue);
                    
                    setAnimatedValues(prev => {
                        const newVals = [...prev];
                        newVals[index] = currentValue;
                        return newVals;
                    });

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                };
                requestAnimationFrame(animate);
            });
        }
    }, [mounted]);

    // Animation Helper
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
            padding: '70px 0',
            fontFamily: '"Inter", sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // No min-height 100vh since it's a stats section, maybe fit content or at least significant padding
            minHeight: '60vh', 
        },
        headerWrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            padding: '8px 0',
            marginBottom: '80px',
            width: '100%',
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
        container: {
            width: '100%',
            maxWidth: '1200px',
            padding: '0 24px',
        },
        statsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
        },
        statBox: {
            backgroundColor: 'white',
            padding: '48px 32px',
            borderRadius: '32px',
            textAlign: 'center',
            boxShadow: '0 20px 50px -20px rgba(0,0,0,0.1)',
            border: '1px solid #f1f5f9',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s ease',
        },
        statValue: {
            fontSize: '48px', // Larger font for separate page
            fontWeight: '900',
            color: '#014e63',
            marginBottom: '12px',
            lineHeight: '1',
            fontVariantNumeric: 'tabular-nums',
        },
        statLabel: {
            fontSize: '13px',
            fontWeight: '800',
            color: '#64748b',
            textTransform: 'uppercase',
            letterSpacing: '2px',
        }
    };

    return (
        <div style={styles.section}>
             <style>{`
                @media (max-width: 900px) {
                    .stats-grid-responsive {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 16px !important;
                    }
                }
                @media (max-width: 500px) {
                    .stats-grid-responsive {
                        grid-template-columns: 1fr !important;
                    }
                    .stat-box {
                        padding: 30px 20px !important;
                    }
                }
            `}</style>

            {/* Common Header */}
            <div style={{...styles.headerWrapper, ...getAnimation(0)}}>
                <div style={styles.headerDividerLine}></div>
                <div style={styles.headerContent}>
                    <span style={styles.subHeader}>By The Numbers</span>
                    <h1 style={styles.mainHeader}>Our Impact</h1>
                    <div style={styles.headerFooter}>
                        <span style={styles.smallDivider}></span>
                        <span style={styles.tagline}>Est. 2024</span>
                        <span style={styles.smallDivider}></span>
                    </div>
                </div>
            </div>

            <div style={styles.container}>
                <div style={{...styles.statsGrid, ...getAnimation(200)}} className="stats-grid-responsive">
                    {stats.map((stat, index) => (
                        <div key={stat.id} style={styles.statBox} className="stat-box">
                            <span style={styles.statValue}>
                                {stat.prefix}{animatedValues[index].toLocaleString()}{stat.suffix}
                            </span>
                            <span style={styles.statLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default OurImpact;
