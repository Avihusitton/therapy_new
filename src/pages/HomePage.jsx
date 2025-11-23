
import React from 'react';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TherapyMethodSection from '../components/TherapyMethodSection';
import ServicesSection from '../components/ServicesSection';
import EmotionalToolsCarousel from '../components/EmotionalToolsCarousel';
import WhoIsThisFor from '../components/WhoIsThisFor';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#FDF8F0] text-[#4C4A49]" dir="rtl" lang="he">
            
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Varela+Round&family=Crimson+Text:wght@300;400;600&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Hebrew:wght@400;500;600&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Solitreo&display=swap'); /* Added Solitreo font */
                
                * {
                    font-feature-settings: "kern" 1;
                    text-rendering: optimizeLegibility;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
                
                html, body {
                    direction: rtl;
                    unicode-bidi: embed;
                }
                
                body {
                    font-family: 'Heebo', 'Varela Round', sans-serif;
                    font-weight: 300;
                }
                
                h1, h2, h3, h4, h5, h6 {
                    font-family: 'Heebo', 'Crimson Text', serif;
                    font-weight: 300;
                    direction: rtl;
                    text-align: center;
                }
                
                p, span, div {
                    direction: rtl;
                    text-align: center;
                }
                
                .ltr-text {
                    direction: ltr !important;
                    text-align: left !important;
                    unicode-bidi: embed;
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

            <EmotionalToolsCarousel />

            <WhoIsThisFor />
            
            <div id="contact" className="py-24 bg-[#F8F2E9]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-light text-[#4C4A49] mb-6">בואו נדבר</h2>
                        <div className="w-24 h-px bg-[#D3C1B1] mx-auto mb-8"></div>
                        <p className="text-xl text-[#6B6867] font-light leading-relaxed">
                            הצעד הראשון במסע שלך מתחיל כאן.
                            <br/>
                            אני מזמין אותך לשיחת היכרות ללא תשלום וללא התחייבות.
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </div>
            
            {/* Footer */}
            <footer className="bg-[#4C4A49] text-[#FDF8F0] py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <div className="mb-12">
                        <h3 className="text-3xl font-light mb-8">אביהו סיטון</h3>
                        <div className="w-24 h-px bg-[#8d7a6b] mx-auto mb-8"></div>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-[#D3C1B1] font-light">
                            <div className="flex items-center gap-3">
                                <span>📞</span>
                                <span className="ltr-text">053-2853235</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span>✉️</span>
                                <span className="ltr-text">Avihu.sitton@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span>📍</span>
                                <span>קליניקה ברתמים | מפגשים בזום</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-[#6B6867] pt-8">
                        <p className="text-[#B5A89D] font-light">
                            © 2024 אביהו סיטון | כל הזכויות שמורות
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
