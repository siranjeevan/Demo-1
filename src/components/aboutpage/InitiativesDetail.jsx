import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, ArrowRight, Calendar, MapPin, Target, Sparkles } from 'lucide-react';
import CountUp from '../CountUp';
import AnimatedSection from './AnimatedSection';
import './InitiativesDetail.css';
import HeroBannerBg from '../../assets/LogoSection1.png';

const InitiativesDetail = () => {
  return (
    <div className="initiatives-page-container">
      {/* 1. Immersive Hero Section */}
      <section className="initiatives-hero">
        <img src={HeroBannerBg} alt="Background" className="initiatives-hero-bg" />
        <div className="initiatives-hero-overlay"></div>
        <div className="initiatives-hero-content">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="initiatives-badge"
          >
            OUR GLOBAL IMPACT
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="initiatives-title"
          >
            Our <span className="initiatives-dhwayam-text">Initiatives</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="initiatives-description"
          >
            Two powerful programs creating lasting change through the transformative power of music-driven social impact.
          </motion.p>
        </div>
      </section>

      <AnimatedSection>
        {/* 2. Harmony for Hope Section */}
        <section className="program-section container-max">
          <div className="program-grid">
            <div className="program-info">
              <div className="program-header">
                <Heart style={{ color: 'var(--brand-teal)' }} className="mr-4" size={48} />
                <h2 className="program-title">
                  Harmony for <span className="initiatives-dhwayam-text">Hope</span>
                </h2>
              </div>
              <p className="program-text">
                Our flagship fundraising concert series dedicated to supporting youth healthcare 
                and health-focused nonprofits. Every performance directly translates into 
                life-changing support for those who need it most.
              </p>
              <div className="rounded-xl p-6 mb-6 shadow-lg border" style={{ backgroundColor: '#ffffff', borderColor: 'rgba(1, 78, 99, 0.1)' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--brand-teal)' }}>Our Focus Areas</h3>
                <ul className="space-y-4">
                  {[
                    "Youth Healthcare Initiatives",
                    "Medical Equipment & Prosthetics",
                    "Educational Health Programs",
                    "Community Health Awareness"
                  ].map((item, id) => (
                    <li key={id} className="flex items-start">
                      <Target style={{ color: 'var(--brand-sky)' }} className="mr-3 mt-1 flex-shrink-0" size={18} />
                      <span style={{ color: 'rgba(1, 78, 99, 0.8)', fontWeight: 600 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="impact-card">
              <h3 className="impact-header">Impact by the Numbers</h3>
              <div className="impact-stats-grid">
                <div className="stat-item">
                  <span className="stat-value">$<CountUp end={12000} />+</span>
                  <span className="stat-label">Funds Raised</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value"><CountUp end={15} />+</span>
                  <span className="stat-label">Concerts Held</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value"><CountUp end={200} />+</span>
                  <span className="stat-label">Lives Impacted</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value"><CountUp end={8} /></span>
                  <span className="stat-label">Partners</span>
                </div>
              </div>
            </div>
          </div>

          {/* Harmony Events Grid */}
          <div className="events-header">
            <span className="initiatives-badge">RECENT EVENTS</span>
            <h2 className="program-title" style={{ marginTop: '16px' }}>Harmony for <span className="initiatives-dhwayam-text">Hope</span> Events</h2>
          </div>
          
          <div className="event-grid">
            <div className="event-card">
              <div className="event-date">
                <Calendar size={18} />
                <span>NOVEMBER 2025</span>
              </div>
              <h4 className="event-title">Sankara Healthcare Fundraiser</h4>
              <p className="event-desc">
                A powerful evening of Carnatic fusion music that raised funds to provide 
                prosthetics for 100 children, giving them new hope and mobility.
              </p>
              <div className="event-footer">
                <span className="event-impact">100 Children Helped</span>
                <MapPin style={{ color: 'var(--brand-sky)' }} size={18} />
              </div>
            </div>

            <div className="event-card">
              <div className="event-date">
                <Calendar size={18} />
                <span>OCTOBER 2025</span>
              </div>
              <h4 className="event-title">Microsoft Giving Campaign</h4>
              <p className="event-desc">
                Partnered with Asha for Education & REDP to support educational 
                initiatives through an intimate concert experience.
              </p>
              <div className="event-footer">
                <span className="event-impact">$4,000 Raised</span>
                <MapPin style={{ color: 'var(--brand-sky)' }} size={18} />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        {/* 3. Together Through Music Section */}
        <section className="events-section">
          <div className="container-max">
            <div className="program-grid">
               <div className="impact-card">
                <h3 className="impact-header">Community Impact</h3>
                <div className="impact-stats-grid">
                  <div className="stat-item">
                    <span className="stat-value"><CountUp end={10} />+</span>
                    <span className="stat-label">Venues Visited</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value"><CountUp end={300} />+</span>
                    <span className="stat-label">Seniors Reached</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value"><CountUp end={25} />+</span>
                    <span className="stat-label">Hours of Music</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value"><CountUp end={5} /></span>
                    <span className="stat-label">Partners</span>
                  </div>
                </div>
              </div>

              <div className="program-info">
                <div className="program-header">
                  <Users style={{ color: 'var(--brand-teal)' }} className="mr-4" size={48} />
                  <h2 className="program-title">
                    Together Through <span className="initiatives-dhwayam-text">Music</span>
                  </h2>
                </div>
                <p className="program-text">
                  Our community outreach program brings the joy and healing power of live music 
                  directly to senior centers and community spaces, fostering intergenerational 
                  connections and cultural appreciation.
                </p>
                <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#ffffff', borderColor: 'rgba(1, 78, 99, 0.1)' }}>
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--brand-teal)' }}>What We Bring</h3>
                  <ul className="space-y-4">
                    {[
                      "Live Carnatic Fusion Performances",
                      "Interactive Musical Experiences",
                      "Cultural Education & Storytelling",
                      "Intergenerational Connection"
                    ].map((item, id) => (
                      <li key={id} className="flex items-start">
                        <Sparkles style={{ color: 'var(--brand-sky)' }} className="mr-3 mt-1 flex-shrink-0" size={18} />
                        <span style={{ color: 'rgba(1, 78, 99, 0.8)', fontWeight: 600 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="event-grid" style={{ marginTop: '80px' }}>
              {[
                { date: "OCTOBER 2025", title: "Diwali at Aegis Living", desc: "Celebrated Diwali with 50+ senior community members through traditional and fusion music performances.", impact: "50+ Seniors" },
                { date: "SEPTEMBER 2025", title: "Sunrise Senior Center", desc: "An afternoon of musical storytelling that brought smiles and cultural connection to the community.", impact: "40+ Attendees" },
                { date: "AUGUST 2025", title: "Community Arts Center", desc: "Interactive workshop combining music education with live performance for all ages.", impact: "60+ Participants" }
              ].map((event, idx) => (
                <div key={idx} className="event-card">
                  <div className="event-date">
                    <Calendar size={18} />
                    <span>{event.date}</span>
                  </div>
                  <h4 className="event-title">{event.title}</h4>
                  <p className="event-desc">{event.desc}</p>
                  <div className="event-footer">
                    <span className="event-impact">{event.impact}</span>
                    <MapPin style={{ color: 'var(--brand-sky)' }} size={18} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        {/* 4. Involvement Section */}
        <section className="involvement-section container-max">
          <div className="events-header">
            <span className="initiatives-badge">JOIN THE MOVEMENT</span>
            <h2 className="program-title" style={{ marginTop: '16px' }}>Get <span className="initiatives-dhwayam-text">Involved</span></h2>
            <p className="initiatives-description" style={{ marginTop: '24px' }}>
              Join us in creating positive change through music. There are many ways to be part of our initiatives.
            </p>
          </div>

          <div className="involvement-grid">
            {[
              { icon: <Heart size={48} />, title: "Attend Our Concerts", text: "Join us at our Harmony for Hope fundraising concerts and be part of the change while enjoying beautiful music.", btn: "View Events", link: "/events" },
              { icon: <Users size={48} />, title: "Partner With Us", text: "Organizations and venues can partner with us to bring music and impact to their communities.", btn: "Contact Us", link: "/contact" },
              { icon: <Calendar size={48} />, title: "Book Us", text: "Book Dhwayam for your event and help us continue our mission of music-driven social impact.", btn: "Book Now", link: "/booking" }
            ].map((card, idx) => (
              <div key={idx} className="involve-card">
                <div className="involve-icon">{card.icon}</div>
                <h3 className="involve-title">{card.title}</h3>
                <p className="involve-text">{card.text}</p>
                <a href={card.link} className="involve-btn">
                  {card.btn} <ArrowRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default InitiativesDetail;
