import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <Layout>
            <SEO 
                title="אביהו סיטון | פסיכותרפיסט — טיפול רגשי וזוגי" 
                description="פסיכותרפיסט מוסמך המתמחה בטיפול רגשי, זוגי וקבוצתי. קבע שיחת היכרות חינם."
                canonical="/"
            />
            
            <HeroSection />
            
            <div id="about">
                <AboutSection />
            </div>

            <div id="services">
                <ServicesSection />
            </div>

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
                        <div className="w-24 h-px bg-[#D3C1B1] mx-auto mb-8"></div>
                        <p className="text-lg text-[#6B6867] font-light">אני מזמין אתכם לשיחה קצרה שבה נבדוק יחד אם המרחב הזה נכון לכם עכשיו.</p>
                    </motion.div>
                    
                    <div className="bg-[#FDF8F0] p-8 sm:p-12 rounded-2xl shadow-sm border border-[#D3C1B1]/20">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
