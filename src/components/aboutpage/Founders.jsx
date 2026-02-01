import React from 'react';
import { motion } from 'framer-motion';
import { Music, Heart, Users, Award } from 'lucide-react';
import AnimatedSection from '../AnimatedSection'; // Assuming this component exists as per AboutPage.jsx

const Founders = ({ isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen bg-[#F4F8F9]"
    >
      {/* Hero / Header Section for Founders */}
      <section className="py-20" style={{ background: 'linear-gradient(to bottom right, #1F3A34, rgba(31, 58, 52, 0.9), rgba(31, 58, 52, 0.8))', color: '#F4F8F9' }}>
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              The <span style={{ background: 'linear-gradient(to right, rgba(244, 248, 249, 0.9), #F4F8F9)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>Visionaries</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'rgba(244, 248, 249, 0.9)' }}>
              Deeply rooted in tradition, driven by a passion for change. Meet the artists behind Dhwayam.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founders Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Founder 1 */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-[rgba(31,58,52,0.1)] hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <div className="rounded-full w-40 h-40 mx-auto mb-8 flex items-center justify-center shadow-inner" style={{ backgroundColor: '#F4F8F9' }}>
                    <Music style={{ color: '#1F3A34' }} size={64} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-2" style={{ color: '#1F3A34' }}>Founder Name</h3>
                  <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: 'rgba(31, 58, 52, 0.1)', color: '#1F3A34' }}>
                    Co-Founder & Lead Vocalist
                  </div>
                  <p className="text-lg leading-relaxed" style={{ color: 'rgba(31, 58, 52, 0.8)' }}>
                    "Trained in Carnatic music from a young age, I've always sought to bring traditional vocals 
                    into contemporary fusion arrangements. Dhwayam is my way of merging this musical passion with meaningful social impact."
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="mt-8 flex justify-center gap-4">
                     <Heart size={20} style={{ color: '#1F3A34', opacity: 0.5 }} />
                     <div className="w-12 h-[1px] bg-[#1F3A34] opacity-20 self-center"></div>
                     <Award size={20} style={{ color: '#1F3A34', opacity: 0.5 }} />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Founder 2 */}
            <AnimatedSection delay={0.4}>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-[rgba(31,58,52,0.1)] hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <div className="rounded-full w-40 h-40 mx-auto mb-8 flex items-center justify-center shadow-inner" style={{ backgroundColor: '#F4F8F9' }}>
                    <Music style={{ color: '#1F3A34' }} size={64} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-2" style={{ color: '#1F3A34' }}>Founder Name</h3>
                  <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: 'rgba(31, 58, 52, 0.1)', color: '#1F3A34' }}>
                    Co-Founder & Instrumentalist
                  </div>
                  <p className="text-lg leading-relaxed" style={{ color: 'rgba(31, 58, 52, 0.8)' }}>
                    "As a multi-instrumentalist with deep roots in Carnatic tradition, I love exploring innovative fusion sounds. 
                    Dhwayam allows us to create music that bridges the classical and the contemporary."
                  </p>

                   {/* Decorative Elements */}
                   <div className="mt-8 flex justify-center gap-4">
                     <Heart size={20} style={{ color: '#1F3A34', opacity: 0.5 }} />
                     <div className="w-12 h-[1px] bg-[#1F3A34] opacity-20 self-center"></div>
                     <Award size={20} style={{ color: '#1F3A34', opacity: 0.5 }} />
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Founders;
