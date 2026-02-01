import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo Section.png';
import BandImg from '../../assets/Hero2.png';

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
        container: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            backgroundColor: '#ffffff',
            zIndex: 50,
            fontFamily: '"Inter", sans-serif',
            overflow: 'hidden', // Prevent scroll on main container
            opacity: isActive ? 1 : 0,
            pointerEvents: isActive ? 'auto' : 'none',
            transition: 'opacity 0.8s ease',
        },
        leftSplit: {
            width: '45%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
            flexShrink: 0,
        },
        heroImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            transform: mounted ? 'scale(1.05)' : 'scale(1.2)',
            transition: 'transform 10s ease-out',
        },
        imageOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 100%)',
        },
        titleOverlay: {
            position: 'absolute',
            bottom: '8%', // Moved down slightly
            left: '8%',
            zIndex: 2,
        },
        hugeTitle: {
            color: '#ffffff',
            fontSize: 'clamp(40px, 5vw, 80px)', // Responsive font size
            lineHeight: '0.9',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '-2px',
            margin: 0,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.2s',
            textShadow: '0 10px 30px rgba(0,0,0,0.3)'
        },
        subtitle: {
            color: '#bae6fd',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            marginBottom: '12px',
            display: 'block',
            fontWeight: '700',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.1s',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
        },
        rightSplit: {
            width: '55%',
            height: '100%',
            backgroundColor: '#ffffff',
            display: 'flex',             // Flexbox for vertical centering
            flexDirection: 'column',
            justifyContent: 'center',    // Center vertically
            alignItems: 'center',
            position: 'relative',
            paddingTop: '60px',          // Offset for navbar
        },
        contentContainer: {
            padding: '0 60px',           // Side padding
            maxWidth: '750px',
            width: '100%',
            color: '#334155',
            display: 'flex',             // Flex layout for content spacing
            flexDirection: 'column',
            gap: '16px',                 // Consistent gap between elements
        },
        dropCapParagraph: {
            fontSize: '16px',            // Compact text size
            lineHeight: '1.5',
            color: '#1e293b',
            fontWeight: '400',
            margin: 0,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.4s',
        },
        dropCap: {
            float: 'left',
            fontSize: '48px',            // Smaller drop cap
            lineHeight: '0.8',
            fontWeight: '900',
            color: '#014e63',
            marginRight: '12px',
            marginTop: '4px',
        },
        paragraph: {
            fontSize: '15px',            // Compact text size
            lineHeight: '1.5',
            color: '#475569',
            fontWeight: '400',
            margin: 0,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.5s',
        },
        quoteBox: {
            borderLeft: '3px solid #014e63',
            paddingLeft: '20px',
            margin: '4px 0',             // Minimal margin
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.6s',
        },
        quoteText: {
            fontSize: '18px',            // Smaller quote
            fontStyle: 'italic',
            color: '#0f172a',
            fontFamily: 'serif',
            lineHeight: '1.4',
        },
        footerCard: {
            marginTop: '10px',
            padding: '24px',             // Compact padding
            background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            textAlign: 'center',
            boxShadow: '0 4px 15px -5px rgba(0,0,0,0.05)',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.7s',
        },
        footerText: {
            fontSize: '11px',
            color: '#64748b',
            marginBottom: '4px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontWeight: '600',
        },
        footerHighlight: {
            fontSize: '18px',           // Compact highlight
            color: '#014e63',
            fontWeight: '700',
            lineHeight: '1.3',
        },
    };

    return (
        <div style={styles.container}>
            {/* Left Split - Visual Anchor */}
            <div style={styles.leftSplit} className="hidden md:block">
                <img src={BandImg} alt="Dhwayam Band" style={styles.heroImage} />
                <div style={styles.imageOverlay}></div>
                <div style={styles.titleOverlay}>
                    <span style={styles.subtitle}>Our Story</span>
                    <h1 style={styles.hugeTitle}>WHO<br />WE ARE</h1>
                </div>
            </div>

            {/* Right Split - Compact Story */}
            <div style={styles.rightSplit} className="w-full md:w-[55%]">
                <div style={styles.contentContainer}>
                    
                    {/* Intro */}
                    <p style={styles.dropCapParagraph}>
                        <span style={styles.dropCap}>W</span>
                        e are two young, passionate musicians from Seattle brought together by a shared love for Carnatic music. What began as attending and performing in traditional Carnatic kutcheris slowly grew into a deeper friendship and creative partnership.
                    </p>

                    <p style={styles.paragraph}>
                        Over time, our shared passion evolved into something bigger—a desire to create, collaborate, and take music beyond the traditional stage.
                    </p>

                    {/* Pull Quote */}
                    <div style={styles.quoteBox}>
                        <p style={styles.quoteText}>
                            "That journey led to the formation of Dhwayam, a fusion band rooted in Carnatic music and shaped by diverse musical influences."
                        </p>
                    </div>

                    <p style={styles.paragraph}>
                        Starting with vocal and violin, we began jamming simply for the joy of making music. As our sound evolved, we started collaborating with other young musicians, blending styles, cultures, and perspectives.
                    </p>

                    <p style={styles.paragraph}>
                        Today, <strong style={{ color: '#014e63', fontWeight: 700 }}>Dhwayam</strong> fuses the timeless beauty of Indian Carnatic music with contemporary sounds to create performances that inspire, connect, and uplift communities.
                    </p>

                    {/* Closing Statement */}
                    <div style={styles.footerCard}>
                        <p style={styles.footerText}>Our Philosophy</p>
                        <p style={styles.footerHighlight}>
                            For us, music is more than performance.<br />
                            It is a way to serve, connect, and give back.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default WhoWeAre;
