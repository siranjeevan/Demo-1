import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Heart, Users, Award, ExternalLink, Mail, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const FounderProfile = ({ name, role, bio, quote, icon: Icon, image, delay }) => {
    return (
        <AnimatedSection delay={delay}>
            <div className="group relative bg-white rounded-[40px] p-10 shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 overflow-hidden h-full flex flex-col">
                {/* Decorative Background Element */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-slate-50 rounded-full transition-transform duration-700 group-hover:scale-150 group-hover:bg-teal-50/50" />
                
                {/* Profile Header */}
                <div className="relative z-10 flex flex-col items-center mb-8">
                    <div className="relative mb-6">
                        <div className="absolute inset-0 bg-teal-600 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-slate-50 bg-slate-100 flex items-center justify-center">
                            {image ? (
                                <img src={image} alt={name} className="w-full h-full object-cover" />
                            ) : (
                                <Icon size={48} className="text-teal-900 opacity-40" />
                            )}
                        </div>
                    </div>
                    
                    <h3 className="text-3xl font-serif font-black text-teal-900 mb-2">{name}</h3>
                    <div className="px-5 py-1.5 bg-teal-50 text-teal-700 rounded-full text-xs font-black uppercase tracking-widest border border-teal-100/50">
                        {role}
                    </div>
                </div>

                {/* Bio & Quote */}
                <div className="relative z-10 flex-1 flex flex-col gap-6">
                    <div className="italic text-teal-800/70 border-l-4 border-teal-600/30 pl-6 py-2 leading-relaxed font-serif text-lg">
                        "{quote}"
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed text-sm font-medium">
                        {bio}
                    </p>
                </div>

                {/* Footer / Connect */}
                <div className="relative z-10 mt-10 pt-8 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-teal-600 group-hover:bg-teal-50 transition-all duration-300">
                            <Mail size={18} />
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-teal-600 group-hover:bg-teal-50 transition-all duration-300">
                            <ExternalLink size={18} />
                        </div>
                    </div>
                    <button className="flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-widest group/btn hover:gap-3 transition-all duration-300">
                        Learn More <ArrowRight size={14} className="group-hover/btn:translate-x-1" />
                    </button>
                </div>
            </div>
        </AnimatedSection>
    );
};

const Founders = ({ isActive }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timer;
        if (isActive) {
            timer = setTimeout(() => setIsVisible(true), 150);
        } else {
            setIsVisible(false);
        }
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isActive]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full min-h-screen bg-slate-50 pb-24"
                >
                    {/* Premium Header */}
                    <div className="relative h-[40vh] w-full bg-teal-950 flex items-center justify-center overflow-hidden">
                        {/* Animated background elements */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-600 rounded-full blur-[120px] animate-pulse" />
                            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400 rounded-full blur-[120px] animate-pulse delay-700" />
                        </div>
                        
                        <div className="relative z-10 text-center px-6">
                            <AnimatedSection>
                                <span className="inline-block px-4 py-1.5 bg-teal-900/50 text-teal-300 border border-teal-800 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                                    The Collective
                                </span>
                                <h1 className="text-5xl md:text-8xl font-serif font-black text-white mb-6 tracking-tight">
                                    Our <span className="text-teal-400">Founders</span>
                                </h1>
                                <p className="text-teal-100/60 max-w-2xl mx-auto text-lg md:text-xl font-medium">
                                    Meet the visionary artists bridging the gap between ancient tradition and modern impact.
                                </p>
                            </AnimatedSection>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-[1400px] mx-auto px-6 -mt-20 relative z-20">
                        <div className="grid md:grid-cols-2 gap-10">
                            <FounderProfile 
                                name="Founder Name 1"
                                role="Co-Founder & Lead Vocalist"
                                bio="Trained in Carnatic music from a young age, they bring a unique vocal depth to Dhwayam's fusion arrangements. Their journey in music is deeply intertwined with their commitment to social welfare, particularly youth healthcare in India."
                                quote="Music is the most direct language of the heart. Through Dhwayam, we're making it a language of hope too."
                                icon={Music}
                                delay={200}
                            />
                            <FounderProfile 
                                name="Founder Name 2"
                                role="Co-Founder & Instrumentalist"
                                bio="A multi-instrumentalist with a foundation in classical theory and a passion for contemporary soundscapes. They focus on creating innovative arrangements that preserve the soul of Carnatic music while making it accessible to a global audience."
                                quote="Tradition isn't about repeating the past; it's about carrying the fire forward into the future."
                                icon={Music}
                                delay={400}
                            />
                        </div>

                        {/* Advisor Highlight Bar */}
                        <div className="mt-20 pt-20 border-t border-slate-200">
                             <AnimatedSection>
                                <div className="text-center mb-16">
                                    <h2 className="text-4xl font-serif font-black text-teal-950 mb-4">Guided by Wisdom</h2>
                                    <p className="text-slate-500 font-medium">Our journey is supported by mentors across music and social impact sectors.</p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                                    <Users size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="font-black text-teal-900">Advisor Name</h4>
                                                    <p className="text-xs text-teal-600 font-bold uppercase tracking-wider">Industry Mentor</p>
                                                </div>
                                            </div>
                                            <p className="text-slate-500 text-sm leading-relaxed">
                                                Providing strategic guidance to help Dhwayam scale its musical and social impact initiatives globally.
                                            </p>
                                        </div>
                                    ))}
                                </div>
                             </AnimatedSection>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Founders;
