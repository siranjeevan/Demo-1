import React from 'react';
import Logo from '../../assets/LogoSection.png'; 
import './Footer.css';

function Footer() {
    const LinkGroup = ({ title, links }) => (
        <div className="footer-link-group">
            <span className="footer-group-title">{title}</span>
            {links.map(l => (
                <a key={l} className="footer-link">{l}</a>
            ))}
        </div>
    );

    return (
        <footer className="footer-container">
            {/* BIG TYPE HERO */}
            <h1 className="footer-main-header">
                Let’s Create Impact <br/> Through Music.
            </h1>

            {/* BUTTONS */}
            <div className="footer-action-row">
                <button className="footer-primary-btn">
                    Book Dhwayam Now
                </button>
                <button className="footer-secondary-btn">
                    View Our Impact
                </button>
            </div>

            {/* LINKS BAR */}
            <div className="footer-link-bar">
                {/* Brand */}
                <div className="footer-brand-col">
                    <img src={Logo} alt="Dhwayam" className="footer-logo" />
                    <span className="footer-brand-tagline">
                        Connecting tradition and purpose to empower communities.
                    </span>
                </div>

                <LinkGroup title="Initiatives" links={['Harmony for Hope', 'Together Through Music', 'Social Welfare']} />
                <LinkGroup title="Connect" links={['Upcoming Events', 'Contact Us', 'Instagram', 'LinkedIn']} />
                
                {/* Contact Specific */}
                <div className="footer-link-group">
                    <span className="footer-group-title">Contact</span>
                    <a href="mailto:dhwayamfoundation@gmail.com" className="footer-contact-email">
                        dhwayamfoundation@<br/>gmail.com
                    </a>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="footer-bottom-line">
                <span>© 2026 Dhwayam Foundation. All rights reserved.</span>
                <span>Bengaluru, India</span>
            </div>
        </footer>
    );
}

export default Footer;
