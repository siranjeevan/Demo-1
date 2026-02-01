import { motion } from 'framer-motion';
import { Music, Heart, Users, Award, Sparkles, Globe, Mic2, Star } from 'lucide-react';
import './AboutDetail.css';
import HeroBannerBg from '../../assets/LogoSection1.png';

// Import Gallery Moments
import Moment1 from '../../assets/Moments/Moment1.png';
import Moment2 from '../../assets/Moments/Moment2.png';
import Moment3 from '../../assets/Moments/Moment3.png';
import Moment4 from '../../assets/Moments/Moment4.png';
import Moment5 from '../../assets/Moments/Moment5.png';
import Moment6 from '../../assets/Moments/Moment6.png';
import Moment7 from '../../assets/Moments/Moment7.png';
import Moment8 from '../../assets/Moments/Moment8.png';

const moments = [
  { img: Moment1, title: "Opening Note", subtitle: "Grand Launch" },
  { img: Moment2, title: "Cultural Heritage", subtitle: "Live Performance" },
  { img: Moment3, title: "Rhythmic Fusion", subtitle: "Seattle Concert" },
  { img: Moment4, title: "Soulful Strings", subtitle: "Artist Spotlight" },
  { img: Moment5, title: "Community Impact", subtitle: "Charity Event" },
  { img: Moment6, title: "Stage Resonance", subtitle: "Music Festival" },
  { img: Moment7, title: "Vocal Mastery", subtitle: "Deep Connection" },
  { img: Moment8, title: "Digital Beats", subtitle: "Modern Fusion" }
];

const AboutDetail = () => {
  return (
    <div className="about-page-container">
      {/* 1. Fancy Hero Section */}
      <section className="hero-section">
        <img src={HeroBannerBg} alt="Background" className="hero-bg-image" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-badge"
          >
            THE NEW WAVE OF TRADITION
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-title"
          >
            About <span className="hero-dhwayam-text">Dhwayam</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="hero-description"
          >
            Where ancient Carnatic roots meet contemporary sonic landscapes, 
            creating a bridge between generations and a catalyst for social change.
          </motion.p>
        </div>
      </section>

      {/* 2. Bento Story Section */}
      <section className="bento-section container-max">
        <div className="bento-grid">
          
          {/* Main Story Block */}
          <div className="bento-item bento-main">
            <div className="bg-blob blob-1"></div>
            <span className="label-sm">Our Genesis</span>
            <h2 className="heading-lg">Elevating <span className="hero-dhwayam-text">Tradition</span> with Purpose</h2>
            <div className="accent-bar"></div>
            <p className="text-body" style={{ marginBottom: '24px' }}>
              Dhwayam was born in Seattle, a city known for its musical innovation. 
              We saw an opportunity to bring the mathematical precision and emotional depth of 
              Carnatic music to a global audience, reimagined for the 21st century.
            </p>
            <p className="text-body">
              As Gen Z artists, we don't just play music; we create experiences. 
              Every performance is a mission, every note is an invitation to connect, 
              and every concert is a step towards a more compassionate world.
            </p>
          </div>

          {/* Mission Block */}
          <div className="bento-item bento-side-1">
            <Sparkles className="mb-6" size={40} color="#4cc9f0" />
            <h3 className="heading-md" style={{ color: 'white' }}>The Mission</h3>
            <p className="text-body" style={{ color: 'rgba(255,255,255,0.8)' }}>
              To utilize the transformative power of music as a vehicle for social impact, 
              raising funds and awareness for youth healthcare and community connection.
            </p>
          </div>

          {/* Values Block */}
          <div className="bento-item bento-side-2">
            <span className="label-sm">Our Ethos</span>
            <h3 className="heading-md" style={{ fontSize: '24px' }}>Foundational Values</h3>
            <div className="values-container">
              <div className="value-card">
                <div className="value-icon-box"><Heart size={20} /></div>
                <div>
                  <h4 className="value-title">Compassion</h4>
                  <p className="value-desc">Music is the heartbeat of our empathy.</p>
                </div>
              </div>
              <div className="value-card">
                <div className="value-icon-box"><Globe size={20} /></div>
                <div>
                  <h4 className="value-title">Connectivity</h4>
                  <p className="value-desc">Bridging cultures and generations.</p>
                </div>
              </div>
              <div className="value-card">
                <div className="value-icon-box"><Star size={20} /></div>
                <div>
                  <h4 className="value-title">Excellence</h4>
                  <p className="value-desc">Mastery of craft, purity of intent.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Immersive Gallery Section */}
      <section className="gallery-section">
        <div className="container-max" style={{ position: 'relative', zIndex: 5 }}>
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '80px' }}>
            <span className="label-sm">Portfolio of Memories</span>
            <h2 className="heading-lg">The Dhwayam <span className="hero-dhwayam-text">Experience</span></h2>
          </div>
          <div className="gallery-grid">
            {moments.map((moment, idx) => (
              <div key={idx} className={`gallery-image-wrapper gallery-item-${idx}`}>
                <img 
                  src={moment.img} 
                  alt={moment.title} 
                  className="gallery-img" 
                />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <span>{moment.subtitle}</span>
                    <h4>{moment.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Professional Founders Section */}
      <section className="section-padding bg-soft team-section">
        <div className="container-max" style={{ position: 'relative' }}>
          <div className="bg-blob blob-2"></div>
          <div className="section-header" style={{ marginBottom: '80px' }}>
            <span className="label-sm">The Visionaries</span>
            <h2 className="heading-lg">The Hands Behind <span className="hero-dhwayam-text">The Sound</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-20">
            <div className="team-item">
              <div className="team-image-box">
                <img src="https://picsum.photos/400/500?random=10" alt="Founder" />
              </div>
              <h3 className="team-name">Founder Name</h3>
              <span className="team-role">Lead Vocalist / Co-Founder</span>
              <p className="text-body" style={{ fontSize: '16px' }}>
                A maven of classical tradition, bringing the soul of 
                South Indian vocals into the modern collective.
              </p>
            </div>

            <div className="team-item">
              <div className="team-image-box">
                <img src="https://picsum.photos/400/500?random=11" alt="Founder" />
              </div>
              <h3 className="team-name">Founder Name</h3>
              <span className="team-role">Lead Instrumentalist / Co-Founder</span>
              <p className="text-body" style={{ fontSize: '16px' }}>
                Architect of the fusion landscape, blending complex 
                rhythms with contemporary digital textures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Redesigned Cinematic Crew Members Section */}
      <section className="crew-section">
        <div className="container-max" style={{ position: 'relative' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="label-sm" style={{ color: '#4cc9f0' }}>The Creative Collective</span>
            <h2 className="heading-lg" style={{ color: 'white' }}>Meet The <span style={{ color: '#4cc9f0' }}>Crew</span></h2>
          </div>

          <div className="crew-grid">
            {[
              { 
                name: "Arjun Mehta", 
                role: "Percussionist", 
                image: "https://picsum.photos/600/800?random=21",
                bio: "Master of rhythmic transitions, bringing traditional mridangam precision to fusion beats."
              },
              { 
                name: "Srinivasan R.", 
                role: "Violinist", 
                image: "https://picsum.photos/600/800?random=22",
                bio: "Electronic violin specialist, sculpting ethereal soundscapes that bridge the old and new."
              },
              { 
                name: "Ananya Iyer", 
                role: "Creative Director", 
                image: "https://picsum.photos/600/800?random=23",
                bio: "The visual architect behind Dhwayam's stage presence and brand identity."
              },
              { 
                name: "Vikram Shah", 
                role: "Sound Engineer", 
                image: "https://picsum.photos/600/800?random=24",
                bio: "Acoustic perfectionist ensuring every frequency resonates with clarity and purpose."
              },
              { 
                name: "Priya Das", 
                role: "Visual Arts", 
                image: "https://picsum.photos/600/800?random=25",
                bio: "Digital artist blending South Indian patterns with modern motion graphics."
              },
              { 
                name: "Karthik N.", 
                role: "Tech Ops", 
                image: "https://picsum.photos/600/800?random=26",
                bio: "Managing the complex digital backbone that powers our multi-layered performances."
              }
            ].map((member, idx) => (
              <div key={idx} className="crew-card">
                <div className="crew-image-wrapper">
                  <img src={member.image} alt={member.name} className="crew-img" />
                </div>
                <div className="crew-info-overlay">
                  <span className="crew-role">{member.role}</span>
                  <h4 className="crew-name">{member.name}</h4>
                  <p className="crew-bio-short">{member.bio}</p>
                  <div className="crew-social-placeholder">
                    <div className="social-dot"><Globe size={14} /></div>
                    <div className="social-dot"><Users size={14} /></div>
                    <div className="social-dot"><Sparkles size={14} /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutDetail;