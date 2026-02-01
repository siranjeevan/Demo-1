import React, { useState, useEffect } from 'react';

function OurImpact({ isActive }) {
    const [mounted, setMounted] = useState(false);
    const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);

    const stats = [
        { 
            id: 1, 
            value: 15000, 
            label: "Total Funds Raised", 
            prefix: "$", 
            suffix: "+", 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            )
        },
        { 
            id: 2, 
            value: 500, 
            label: "Lives Directly Impacted", 
            prefix: "", 
            suffix: "+", 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            )
        },
        { 
            id: 3, 
            value: 25, 
            label: "Events Completed", 
            prefix: "", 
            suffix: "+", 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            )
        },
        { 
            id: 4, 
            value: 12, 
            label: "Partner Organizations", 
            prefix: "", 
            suffix: "", 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            )
        },
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
                const duration = 2000;
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
        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.8s ease-out ${delay}ms`,
    });

    const styles = {
        section: {
            width: '100%',
            position: 'relative',
            backgroundColor: 'rgba(1, 78, 99, 0.1)', // Increased opacity for visibility
            overflow: 'hidden',
            padding: '50px 0',
            fontFamily: '"Inter", sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '40vh',
        },
        container: {
            width: '100%',
            maxWidth: '1200px',
            padding: '0 24px',
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },

        // Header Section
        headerWrapper: {
            textAlign: 'center',
            marginBottom: '60px',
        },
        mainHeader: {
            fontFamily: '"Playfair Display", serif',
            fontSize: '42px',
            fontWeight: '700',
            color: '#014e63', // Brand Teal
            marginBottom: '16px',
            letterSpacing: '-0.5px',
        },
        subHeader: {
            fontSize: '18px',
            color: 'rgba(1, 78, 99, 0.7)', // Lighter Brand Teal
            fontWeight: '400',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.5',
        },
        
        // Grid Layout
        grid: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%',
            gap: '40px',
        },

        // Stat Item
        statItem: {
            flex: '1',
            minWidth: '200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        },

        iconWrapper: {
            color: '#014e63', // Brand Teal
            marginBottom: '24px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
        },

        // Typography
        statValue: {
            fontSize: '42px',
            fontWeight: '800', 
            color: '#014e63', // Brand Teal
            marginBottom: '12px',
            fontVariantNumeric: 'tabular-nums',
            letterSpacing: '-1px',
        },
        statLabel: {
            fontSize: '16px',
            fontWeight: '500',
            color: '#64748b', // Slate 500
            lineHeight: '1.4',
        },
    };

    return (
        <div style={styles.section}>
             <style>{`
                @media (max-width: 900px) {
                    .impact-grid-responsive {
                        display: grid !important;
                        grid-template-columns: repeat(2, 1fr) !important;
                        justify-items: center;
                    }
                }
                @media (max-width: 500px) {
                    .impact-grid-responsive {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
            
            <div style={styles.container}>
                
                <div style={styles.grid} className="impact-grid-responsive">
                    {stats.map((stat, index) => (
                        <div 
                            key={stat.id} 
                            style={{...styles.statItem, ...getAnimation(index * 150 + 200)}}
                        >
                            {/* Icon */}
                            <div style={styles.iconWrapper}>
                                {stat.icon}
                            </div>
                            
                            {/* Data */}
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
