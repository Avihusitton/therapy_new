
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TherapyMethodSection from '../components/TherapyMethodSection';
import ServicesSection from '../components/ServicesSection';
import WorkshopsSection from '../components/WorkshopsSection';
import EmotionalToolsCarousel from '../components/EmotionalToolsCarousel';
import WhoIsThisFor from '../components/WhoIsThisFor';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
    return (
        <Layout>
            <SEO 
                title="בית" 
                description="אביהו סיטון - פסיכותרפיסט בשיטת דרך. טיפול רגשי אישי, ליווי זוגי וסדנאות למילואימניקים. מרחב לחזור לעצמך ברמת נגב או בזום."
                canonical="/"
            />

            <style jsx global>{`
                .ltr-text {
                    direction: ltr !important;
                    text-align: left !important;
                    unicode-bidi: embed;
                }
                section[id], div[id] {
                    scroll-margin-top: 5rem;
                }
            `}</style>

            <HeroSection />

            <div id="about">
                <AboutSection />
            </div>

            <TherapyMethodSection />

            <div id="services">
                <ServicesSection />
            </div>

            <WorkshopsSection />

            <EmotionalToolsCarousel />

            <WhoIsThisFor />

            <TestimonialsSection />

            <div id="contact" className="py-20 sm:py-24 bg-[#F8F2E9]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-5xl font-light text-[#4C4A49] mb-4 sm:mb-6">בואו נדבר</h2>
                        <div className="w-24 h-px bg-[#D3C1B1] mx-auto mb-6 sm:mb-8"></div>
                        <p className="text-base sm:text-xl text-[#6B6867] font-light leading-relaxed max-w-2xl mx-auto">
                            הצעד הראשון במסע שלך מתחיל כאן.
                            <br />
                            אני מזמין אותך לשיחת היכרות ללא תשלום וללא התחייבות.
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </Layout>
    );
}
