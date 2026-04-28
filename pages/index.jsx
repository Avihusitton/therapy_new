import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { Tv, Mic, Handshake, Monitor, Phone } from 'lucide-react';

import { useAudio } from '@/contexts/AudioContext';

export default function Home() {
    const { setShowPlayer } = useAudio();
    const homeSchema = {
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
                title="אביהו סיטון — פסיכותרפיסט" 
                description="פסיכותרפיסט ומנחה קבוצות בשיטת דרך. טיפול אישי, ליווי זוגי וסדנאות למילואימניקים ברמת נגב ובזום. שיחת היכרות ראשונה ללא עלות."
                canonical="/"
                schema={homeSchema}
            />
            
            <HeroSection />

            <div className="bg-white border-y border-[#D3C1B1]/30 py-8">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 text-center items-center">
                        <button
                            onClick={() => window.open('https://www.youtube.com/watch?v=FYTVnIEOAWM', '_blank', 'noopener,noreferrer')}
                            className="group flex flex-col items-center hover:scale-105 transition-transform cursor-pointer"
                        >
                            <Tv className="w-6 h-6 text-[#A2673E] mb-2 group-hover:text-[#8d5a36]" />
                            <span className="block text-[#A2673E] text-sm font-medium group-hover:underline">ראיון בטלוויזיה</span>
                            <span className="block text-[#6B6867] text-[11px] font-light mt-1">חזרה לשגרה ממילואים</span>
                        </button>
                        <button 
                            onClick={() => setShowPlayer(true)}
                            className="group flex flex-col items-center hover:scale-105 transition-transform cursor-pointer"
                        >
                            <Mic className="w-6 h-6 text-[#A2673E] mb-2 group-hover:text-[#8d5a36]" />
                            <span className="block text-[#A2673E] text-sm font-medium group-hover:underline">ראיון בגלי צה״ל</span>
                            <span className="block text-[#6B6867] text-[11px] font-light mt-1">קולה של אמא</span>
                        </button>
                        <div className="flex flex-col items-center">
                            <Handshake className="w-6 h-6 text-[#A2673E] mb-2" />
                            <span className="block text-[#A2673E] text-sm font-medium">שיתוף פעולה עם ויצו</span>
                            <span className="block text-[#6B6867] text-[11px] font-light mt-1">סדנאות מוכרות</span>
                        </div>
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=31.05365127751188,34.69029811783664" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-col items-center hover:scale-105 transition-transform"
                        >
                            <Monitor className="w-6 h-6 text-[#A2673E] mb-2" />
                            <span className="block text-[#A2673E] text-sm font-medium">פיזי וזום</span>
                            <span className="block text-[#6B6867] text-[11px] font-light mt-1">רמת נגב וכל הארץ</span>
                        </a>
                        <a 
                            href="tel:0532853235"
                            className="group flex flex-col items-center hover:scale-105 transition-transform cursor-pointer col-span-2 md:col-span-1"
                        >
                            <Phone className="w-6 h-6 text-[#A2673E] mb-2 group-hover:text-[#8d5a36]" />
                            <span className="block text-[#A2673E] text-sm font-medium group-hover:underline">היכרות ללא עלות</span>
                            <span className="block text-[#6B6867] text-[11px] font-light mt-1">שיחה קצרה ללא התחייבות</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <div id="about">
                <AboutSection />
            </div>

            <div id="services">
                <ServicesSection />
            </div>

            <section className="py-20 bg-[#FDF8F0]">
                <div className="max-w-4xl mx-auto px-6 text-right">
                    <h2 className="text-3xl sm:text-4xl text-[#4C4A49] mb-12 font-light text-center">אנשים שמגיעים אליי בדרך כלל מרגישים...</h2>
                    <div className="space-y-4">
                        {[
                            "תקועים — יודעים שמשהו צריך להשתנות אבל לא יודעים איך",
                            "עייפים מאותם ריבים שחוזרים על עצמם בזוגיות",
                            "חוזרים ממילואים ומתקשים לחזור לשגרה ולמשפחה",
                            "מחפשים משמעות — מרגישים שחיים על טייס אוטומטי",
                            "רוצים לגדול — לא מחכים למשבר כדי להתחיל תהליך"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-[#D3C1B1]/10">
                                <div className="w-8 h-8 rounded-full bg-[#A2673E]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#A2673E]">✓</span>
                                </div>
                                <p className="text-[#6B6867] font-light leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <TestimonialsSection />

            <section id="contact" className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-5xl text-[#4C4A49] mb-6">צרו קשר</h2>
                        <div className="w-24 h-px bg-[#D3C1B1] mx-auto mb-12"></div>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            <a 
                                href="https://wa.me/972532853235?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%91%D7%99%D7%94%D7%95%20%F0%9F%8C%BF%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%95%D7%93" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-[#A2673E] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#8d5a36] transition-all w-full sm:w-auto"
                            >
                                שלח הודעה בוואטסאפ
                            </a>
                            <button 
                                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                                className="border border-[#A2673E] text-[#A2673E] px-8 py-3 rounded-lg hover:bg-[#A2673E]/5 transition-all w-full sm:w-auto"
                            >
                                מלא טופס ואחזור אליך
                            </button>
                        </div>
                        <p className="text-xs text-[#B5A89D] mb-12">⟵ או גלול למטה למילוי טופס</p>
                    </motion.div>
                    
                    <div id="contact-form" className="bg-[#FDF8F0] p-8 sm:p-12 rounded-2xl shadow-sm border border-[#D3C1B1]/20">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
