import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import ConcertImg from '../../assets/StockCake-Silhouetted_Concert_Moment-1844489-standard.jpg'
import BandImg from '../../assets/Hero2.png'
import Hero1 from '../../assets/Hero1.png'

function About({ isActive }) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (isActive) {
           const timer = setTimeout(() => setIsVisible(true), 100);
           return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [isActive]);
    
    return (
        <div className="about-section" ref={sectionRef}>
            <div className={`about-wrapper ${isVisible ? 'mounted' : ''}`}>
                
                {/* 0. Common Page Header */}
                <div className="about-header-container">
                    <div className="about-header-line"></div>
                    <div className="about-header-content">
                        <span className="about-header-subtitle">The Collective</span>
                        <h1 className="about-header-title">Dhwayam</h1>
                        <div className="about-header-decor">
                            <span className="about-header-decor-line"></span>
                            <span className="about-header-decor-text">Est. 2024</span>
                            <span className="about-header-decor-line"></span>
                        </div>
                    </div>
                </div>

                {/* 2. Main Bento Grid */}
                <div className="about-main-grid">
                    
                    {/* 1. Left Block - Full Height Story Card */}
                    <div className="about-left-block">
                        <div className="about-story-card">
                            <div className="about-story-decor-blob"></div>
                            <div className="about-story-content">
                                <div className="about-story-header">
                                    <span className="about-story-label">We Are</span>
                                    <h3 className="about-story-title">
                                        The <span className="about-story-highlight">New Wave</span>
                                    </h3>
                                    <div style={{marginTop: '4px'}}>
                                        <span className="about-genz-badge">GEN-Z</span>
                                    </div>
                                </div>
                                <div className="about-story-divider"></div>
                                <div className="about-story-text-container">
                                    <p className="about-story-para1">
                                        As a Gen Z–led Carnatic fusion band, we reimagine classical Carnatic music through contemporary sound, creating experiences that connect generations while driving meaningful social change.
                                    </p>
                                    <p className="about-story-para2">
                                        Through our initiatives <span className="about-bold-text">Harmony for Hope</span> (fundraising concerts) and <span className="about-bold-text">Together Through Music</span> (community outreach), we blend deep Carnatic roots with modern musical expression to uplift communities, support youth healthcare, and spread connection.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Right Block */}
                    <div className="about-right-block">
                        <div className="about-mission-card">
                            <div className="about-mission-glow"></div>
                            <div className="about-mission-content">
                                <span className="about-mission-label">Mission</span>
                                <h2 className="about-mission-quote">
                                    "To use music as a <span className="about-mission-highlight">bridge</span> between tradition and purpose, transforming performance into <span className="about-mission-highlight">impact</span>."
                                </h2>
                                <div className="about-mission-decor-bar"></div>
                            </div>
                        </div>

                        <div className="about-images-row">
                             <div 
                                 className="about-img-card"
                                 style={{ backgroundImage: `url(${Hero1})` }}
                             >
                                <div className="about-img-overlay"></div>
                                <div className="about-img-text">The Moment</div>
                             </div>
                             
                             <div 
                                className="about-img-card"
                                style={{ backgroundImage: `url(${BandImg})` }}
                             >
                                <div className="about-img-overlay" style={{ opacity: 0.4 }}></div>
                                <div className="about-img-text">The Band</div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;