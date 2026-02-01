import { motion } from 'framer-motion';
import { Heart, Users, ArrowRight, Calendar, MapPin, Target } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CountUp from '../components/CountUp';

const Initiatives = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(to bottom right, #1F3A34, rgba(31, 58, 52, 0.9), rgba(31, 58, 52, 0.8))', color: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Our <span style={{ background: 'linear-gradient(to right, rgba(244, 248, 249, 0.9), #F4F8F9)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>Initiatives</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'rgba(244, 248, 249, 0.9)' }}>
                Two powerful programs creating lasting change through the transformative power of music
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Harmony for Hope */}
      <section className="section-padding" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection>
              <div className="flex items-center mb-6">
                <Heart style={{ color: '#1F3A34' }} className="mr-4" size={48} />
                <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: '#1F3A34' }}>
                  Harmony for <span className="gradient-text">Hope</span>
                </h2>
              </div>
              <p className="text-xl mb-6" style={{ color: 'rgba(31, 58, 52, 0.8)' }}>
                Our flagship fundraising concert series dedicated to supporting youth healthcare 
                and health-focused nonprofits. Every performance directly translates into 
                life-changing support for those who need it most.
              </p>
              <div className="rounded-xl p-6 mb-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(31, 58, 52, 0.2)' }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1F3A34' }}>Our Focus Areas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Target style={{ color: '#1F3A34' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                    <span style={{ color: 'rgba(31, 58, 52, 0.8)' }}>Youth Healthcare Initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <Target style={{ color: '#1F3A34' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                    <span style={{ color: 'rgba(31, 58, 52, 0.8)' }}>Medical Equipment & Prosthetics</span>
                  </li>
                  <li className="flex items-start">
                    <Target style={{ color: '#1F3A34' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                    <span style={{ color: 'rgba(31, 58, 52, 0.8)' }}>Educational Health Programs</span>
                  </li>
                  <li className="flex items-start">
                    <Target style={{ color: '#1F3A34' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                    <span style={{ color: 'rgba(31, 58, 52, 0.8)' }}>Community Health Awareness</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="rounded-xl p-8 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(31, 58, 52, 0.2)' }}>
                <h3 className="text-2xl font-serif font-semibold mb-6 text-center" style={{ color: '#1F3A34' }}>
                  Impact by the Numbers
                </h3>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2" style={{ color: '#1F3A34' }}>
                      $<CountUp end={12000} />+
                    </div>
                    <p style={{ color: 'rgba(31, 58, 52, 0.7)' }}>Funds Raised</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2" style={{ color: '#1F3A34' }}>
                      <CountUp end={15} />+
                    </div>
                    <p style={{ color: 'rgba(31, 58, 52, 0.7)' }}>Concerts Held</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2" style={{ color: '#1F3A34' }}>
                      <CountUp end={200} />+
                    </div>
                    <p style={{ color: 'rgba(31, 58, 52, 0.7)' }}>Lives Impacted</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2" style={{ color: '#1F3A34' }}>
                      <CountUp end={8} />
                    </div>
                    <p style={{ color: 'rgba(31, 58, 52, 0.7)' }}>Partner Organizations</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Recent Harmony for Hope Events */}
          <AnimatedSection>
            <h3 className="text-2xl font-serif font-semibold mb-8 text-center" style={{ color: '#1F3A34' }}>
              Recent <span className="gradient-text">Harmony for Hope</span> Events
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(31, 58, 52, 0.2)' }}>
                <div className="flex items-center mb-4">
                  <Calendar style={{ color: '#1F3A34' }} className="mr-3" size={20} />
                  <span className="font-semibold" style={{ color: '#1F3A34' }}>November 2025</span>
                </div>
                <h4 className="text-xl font-semibold mb-3" style={{ color: '#1F3A34' }}>Sankara Healthcare Fundraiser</h4>
                <p className="mb-4" style={{ color: 'rgba(31, 58, 52, 0.7)' }}>
                  A powerful evening of Carnatic fusion music that raised funds to provide 
                  prosthetics for 100 children, giving them new hope and mobility.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold" style={{ color: '#1F3A34' }}>100 Children Helped</span>
                  <MapPin style={{ color: 'rgba(31, 58, 52, 0.7)' }} size={16} />
                </div>
              </div>

              <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(31, 58, 52, 0.2)' }}>
                <div className="flex items-center mb-4">
                  <Calendar style={{ color: '#1F3A34' }} className="mr-3" size={20} />
                  <span className="font-semibold" style={{ color: '#1F3A34' }}>October 2025</span>
                </div>
                <h4 className="text-xl font-semibold mb-3" style={{ color: '#1F3A34' }}>Microsoft Giving Campaign</h4>
                <p className="mb-4" style={{ color: 'rgba(31, 58, 52, 0.7)' }}>
                  Partnered with Asha for Education & REDP to support educational 
                  initiatives through an intimate concert experience.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold" style={{ color: '#1F3A34' }}>$4,000 Raised</span>
                  <MapPin style={{ color: 'rgba(31, 58, 52, 0.7)' }} size={16} />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Together Through Music */}
      <section className="section-padding" style={{ backgroundColor: 'rgba(31, 58, 52, 0.05)' }}>
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection>
              <div className="rounded-xl p-8 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(31, 58, 52, 0.2)' }}>
                <h3 className="text-2xl font-serif font-semibold mb-6 text-center" style={{ color: '#1F3A34' }}>
                  Community Impact
                </h3>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2" style={{ color: '#1F3A34' }}>
                      <CountUp end={10} />+
                    </div>
                    <p style={{ color: 'rgba(31, 58, 52, 0.7)' }}>Venues Visited</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2" style={{ color: '#1F3A34' }}>
                      <CountUp end={300} />+
                    </div>
                    <p style={{ color: 'rgba(31, 58, 52, 0.7)' }}>Seniors Reached</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2" style={{ color: '#1F3A34' }}>
                      <CountUp end={25} />+
                    </div>
                    <p style={{ color: 'rgba(31, 58, 52, 0.7)' }}>Hours of Music</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2" style={{ color: '#1F3A34' }}>
                      <CountUp end={5} />
                    </div>
                    <p style={{ color: 'rgba(31, 58, 52, 0.7)' }}>Community Partners</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex items-center mb-6">
                <Users style={{ color: '#1F3A34' }} className="mr-4" size={48} />
                <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: '#1F3A34' }}>
                  Together Through <span className="gradient-text">Music</span>
                </h2>
              </div>
              <p className="text-xl mb-6" style={{ color: 'rgba(31, 58, 52, 0.8)' }}>
                Our community outreach program brings the joy and healing power of live music 
                directly to senior centers and community spaces, fostering intergenerational 
                connections and cultural appreciation.
              </p>
              <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(31, 58, 52, 0.2)' }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1F3A34' }}>What We Bring</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Target style={{ color: '#1F3A34' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                    <span style={{ color: 'rgba(31, 58, 52, 0.8)' }}>Live Carnatic Fusion Performances</span>
                  </li>
                  <li className="flex items-start">
                    <Target style={{ color: '#1F3A34' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                    <span style={{ color: 'rgba(31, 58, 52, 0.8)' }}>Interactive Musical Experiences</span>
                  </li>
                  <li className="flex items-start">
                    <Target style={{ color: '#1F3A34' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                    <span style={{ color: 'rgba(31, 58, 52, 0.8)' }}>Cultural Education & Storytelling</span>
                  </li>
                  <li className="flex items-start">
                    <Target style={{ color: '#1F3A34' }} className="mr-3 mt-1 flex-shrink-0" size={16} />
                    <span style={{ color: 'rgba(31, 58, 52, 0.8)' }}>Intergenerational Connection</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Recent Together Through Music Events */}
          <AnimatedSection>
            <h3 className="text-2xl font-serif font-semibold mb-8 text-center" style={{ color: '#1F3A34' }}>
              Recent <span className="gradient-text">Together Through Music</span> Visits
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(31, 58, 52, 0.2)' }}>
                <div className="flex items-center mb-4">
                  <Calendar style={{ color: '#1F3A34' }} className="mr-3" size={20} />
                  <span className="font-semibold" style={{ color: '#1F3A34' }}>October 2025</span>
                </div>
                <h4 className="text-lg font-semibold mb-3" style={{ color: '#1F3A34' }}>Diwali at Aegis Living</h4>
                <p className="mb-4" style={{ color: 'rgba(31, 58, 52, 0.7)' }}>
                  Celebrated Diwali with 50+ senior community members through traditional 
                  and fusion music performances.
                </p>
                <div className="text-xl font-bold" style={{ color: '#1F3A34' }}>50+ Seniors</div>
              </div>

              <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(31, 58, 52, 0.2)' }}>
                <div className="flex items-center mb-4">
                  <Calendar style={{ color: '#1F3A34' }} className="mr-3" size={20} />
                  <span className="font-semibold" style={{ color: '#1F3A34' }}>September 2025</span>
                </div>
                <h4 className="text-lg font-semibold mb-3" style={{ color: '#1F3A34' }}>Sunrise Senior Center</h4>
                <p className="mb-4" style={{ color: 'rgba(31, 58, 52, 0.7)' }}>
                  An afternoon of musical storytelling that brought smiles and cultural 
                  connection to the community.
                </p>
                <div className="text-xl font-bold" style={{ color: '#1F3A34' }}>40+ Attendees</div>
              </div>

              <div className="rounded-xl p-6 shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(31, 58, 52, 0.2)' }}>
                <div className="flex items-center mb-4">
                  <Calendar style={{ color: '#1F3A34' }} className="mr-3" size={20} />
                  <span className="font-semibold" style={{ color: '#1F3A34' }}>August 2025</span>
                </div>
                <h4 className="text-lg font-semibold mb-3" style={{ color: '#1F3A34' }}>Community Arts Center</h4>
                <p className="mb-4" style={{ color: 'rgba(31, 58, 52, 0.7)' }}>
                  Interactive workshop combining music education with live performance 
                  for all ages.
                </p>
                <div className="text-xl font-bold" style={{ color: '#1F3A34' }}>60+ Participants</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="section-padding" style={{ backgroundColor: '#F4F8F9' }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#1F3A34' }}>
                Get <span className="gradient-text">Involved</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(31, 58, 52, 0.7)' }}>
                Join us in creating positive change through music. There are many ways to be part of our initiatives.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="rounded-xl p-8 text-center card-hover shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(31, 58, 52, 0.2)' }}>
                <Heart style={{ color: '#1F3A34' }} className="mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1F3A34' }}>Attend Our Concerts</h3>
                <p className="mb-6" style={{ color: 'rgba(31, 58, 52, 0.7)' }}>
                  Join us at our Harmony for Hope fundraising concerts and be part of 
                  the change while enjoying beautiful music.
                </p>
                <a 
                  href="/events" 
                  className="font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
                  style={{ backgroundColor: '#1F3A34', color: '#F4F8F9' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(31, 58, 52, 0.9)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#1F3A34'}
                >
                  View Events <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="rounded-xl p-8 text-center card-hover shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(31, 58, 52, 0.2)' }}>
                <Users style={{ color: '#1F3A34' }} className="mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1F3A34' }}>Partner With Us</h3>
                <p className="mb-6" style={{ color: 'rgba(31, 58, 52, 0.7)' }}>
                  Organizations and venues can partner with us to bring music and 
                  impact to their communities.
                </p>
                <a 
                  href="/contact" 
                  className="font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
                  style={{ backgroundColor: '#1F3A34', color: '#F4F8F9' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(31, 58, 52, 0.9)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#1F3A34'}
                >
                  Contact Us <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="rounded-xl p-8 text-center card-hover shadow-lg border" style={{ backgroundColor: '#F4F8F9', borderColor: 'rgba(31, 58, 52, 0.2)' }}>
                <Calendar style={{ color: '#1F3A34' }} className="mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1F3A34' }}>Book Us</h3>
                <p className="mb-6" style={{ color: 'rgba(31, 58, 52, 0.7)' }}>
                  Book Dhwayam for your event and help us continue our mission of 
                  music-driven social impact.
                </p>
                <a 
                  href="/booking" 
                  className="font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
                  style={{ backgroundColor: '#1F3A34', color: '#F4F8F9' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(31, 58, 52, 0.9)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#1F3A34'}
                >
                  Book Now <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Initiatives;