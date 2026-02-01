import React, { useState, useEffect } from 'react';
import './RecentImpact.css';

function RecentImpact({ isActive }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (isActive) {
            setTimeout(() => setMounted(true), 100);
        } else {
            setMounted(false);
        }
    }, [isActive]);

    const events = [
        {
            id: 1,
            date: "November 2025",
            title: "Sankara Healthcare",
            desc: "Raised funds to provide prosthetics for 100 children, giving them new hope and mobility.",
            stat: "100 Children",
            subStat: "Helped",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 0 0 5 2h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a.3.3 0 0 0-.2.5l5 7a.3.3 0 0 0 .5-.2v-7a1 1 0 0 1 1-1h5a.3.3 0 0 1 .2.5l-8 11a.3.3 0 0 1-.5-.2v-6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a.3.3 0 0 0 .3.3H4.8z"></path></svg>
            )
        },
        {
            id: 2,
            date: "October 2025",
            title: "Microsoft Giving",
            desc: "Partnered with Asha for Education & REDP to support educational initiatives through music.",
            stat: "$4,000",
            subStat: "Raised",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            )
        },
        {
            id: 3,
            date: "October 2025",
            title: "Diwali at Aegis",
            desc: "Brought joy and cultural celebration to senior community members through live performances.",
            stat: "50+",
            subStat: "Seniors",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            )
        }
    ];

    return (
        <div className="recent-impact-section">
            <div className="recent-impact-container">
                <div className={`recent-impact-header-wrapper ${mounted ? 'mounted' : ''}`}>
                    <span className="recent-impact-badge">Recent Stories</span>
                    <h1 className="recent-impact-main-header">Making a Difference</h1>
                </div>

                <div className="recent-impact-grid">
                    {events.map((event, index) => (
                        <div 
                            key={event.id} 
                            className={`recent-impact-card ${mounted ? 'mounted' : ''}`}
                            style={{ transitionDelay: `${index * 150 + 200}ms` }}
                        >
                            <div className="recent-impact-card-top">
                                <span className="recent-impact-date-tag">{event.date}</span>
                                <div className="recent-impact-icon-circle">
                                    {event.icon}
                                </div>
                            </div>

                            <div className="recent-impact-card-content">
                                <h3 className="recent-impact-card-title">{event.title}</h3>
                                <p className="recent-impact-card-desc">{event.desc}</p>
                            </div>

                            <div className="recent-impact-stat-area">
                                <span className="recent-impact-stat-value">{event.stat}</span>
                                <span className="recent-impact-stat-label">{event.subStat}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecentImpact;
