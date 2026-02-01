import React, { useState } from 'react';
import Logo from '../../assets/Logo Section.png'; 

function Footer() {
    
    const styles = {
        footerContainer: {
            backgroundColor: '#002533', // Deep Teal
            color: '#fff',
            fontFamily: '"Inter", sans-serif',
            padding: '80px 24px 40px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
        },

        // --- 1. Central Hero Text ---
        mainHeader: {
            fontSize: 'clamp(40px, 8vw, 96px)', // Responsive text
            fontWeight: '900',
            fontFamily: '"Playfair Display", serif',
            lineHeight: '1.1',
            letterSpacing: '-2px',
            marginBottom: '40px',
            background: 'linear-gradient(135deg, #fff 0%, #94a3b8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            maxWidth: '1000px',
        },

        // --- 2. Action Buttons ---
        actionRow: {
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '80px',
        },
        primaryBtn: {
            backgroundColor: '#0ea5e9', // Sky Blue
            color: 'white',
            padding: '18px 48px',
            borderRadius: '100px',
            fontSize: '16px',
            fontWeight: '700',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            boxShadow: '0 0 40px -10px rgba(14, 165, 233, 0.4)',
        },
        secondaryBtn: {
            backgroundColor: 'transparent',
            color: 'white',
            padding: '18px 48px',
            borderRadius: '100px',
            fontSize: '16px',
            fontWeight: '700',
            border: '1px solid rgba(255,255,255,0.2)',
            cursor: 'pointer',
            transition: 'background 0.2s',
        },

        // --- 3. Organized Links Bar ---
        linkBar: {
            width: '100%',
            maxWidth: '1200px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            padding: '40px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '40px',
            flexWrap: 'wrap',
            textAlign: 'left',
        },
        
        // Col Styles
        linkGroup: {
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
        },
        groupTitle: {
            fontSize: '12px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: '#64748b',
            marginBottom: '8px',
        },
        link: {
            color: 'white',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '500',
            transition: 'color 0.2s',
            cursor: 'pointer',
        },

        // Brand Col
        brandCol: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '300px',
        },

        // --- 4. Bottom Line ---
        bottomLine: {
            marginTop: '40px',
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '13px',
            color: '#64748b',
        }
    };

    const LinkGroup = ({ title, links }) => (
        <div style={styles.linkGroup}>
            <span style={styles.groupTitle}>{title}</span>
            {links.map(l => (
                <a key={l} style={styles.link}>{l}</a>
            ))}
        </div>
    );

    return (
        <footer style={styles.footerContainer}>
             <style>{`
                @media (max-width: 900px) {
                    .link-bar {
                        flex-direction: column !important;
                        align-items: center !important;
                        text-align: center !important;
                        gap: 60px !important;
                    }
                    .bottom-line {
                        flex-direction: column;
                        gap: 20px;
                    }
                    .brand-col {
                        align-items: center !important;
                    }
                }
                .btn-hover:hover {
                    transform: scale(1.05);
                }
            `}</style>
            
            {/* BIG TYPE HERO */}
            <h1 style={styles.mainHeader}>
                Let’s Create Impact <br/> Through Music.
            </h1>

            {/* BUTTONS */}
            <div style={styles.actionRow}>
                <button style={styles.primaryBtn} className="btn-hover">
                    Book Dhwayam Now
                </button>
                <button style={styles.secondaryBtn} className="btn-hover">
                    View Our Impact
                </button>
            </div>

            {/* LINKS BAR */}
            <div style={styles.linkBar} className="link-bar">
                
                {/* Brand */}
                <div style={styles.brandCol} className="brand-col">
                    <img src={Logo} alt="Dhwayam" style={{width:'120px', filter:'brightness(0) invert(1)'}} />
                    <span style={{fontSize:'14px', color:'rgba(255,255,255,0.6)', lineHeight:'1.6'}}>
                        Connecting tradition and purpose to empower communities.
                    </span>
                </div>

                <LinkGroup title="Initiatives" links={['Harmony for Hope', 'Together Through Music', 'Social Welfare']} />
                <LinkGroup title="Connect" links={['Upcoming Events', 'Contact Us', 'Instagram', 'LinkedIn']} />
                
                {/* Contact Specific */}
                <div style={styles.linkGroup}>
                    <span style={styles.groupTitle}>Contact</span>
                    <a href="mailto:dhwayamfoundation@gmail.com" style={{...styles.link, fontSize:'18px', fontWeight:'600'}}>
                        dhwayamfoundation@<br/>gmail.com
                    </a>
                </div>

            </div>

            {/* BOTTOM */}
            <div style={styles.bottomLine} className="bottom-line">
                <span>© 2026 Dhwayam Foundation. All rights reserved.</span>
                <span>Bengaluru, India</span>
            </div>

        </footer>
    );
}

export default Footer;
