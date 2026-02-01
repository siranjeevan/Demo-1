import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Heart, Users, Award, Calendar, MapPin, DollarSign, Target, ArrowRight } from 'lucide-react';
import CountUp from '../CountUp';
import AnimatedSection from './AnimatedSection';
import './ImpactDetail.css';
import HeroBannerBg from '../../assets/LogoSection1.png';

const ImpactDetail = () => {
    const stats = [
        { icon: <DollarSign size={32} />, value: 15000, label: "Funds Raised", prefix: "$" },
        { icon: <Users size={32} />, value: 500, label: "Lives Impacted", prefix: "" },
        { icon: <Calendar size={32} />, value: 25, label: "Events Held", prefix: "" },
        { icon: <Target size={32} />, value: 12, label: "Partner Orgs", prefix: "" }
    ];

    const stories = [
        {
            date: "OCTOBER 2025",
            title: "Diwali at Aegis Living",
            initiative: "Together Through Music",
            desc: "Our Diwali celebration at Aegis Living brought the joy of traditional Indian music and culture to over 50 senior community members. The evening featured Carnatic fusion performances and cultural education that created meaningful intergenerational connections.",
            metrics: [
                { value: "50+", label: "Seniors Engaged" },
                { value: "2hrs", label: "Performance" }
            ],
            reversed: false
        },
        {
            date: "OCTOBER 2025",
            title: "Microsoft Giving Campaign",
            initiative: "Harmony for Hope",
            desc: "A powerful fundraising concert that raised $4,000 for educational initiatives supporting underprivileged children. Partnering with Asha for Education & REDP, we directly funded educational programs that change young lives.",
            metrics: [
                { value: "$4,000", label: "Funds Raised" },
                { value: "100+", label: "Students Supported" }
            ],
            reversed: true
        }
    ];

    return (
        <div className="impact-page-container">
            {/* Hero Section */}
            <section className="impact-hero">
                <img src={HeroBannerBg} alt="Background" className="impact-hero-bg" />
                <div className="impact-hero-overlay"></div>
                <div className="impact-hero-content">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="impact-badge"
                    >
                        TRANSFORMING LIVES
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="impact-title"
                    >
                        Our <span className="impact-highlight-text">Impact</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="impact-description"
                    >
                        Measuring the change we create through music, one performance and one life at a time.
                    </motion.p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="impact-stats-section">
                <div className="impact-stats-container">
                    <div className="impact-stats-grid">
                        {stats.map((stat, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="impact-stat-card">
                                    <div className="impact-stat-icon">{stat.icon}</div>
                                    <span className="impact-stat-value">
                                        {stat.prefix}<CountUp end={stat.value} />+
                                    </span>
                                    <span className="impact-stat-label">{stat.label}</span>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stories Section */}
            <section className="impact-stories-section">
                <div className="impact-stories-grid">
                    <div className="text-center mb-16">
                        <span className="impact-badge">REAL STORIES</span>
                        <h2 className="impact-story-title" style={{ marginTop: '16px' }}>Impact in <span className="impact-highlight-text">Action</span></h2>
                    </div>

                    {stories.map((story, idx) => (
                        <AnimatedSection key={idx} delay={0.2}>
                            <div className={`impact-story-item ${story.reversed ? 'reversed' : ''}`}>
                                <div className="impact-story-info">
                                    <div className="impact-story-date">
                                        <Calendar size={16} />
                                        <span>{story.date}</span>
                                    </div>
                                    <h3 className="impact-story-title">{story.title}</h3>
                                    <p className="impact-story-text">{story.desc}</p>
                                    <div className="impact-story-metrics">
                                        {story.metrics.map((m, i) => (
                                            <div key={i} className="impact-metric-box">
                                                <span className="impact-metric-value">{m.value}</span>
                                                <span className="impact-metric-label">{m.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="impact-story-image-placeholder">
                                    <Users size={64} style={{ opacity: 0.2 }} />
                                    <span style={{ position: 'absolute', marginTop: '100px', fontSize: '14px' }}>Impact Moment Photo</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Transparency Section */}
            <section className="impact-stats-section" style={{ backgroundColor: 'var(--brand-teal)', color: 'white' }}>
                <div className="impact-stats-container text-center">
                    <AnimatedSection>
                        <h2 className="impact-story-title" style={{ color: 'white', marginBottom: '32px' }}>Our Transparency Promise</h2>
                        <p className="impact-description" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '800px' }}>
                            We believe in complete transparency. 100% of performance remuneration is donated to charities supporting youth welfare. We cover our own expenses to ensure maximum impact for those who need it most.
                        </p>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default ImpactDetail;
