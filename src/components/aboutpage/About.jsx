import React, { useEffect, useRef, useState } from 'react';
import ConcertImg from '../../assets/StockCake-Silhouetted_Concert_Moment-1844489-standard.jpg'
import BandImg from '../../assets/Hero2.png'
import Hero1 from '../../assets/Hero1.png'

function About({ isActive }) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        // Trigger animation whenever isActive becomes true
        if (isActive) {
           // Small delay to ensure smooth transition from hero
           const timer = setTimeout(() => setIsVisible(true), 100);
           return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [isActive]);
    
    // Inline Styles
    const styles = {
        section: {
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '80px',
            position: 'relative',
            paddingTop: '90px', // Increased padding to avoid nav overlap
            fontFamily: '"Inter", sans-serif',
        },
        wrapper: {
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            padding: '0 24px',
            pointerEvents: 'auto',
            // Corrected Animation Logic for Entrance
            transition: 'all 2.0s cubic-bezier(0.2, 0.8, 0.2, 1)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        },

        // --- Header Section ---
        headerContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            padding: '8px 0',
            flexShrink: 0,
        },
        headerLine: {
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
        headerSubtitle: {
            color: 'rgba(1, 78, 99, 0.4)',
            fontSize: '10px',
            fontWeight: '900',
            letterSpacing: '0.6em',
            textTransform: 'uppercase',
            marginBottom: '4px',
        },
        headerTitle: {
            color: '#014e63',
            fontSize: '60px', // md:text-6xl
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '-0.05em',
            lineHeight: '1',
            marginBottom: '4px',
            fontFamily: '"Inter", sans-serif',
        },
        headerDecor: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
        },
        headerDecorLine: {
            width: '24px',
            height: '1px',
            backgroundColor: 'rgba(1, 78, 99, 0.2)',
        },
        headerDecorText: {
            color: 'rgba(1, 78, 99, 0.4)',
            fontSize: '9px',
            fontWeight: 'bold',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
        },

        // --- Layout Grid ---
        mainGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            flex: 1,
            minHeight: 0,
        },

        // --- Left Block (Story) ---
        leftBlock: {
            gridColumn: 'span 6',
            minHeight: 0,
            height: '100%',
        },
        storyCard: {
            backgroundColor: 'white',
            borderRadius: '32px',
            padding: '48px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(1, 78, 99, 0.1)',
        },
        storyDecorBlob: {
            position: 'absolute',
            top: '-80px',
            left: '-80px',
            width: '256px',
            height: '256px',
            backgroundColor: 'rgba(1, 78, 99, 0.05)',
            borderRadius: '50%',
            filter: 'blur(64px)',
            transition: 'all 0.7s',
        },
        storyContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '32px',
            position: 'relative',
            zIndex: 10,
        },
        // Story Header
        storyHeader: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
        },
        storyLabel: {
            color: 'rgba(1, 78, 99, 0.6)',
            fontSize: '12px',
            fontWeight: 'bold',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'block',
        },
        storyTitle: {
            color: '#014e63',
            fontSize: '48px', // md:text-6xl
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '-0.05em',
            lineHeight: '1',
            textAlign: 'center',
        },
        storyHighlight: {
            color: '#0284c7', // Sky Blue
            fontSize: '32px', // md:text-5xl
            fontWeight: 'bold',
            letterSpacing: '0.1em',
            marginLeft: '8px',
            textTransform: 'uppercase',
        },
        genZBadge: {
            backgroundColor: 'transparent',
            border: '2px solid #014e63',
            color: '#014e63',
            padding: '8px 20px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: '900',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginTop: '4px',
            display: 'inline-block',
        },
        storyDivider: {
            width: '96px',
            height: '6px',
            backgroundColor: 'rgba(1, 78, 99, 0.1)',
            borderRadius: '9999px',
        },
        storyTextContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            maxWidth: '576px', // max-w-xl
            padding: '0 16px',
        },
        storyPara1: {
            color: '#014e63',
            fontSize: '16px', // md:text-base lg:text-lg
            lineHeight: '1.625',
            fontWeight: '700',
            textAlign: 'center',
        },
        storyPara2: {
            color: 'rgba(1, 78, 99, 0.8)',
            fontSize: '14px',
            lineHeight: '1.625',
            textAlign: 'center',
            fontWeight: '500',
        },
        boldText: {
            fontWeight: '700',
            color: '#014e63',
        },

        // --- Right Block ---
        rightBlock: {
            gridColumn: 'span 6',
            display: 'grid',
            gridTemplateRows: '1fr 1fr', // 2 rows
            gap: '24px',
            minHeight: 0,
            height: '100%',
        },
        
        // Mission Card
        missionCard: {
            background: 'linear-gradient(135deg, #014e63 0%, #003847 100%)',
            borderRadius: '32px',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255,255,255,0.05)',
        },
        missionGlow: {
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255,255,255,0.05)',
            filter: 'blur(64px)',
            borderRadius: '50%',
            opacity: 0.2,
            pointerEvents: 'none',
        },
        missionContent: {
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
        },
        missionLabel: {
            color: '#4cc9f0',
            fontSize: '10px',
            fontWeight: 'bold',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            padding: '4px 12px',
            border: '1px solid rgba(76, 201, 240, 0.3)',
            borderRadius: '9999px',
        },
        missionQuote: {
            color: 'white',
            fontSize: '24px', // lg:text-4xl
            fontWeight: '500',
            lineHeight: '1.625',
        },
        missionHighlight: {
            color: '#4cc9f0',
            fontWeight: 'bold',
        },
        missionDecorBar: {
            width: '48px',
            height: '4px',
            backgroundColor: 'rgba(76, 201, 240, 0.2)',
            borderRadius: '9999px',
            marginTop: '8px',
        },

        // Images Row
        imagesRow: {
            minHeight: 0,
            height: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
        },
        imgCard: {
            backgroundColor: '#1f2937', // gray-800
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            height: '100%',
        },
        imgOverlay: {
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.2)',
            transition: 'background-color 0.5s',
        },
        imgText: {
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255,255,255,0.9)',
            fontSize: '14px',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            opacity: 0, // Hidden until hover
            transition: 'all 0.3s',
            transform: 'translateY(16px)',
            textAlign: 'center',
            padding: '0 16px',
        },
        // Helpers for hover effects that we can't do purely inline without state,
        // but we'll use a class workaround in the style tag below.
    };

    return (
        <div style={styles.section} ref={sectionRef}>
             {/* CSS for responsiveness and hover states */}
             <style>{`
                /* Responsive Grid */
                @media (max-width: 900px) {
                    .main-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .left-block, .right-block {
                        grid-column: span 1 !important;
                    }
                    .header-title {
                        font-size: 36px !important;
                    }
                    .story-title {
                        font-size: 36px !important;
                    }
                    .story-highlight {
                        font-size: 24px !important;
                    }
                    .mission-quote {
                        font-size: 18px !important;
                    }
                    .images-row {
                        height: 250px !important; /* Fixed height on mobile */
                    }
                }
                
                /* Hover Effects for Cards */
                .hover-group:hover .img-text {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
                .hover-group:hover .img-overlay {
                    background-color: rgba(0,0,0,0) !important;
                }
                
                .hover-scale {
                    transition: transform 0.3s ease;
                }
                .hover-scale:hover {
                    transform: scale(1.02);
                }
            `}</style>
            
            {/* The wrapper handles the fade-in/slide-up animation via the style object */}
            <div style={styles.wrapper}>
                
                {/* 0. Common Page Header */}
                <div style={styles.headerContainer}>
                    <div style={styles.headerLine}></div>
                    <div style={styles.headerContent}>
                        <span style={styles.headerSubtitle}>The Collective</span>
                        <h1 style={styles.headerTitle} className="header-title">
                            Dhwayam
                        </h1>
                        <div style={styles.headerDecor}>
                            <span style={styles.headerDecorLine}></span>
                            <span style={styles.headerDecorText}>Est. 2024</span>
                            <span style={styles.headerDecorLine}></span>
                        </div>
                    </div>
                </div>

                {/* 2. Main Bento Grid */}
                <div style={styles.mainGrid} className="main-grid">
                    
                    {/* 1. Left Block - Full Height Story Card */}
                    <div style={styles.leftBlock} className="left-block">
                        <div style={styles.storyCard} className="hover-scale">
                            <div style={styles.storyDecorBlob}></div>
                            <div style={styles.storyContent}>
                                <div style={styles.storyHeader}>
                                    <span style={styles.storyLabel}>We Are</span>
                                    <h3 style={styles.storyTitle} className="story-title">
                                        The <span style={styles.storyHighlight} className="story-highlight">New Wave</span>
                                    </h3>
                                    <div style={{marginTop: '4px'}}>
                                        <span style={styles.genZBadge}>GEN-Z</span>
                                    </div>
                                </div>
                                <div style={styles.storyDivider}></div>
                                <div style={styles.storyTextContainer}>
                                    <p style={styles.storyPara1}>
                                        As a Gen Z–led Carnatic fusion band, we reimagine classical Carnatic music through contemporary sound, creating experiences that connect generations while driving meaningful social change.
                                    </p>
                                    <p style={styles.storyPara2}>
                                        Through our initiatives <span style={styles.boldText}>Harmony for Hope</span> (fundraising concerts) and <span style={styles.boldText}>Together Through Music</span> (community outreach), we blend deep Carnatic roots with modern musical expression to uplift communities, support youth healthcare, and spread connection.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Right Block */}
                    <div style={styles.rightBlock} className="right-block">
                        <div style={styles.missionCard} className="hover-scale">
                            <div style={styles.missionGlow}></div>
                            <div style={styles.missionContent}>
                                <span style={styles.missionLabel}>Mission</span>
                                <h2 style={styles.missionQuote} className="mission-quote">
                                    "To use music as a <span style={styles.missionHighlight}>bridge</span> between tradition and purpose, transforming performance into <span style={styles.missionHighlight}>impact</span>."
                                </h2>
                                <div style={styles.missionDecorBar}></div>
                            </div>
                        </div>

                        <div style={styles.imagesRow} className="images-row">
                             <div 
                                 style={{...styles.imgCard, backgroundImage: `url(${Hero1})`}}
                                 className="hover-group"
                             >
                                <div style={styles.imgOverlay} className="img-overlay"></div>
                                <div style={styles.imgText} className="img-text">The Moment</div>
                             </div>
                             
                             <div 
                                style={{...styles.imgCard, backgroundColor: '#014e63', backgroundImage: `url(${BandImg})`}}
                                className="hover-group"
                             >
                                <div style={{...styles.imgOverlay, opacity: 0.4}} className="img-overlay"></div>
                                <div style={styles.imgText} className="img-text">The Band</div>
                             </div>
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default About