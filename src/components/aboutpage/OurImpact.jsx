import React, { useState, useEffect, useRef } from 'react';
import './OurImpact.css';

function OurImpact({ isActive }) {
    const [mounted, setMounted] = useState(false);
    const [hasStartedAnimation, setHasStartedAnimation] = useState(false);
    const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
    const sectionRef = useRef(null);

    const stats = [
        { 
            id: 1, 
            value: 15000, 
            label: "Total Funds Raised", 
            prefix: "$", 
            suffix: "+", 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            )
        },
        { 
            id: 2, 
            value: 500, 
            label: "Lives Directly Impacted", 
            prefix: "", 
            suffix: "+", 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            )
        },
        { 
            id: 3, 
            value: 25, 
            label: "Events Completed", 
            prefix: "", 
            suffix: "+", 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            )
        },
        { 
            id: 4, 
            value: 12, 
            label: "Partner Organizations", 
            prefix: "", 
            suffix: "", 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            )
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setMounted(true);
                if (!hasStartedAnimation) {
                    setHasStartedAnimation(true);
                }
            }
        }, { threshold: 0.3 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
    }, [hasStartedAnimation]);

    useEffect(() => {
        if (hasStartedAnimation) {
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
    }, [hasStartedAnimation]);

    return (
        <div className="our-impact-section" ref={sectionRef}>
            <div className="our-impact-container">
                <div className="our-impact-grid">
                    {stats.map((stat, index) => (
                        <div 
                            key={stat.id} 
                            className={`our-impact-stat-item ${mounted ? 'mounted' : ''}`}
                            style={{ transitionDelay: `${index * 150 + 200}ms` }}
                        >
                            <div className="our-impact-icon-wrapper">
                                {stat.icon}
                            </div>
                            <span className="our-impact-stat-value">
                                {stat.prefix}{animatedValues[index].toLocaleString()}{stat.suffix}
                            </span>
                            <span className="our-impact-stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurImpact;
