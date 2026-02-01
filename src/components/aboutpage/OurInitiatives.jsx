import React, { useState, useEffect } from 'react';
import './OurInitiatives.css';

function OurInitiatives({ isActive }) {
    const [mounted, setMounted] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(0);

    useEffect(() => {
        if (isActive) {
            setTimeout(() => setMounted(true), 100);
        } else {
            setMounted(false);
        }
    }, [isActive]);

    const initiatives = [
        {
            id: 1,
            title: "Harmony for Hope",
            subtitle: "Concerts",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
            ),
            desc: "Through Harmony for Hope, we channel our performances into fundraising efforts that support youth healthcare and health-focused nonprofit organizations.",
        },
        {
            id: 2,
            title: "Together Through Music",
            subtitle: "Outreach",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
            ),
            desc: "Bringing live music regarding shared musical experiences to senior centers and community spaces, using music as a source of connection and joy.",
        },
        {
            id: 3,
            title: "Social Welfare",
            subtitle: "Youth",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            ),
            desc: "Helping ensure young people globally have access to the care, support, and opportunities they need to thrive through our welfare initiatives.",
        }
    ];

    return (
        <div className="our-initiatives-section">
            <div className="our-initiatives-container">
                
                {/* 1. Architectural Header (Left Side) */}
                <div className={`our-initiatives-header-side ${mounted ? 'mounted' : ''}`}>
                    <div className="our-initiatives-decorative-line"></div>
                    <span className="our-initiatives-badge">
                        What We Do
                    </span>
                    <h1 className="our-initiatives-main-header">
                        Our <br/>Initiatives
                    </h1>
                    
                    <div className="our-initiatives-stat-row">
                        <span className="our-initiatives-stat-number">03</span>
                        <span className="our-initiatives-stat-label">Core Programs Active</span>
                    </div>
                </div>

                {/* 2. Interactive Gallery (Right Side) */}
                <div className={`our-initiatives-gallery-side ${mounted ? 'mounted' : ''}`}>
                    {initiatives.map((init, index) => (
                        <div
                            key={init.id}
                            className={`our-initiatives-card ${hoveredIndex === index ? 'expanded' : 'collapsed'}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                        >
                            {/* Icon */}
                            <div className="our-initiatives-icon-box">
                                {init.icon}
                            </div>

                            {/* Collapsed Label */}
                            <span className="our-initiatives-vertical-label">
                                {init.subtitle}
                            </span>

                            {/* Expanded Content */}
                            <div className="our-initiatives-card-content">
                                <h3 className="our-initiatives-card-title">{init.title}</h3>
                                <p className="our-initiatives-card-desc">
                                    {init.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurInitiatives;
