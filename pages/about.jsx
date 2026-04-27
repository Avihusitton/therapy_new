import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import AboutSection from '@/components/AboutSection';
import TherapyMethodSection from '@/components/TherapyMethodSection';
import { Play } from 'lucide-react';
import { useAudio } from '@/contexts/AudioContext';

export default function About() {
    const { setShowPlayer } = useAudio();
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "אביהו סיטון",
        "jobTitle": "פסיכותרפיסט",
        "description": "מנחה קבוצות, סדנאות ופסיכותרפיסט בשיטת דרך",
        "url": "https://avihusitton.com",
        "telephone": "+972-53-2853235",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "רמת נגב",
            "addressCountry": "IL"
        },
        "sameAs": [
            "https://g.page/r/CXrRjxeYVWw_EAI"
        ]
    };

    return (
        <Layout>
            <SEO 
                title="אודות | אביהו סיטון" 
                description="אביהו סיטון — פסיכותרפיסט ומנחה קבוצות בשיטת דרך. ראיון בגלי צה״ל ובטלוויזיה. מלווה מילואימניקים, זוגות ואנשים בצומת דרכים ברמת נגב ובזום."
                canonical="/about"
                schema={aboutSchema}
            />
            
            <div className="pt-10 pb-20">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-6xl text-[#4C4A49] font-light text-center mb-10"
                >
                    על אביהו סיטון
                </motion.h1>
                <div className="w-24 h-px bg-[#D3C1B1] mx-auto mb-16"></div>
                
                <AboutSection />
                
                <div className="bg-[#FDF8F0] py-20">
                    <TherapyMethodSection />
                </div>

                <div className="max-w-4xl mx-auto px-6 py-10 sm:py-20">
                    <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-[#D3C1B1]/20">
                        <h2 className="text-2xl sm:text-3xl font-light text-[#4C4A49] mb-8 text-center">מופיע בתקשורת</h2>
                        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg bg-[#4C4A49] mb-6">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/FYTVnIEOAWM"
                                title="אביהו סיטון - ראיון טלוויזיוני בנושא חזרה לשגרה ממילואים"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="text-center text-base text-[#6B6867] font-light leading-relaxed">
                            אביהו סיטון בראיון בנושא הנחיית סדנאות למשרתי מילואים בשיתוף ארגון ויצו.
                        </p>

                        <div className="mt-10 border-t border-[#D3C1B1]/20 pt-10">
                            <h3 className="text-xl font-light text-[#4C4A49] mb-6 text-center">האזינו לראיון ברדיו</h3>
                            <div className="flex justify-center">
                                <button
                                    onClick={() => setShowPlayer(true)}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        backgroundColor: 'transparent',
                                        border: '1px solid rgba(162, 103, 62, 0.4)',
                                        borderRadius: '24px',
                                        padding: '10px 24px',
                                        cursor: 'pointer',
                                        color: '#A2673E',
                                        fontSize: '15px',
                                        fontWeight: '500',
                                        transition: 'all 0.2s',
                                    }}
                                    className="hover:bg-[#A2673E]/5 hover:border-[#A2673E] transition-all"
                                >
                                    <Play size={14} fill="#A2673E" />
                                    האזן לראיון המלא (גלי צה״ל)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
