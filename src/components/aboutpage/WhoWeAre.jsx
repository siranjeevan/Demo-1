import React, { useState, useEffect } from 'react';
import './WhoWeAre.css';

function WhoWeAre({ isActive }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (isActive) {
            setTimeout(() => setMounted(true), 100);
        } else {
            setMounted(false);
        }
    }, [isActive]);

    return (
        <div className="who-we-are-section">
            <div className="who-we-are-header-wrapper">
                <div className="who-we-are-header-divider"></div>
                <div className="who-we-are-header-content">
                    <span className="who-we-are-sub-header">Our Journey</span>
                    <h1 className="who-we-are-main-header">Who We Are</h1>
                    <div className="who-we-are-header-footer">
                        <span className="who-we-are-small-divider"></span>
                        <span className="who-we-are-tagline">Est. 2024</span>
                        <span className="who-we-are-small-divider"></span>
                    </div>
                </div>
            </div>

            <div className={`who-we-are-container ${mounted ? 'mounted' : ''}`}>
                <div className="who-we-are-left">
                    <p className="who-we-are-paragraph">
                        Dhwayam was born from the shared vision of two young musicians in Seattle, deeply rooted in the rich tradition of Carnatic music yet passionate about addressing the challenges of our generation.
                    </p>
                    <p className="who-we-are-paragraph">
                        As Gen Z artists, we understand the power of music to transcend boundaries and create meaningful connections. We've taken the classical foundations of Carnatic music and woven them with contemporary sounds to create something uniquely ours—music that honors our heritage while speaking to today's world.
                    </p>
                    <p className="who-we-are-paragraph">
                        Our journey began with a simple question: How can we use our musical gifts to make a real difference? The answer became Dhwayam—a platform where every note played serves a greater purpose.
                    </p>
                </div>

                <div className="who-we-are-right">
                    <div className="who-we-are-card">
                        <h2 className="who-we-are-card-title">Our Values</h2>
                        <div className="who-we-are-values-list">
                            <div className="who-we-are-value-item">
                                <div className="who-we-are-icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                                </div>
                                <div className="who-we-are-value-content">
                                    <h3 className="who-we-are-value-title">Compassion</h3>
                                    <p className="who-we-are-value-desc">Every performance is driven by genuine care for our community.</p>
                                </div>
                            </div>

                            <div className="who-we-are-value-item">
                                <div className="who-we-are-icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                </div>
                                <div className="who-we-are-value-content">
                                    <h3 className="who-we-are-value-title">Unity</h3>
                                    <p className="who-we-are-value-desc">Music brings people together across all boundaries.</p>
                                </div>
                            </div>

                            <div className="who-we-are-value-item">
                                <div className="who-we-are-icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                                </div>
                                <div className="who-we-are-value-content">
                                    <h3 className="who-we-are-value-title">Excellence</h3>
                                    <p className="who-we-are-value-desc">We strive for the highest quality in both our music and our impact.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhoWeAre;
