import React, { useState } from 'react';
import Logo from '../../assets/Logo Section.png'; 

function Footer() {
    const [hoveredLink, setHoveredLink] = useState(null);

    const styles = {
        footer: {
            backgroundColor: '#014e63', // Brand Teal
            color: '#ffffff',
            fontFamily: '"Inter", sans-serif',
            position: 'relative',
            overflow: 'hidden',
            padding: '0',
            marginTop: '0px',
            display: 'flex',
            flexDirection: 'column',
        },

        // --- Marquee / Big Type Section ---
        heroCTA: {
            padding: '120px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            background: 'linear-gradient(180deg, #015f78 0%, #014e63 100%)',
            position: 'relative',
        },
        
        // Circular decorative lines
        ring1: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '50%',
            pointerEvents: 'none',
        },
        ring2: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            border: '1px solid rgba(255,255,255,0.03)',
            borderRadius: '50%',
            pointerEvents: 'none',
        },

        mainHeading: {
            fontSize: 'clamp(48px, 8vw, 100px)',
            fontWeight: '400', // Elegance
            fontFamily: '"Playfair Display", serif',
            lineHeight: '1',
            letterSpacing: '-2px',
            marginBottom: '32px',
            position: 'relative',
            zIndex: 10,
        },
        subHeading: {
            fontSize: '18px',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '500px',
            marginBottom: '48px',
            fontWeight: '300',
            letterSpacing: '0.5px',
            position: 'relative',
            zIndex: 10,
        },

        // Modern Button
        ctaButton: {
            padding: '24px 60px',
            backgroundColor: '#ffffff',
            color: '#014e63',
            border: 'none',
            borderRadius: '100px',
            fontSize: '16px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            cursor: 'pointer',
            transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)',
            zIndex: 10,
        },

        // --- Info Section Split ---
        infoSection: {
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '80px 40px 40px 40px',
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 1fr) 2fr', // Brand Left, Links Right
            gap: '80px',
        },

        // Brand Area
        brandArea: {
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
        },
        brandLogo: {
            width: '140px',
            filter: 'brightness(0) invert(1)',
        },
        brandMission: {
            color: 'rgba(255,255,255,0.6)',
            lineHeight: '1.8',
            fontSize: '15px',
            maxWidth: '400px',
        },

        // Links Grid
        linksGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
        },
        linkColumn: {
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
        },
        colHeader: {
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#0ea5e9', // Sky accent
            marginBottom: '8px',
        },
        linkItem: (name) => ({
            color: hoveredLink === name ? '#ffffff' : 'rgba(255,255,255,0.6)',
            textDecoration: 'none',
            fontSize: '15px',
            transition: 'all 0.3s ease',
            transform: hoveredLink === name ? 'translateX(5px)' : 'translateX(0)',
            cursor: 'pointer',
            display: 'inline-block',
        }),

        // --- Copyright Bar ---
        copyrightBar: {
            padding: '40px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.4)',
        }
    };

    const LinkList = ({ title, items }) => (
        <div style={styles.linkColumn}>
            <span style={styles.colHeader}>{title}</span>
            <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
                {items.map(item => (
                    <a 
                        key={item}
                        style={styles.linkItem(item)}
                        onMouseEnter={() => setHoveredLink(item)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </div>
    );

    return (
        <footer style={styles.footer}>
             <style>{`
                @media (max-width: 900px) {
                    .info-section {
                        grid-template-columns: 1fr !important;
                        gap: 60px !important;
                    }
                    .links-grid {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    .main-heading {
                        font-size: 48px !important;
                    }
                    .copyright-bar {
                        flex-direction: column;
                        gap: 20px;
                    }
                }
                .cta-btn:hover {
                    transform: scale(1.05) translateY(-5px);
                    box-shadow: 0 30px 60px -15px rgba(0,0,0,0.4);
                }
            `}</style>
            
            {/* CTA Section */}
            <div style={styles.heroCTA}>
                <div style={styles.ring1}></div>
                <div style={styles.ring2}></div>
                
                <h2 style={styles.mainHeading} className="main-heading">
                    Ready to Create <br/>
                    <span style={{fontStyle:'italic', fontFamily:'"Inter", sans-serif', fontWeight:'300'}}>Impact</span> Together?
                </h2>
                
                <p style={styles.subHeading}>
                    Book Dhwayam for your next event and join us in using music as a force for positive change.
                </p>

                <button style={styles.ctaButton} className="cta-btn">
                    Book Us Now
                </button>
            </div>

            {/* Info Section */}
            <div style={styles.infoSection} className="info-section">
                
                {/* Brand Side */}
                <div style={styles.brandArea}>
                    <img src={Logo} alt="Dhwayam" style={styles.brandLogo} />
                    <p style={styles.brandMission}>
                        A Gen Z-led Carnatic fusion band using music as a bridge between tradition and purpose, creating social impact through fundraising concerts and community outreach programs.
                    </p>
                </div>

                {/* Links Side */}
                <div style={styles.linksGrid} className="links-grid">
                    <LinkList title="Initiatives" items={['Harmony for Hope', 'Together Through Music', 'Social Welfare']} />
                    <LinkList title="Company" items={['About Us', 'Our Impact', 'Team', 'Careers']} />
                    <LinkList title="Connect" items={['Book Dhwayam', 'Contact Us', 'Instagram', 'LinkedIn']} />
                </div>
            </div>

            {/* Footer Bottom */}
            <div style={styles.copyrightBar} className="copyright-bar">
                <span>© 2026 Dhwayam Foundation. All rights reserved.</span>
                <span style={{color:'rgba(255,255,255,0.8)'}}>dhwayamfoundation@gmail.com</span>
            </div>

        </footer>
    );
}

export default Footer;
