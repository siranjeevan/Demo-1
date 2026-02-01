import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Heart, ArrowRight, Clock, Tag } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import './EventsDetail.css';
import HeroBannerBg from '../../assets/LogoSection1.png';

const EventsDetail = () => {
    const upcomingEvents = [
        {
            id: 1,
            title: 'SEEEDS NonProfit Fundraiser',
            date: 'March 15, 2026',
            time: '7:00 PM - 9:00 PM',
            location: 'Seattle Community Center',
            initiative: 'Harmony for Hope',
            partner: 'SEEEDS Educational NonProfit',
            description: 'Join us for an evening of Carnatic fusion music supporting educational initiatives for underserved youth.',
            tag: 'UPCOMING'
        },
        {
            id: 2,
            title: 'Neerthuli Cultural Festival',
            date: 'April 8, 2026',
            time: '6:30 PM - 8:30 PM',
            location: 'Bellevue Arts Center',
            initiative: 'Cultural Outreach',
            partner: 'Neerthuli Organization',
            description: 'Celebrating South Indian culture and tradition through music at this vibrant community festival.',
            tag: 'FEATURED'
        }
    ];

    const pastEvents = [
        {
            id: 3,
            title: 'Sankara Healthcare Fundraiser',
            date: 'November 18, 2025',
            location: 'Redmond Community Hall',
            impact: '100 children helped',
            tag: 'PAST'
        },
        {
            id: 4,
            title: 'Microsoft Giving Campaign',
            date: 'October 22, 2025',
            location: 'Microsoft Campus',
            impact: '$4,000 Raised',
            tag: 'PAST'
        }
    ];

    return (
        <div className="events-page-container">
            {/* Hero Section */}
            <section className="events-hero">
                <img src={HeroBannerBg} alt="Background" className="events-hero-bg" />
                <div className="events-hero-overlay"></div>
                <div className="events-hero-content">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="events-badge"
                    >
                        LIVE PERFORMANCES
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="events-title"
                    >
                        Our <span className="events-highlight-text">Events</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="events-description"
                    >
                        Join us at our upcoming performances and see how music creates lasting change in our community.
                    </motion.p>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="events-section-wrapper">
                <div className="events-container-max">
                    <div className="events-section-header">
                        <h2 className="events-section-title">Upcoming <span className="events-highlight-text">Performances</span></h2>
                    </div>

                    <div className="events-grid-layout">
                        {upcomingEvents.map((event, idx) => (
                            <AnimatedSection key={event.id} delay={idx * 0.1}>
                                <div className="event-premium-card">
                                    <div className="event-tag-badge">{event.tag}</div>
                                    <div className="event-meta-info">
                                        <div className="event-meta-item">
                                            <Calendar size={16} />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="event-meta-item">
                                            <MapPin size={16} />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                    <h3 className="event-card-title">{event.title}</h3>
                                    <p className="event-card-desc">{event.description}</p>
                                    <div className="event-card-footer">
                                        <div className="event-meta-item">
                                            <Users size={16} />
                                            <span>{event.partner}</span>
                                        </div>
                                        <button className="event-action-btn">Learn More</button>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Events Section */}
            <section className="events-section-wrapper" style={{ backgroundColor: 'var(--brand-offwhite)' }}>
                <div className="events-container-max">
                    <div className="events-section-header">
                        <h2 className="events-section-title">Past <span className="events-highlight-text">Impact</span></h2>
                    </div>

                    <div className="events-grid-layout">
                        {pastEvents.map((event, idx) => (
                            <AnimatedSection key={event.id} delay={idx * 0.1}>
                                <div className="event-premium-card">
                                    <div className="event-meta-info">
                                        <div className="event-meta-item">
                                            <Calendar size={16} />
                                            <span>{event.date}</span>
                                        </div>
                                    </div>
                                    <h3 className="event-card-title" style={{ fontSize: '24px' }}>{event.title}</h3>
                                    <div className="event-card-footer">
                                        <span className="event-impact-highlight">{event.impact}</span>
                                        <Heart size={20} style={{ color: 'var(--brand-sky)' }} />
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking CTA */}
            <section className="events-section-wrapper" style={{ background: 'var(--brand-teal)', color: 'white' }}>
                <div className="events-container-max text-center">
                    <AnimatedSection>
                        <h2 className="events-title" style={{ color: 'white', fontSize: '42px', marginBottom: '24px' }}>Book Dhwayam for Your Event</h2>
                        <p className="events-description" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '40px' }}>
                            Bring the power of music and social impact to your next community or cultural gathering.
                        </p>
                        <button className="event-action-btn" style={{ background: 'white', color: 'var(--brand-teal)', padding: '16px 48px' }}>
                            Contact Us Now
                        </button>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default EventsDetail;
