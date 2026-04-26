import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import AboutSection from '@/components/AboutSection';
import TherapyMethodSection from '@/components/TherapyMethodSection';
import AudioPlayer from '@/components/AudioPlayer';

export default function About() {
    return (
        <Layout>
            <SEO 
                title="אודות | אביהו סיטון" 
                description="הכירו את אביהו סיטון, פסיכותרפיסט בשיטת דרך ומנחה קבוצות. ליווי רגשי, זוגי וסדנאות למילואימניקים ברמת נגב ובזום."
                canonical="/about"
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
                            <AudioPlayer 
                                src="/audio/glz-interview.mp3"
                                title="קולה של אמא (גלי צה״ל)"
                                subtitle="שיחה על המעבר מהשטח לבית והמעטפת הרגשית למילואימניקים"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
