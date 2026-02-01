import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import './ContactDetail.css';
import HeroBannerBg from '../../assets/LogoSection1.png';

const ContactDetail = () => {
    return (
        <div className="contact-page-container">
            {/* Hero Section */}
            <section className="contact-hero">
                <img src={HeroBannerBg} alt="Background" className="contact-hero-bg" />
                <div className="contact-hero-overlay"></div>
                <div className="contact-hero-content">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="contact-badge"
                    >
                        GET IN TOUCH
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="contact-title"
                    >
                        Connect with <span className="contact-highlight-text">Dhwayam</span>
                    </motion.h1>
                </div>
            </section>

            {/* Main Grid */}
            <div className="contact-main-grid">
                {/* Info Side */}
                <AnimatedSection delay={0.2}>
                    <div className="contact-info-card">
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <Mail size={24} />
                            </div>
                            <div>
                                <span className="contact-info-label">Email Us</span>
                                <div className="contact-info-value">dhwayamtrio@gmail.com</div>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <MessageSquare size={24} />
                            </div>
                            <div>
                                <span className="contact-info-label">Social Media</span>
                                <div className="contact-info-value">@dhwayam_music</div>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <span className="contact-info-label">Based In</span>
                                <div className="contact-info-value">Seattle, WA <br/>United States</div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Form Side */}
                <AnimatedSection delay={0.4}>
                    <div className="contact-form-card">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="contact-form-group">
                                    <label className="contact-form-label">First Name</label>
                                    <input type="text" className="contact-form-input" placeholder="John" />
                                </div>
                                <div className="contact-form-group">
                                    <label className="contact-form-label">Last Name</label>
                                    <input type="text" className="contact-form-input" placeholder="Doe" />
                                </div>
                            </div>
                            
                            <div className="contact-form-group">
                                <label className="contact-form-label">Email Address</label>
                                <input type="email" className="contact-form-input" placeholder="john@example.com" />
                            </div>

                            <div className="contact-form-group">
                                <label className="contact-form-label">Subject</label>
                                <input type="text" className="contact-form-input" placeholder="Booking / Partnership / Support" />
                            </div>

                            <div className="contact-form-group">
                                <label className="contact-form-label">Message</label>
                                <textarea className="contact-form-textarea" placeholder="How can we help you create impact?"></textarea>
                            </div>

                            <button className="contact-submit-btn flex items-center justify-center gap-3">
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default ContactDetail;
