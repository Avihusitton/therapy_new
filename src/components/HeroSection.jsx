import React from 'react';
import { ArrowDown, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            className="min-h-screen relative overflow-x-hidden w-full"
            itemScope
            itemType="https://schema.org/Person"
        >
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(253, 248, 240, 0.7), rgba(253, 248, 240, 0.7)), url('/images/hero-bg.jpg')`
                }}
            />
            
            <div className="relative z-10 min-h-screen flex items-center justify-center pt-12 w-full">
                <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="mb-8 sm:mb-12 flex flex-col items-center">
                            <div className="mb-4 sm:mb-6">
                                <img 
                                    src="/images/therapy-logo.png" 
                                    alt="לוגו טיפול רגשי"
                                    className="w-20 h-20 sm:w-24 sm:h-24"
                                />
                            </div>
                            <h1
                                className="text-2xl sm:text-3xl font-light text-[#4C4A49] tracking-wider mb-2"
                                itemProp="name"
                            >
                                אביהו סיטון
                            </h1>
                            <p
                                className="text-base sm:text-lg text-[#8B7355] font-medium mb-1 tracking-wide"
                                itemProp="jobTitle"
                            >
                                פסיכותרפיסט
                            </p>
                            <h2 className="text-base sm:text-xl text-[#6B6867] font-light mb-8 sm:mb-12 leading-relaxed px-2">
                                פסיכותרפיה בשיטת דרך | טיפול רגשי, זוגי וקבוצתי
                            </h2>
                            <meta itemProp="url" content="https://avihusitton.com" />
                            <meta itemProp="telephone" content="+972-53-2853235" />
                        </div>
                        
                        <div className="bg-white/80 backdrop-blur-sm border border-[#D3C1B1]/30 p-5 sm:p-8 w-full mx-auto mb-8 sm:mb-12 rounded-lg">
                            <p className="text-base sm:text-xl text-[#6B6867] leading-relaxed italic">
                                "הטיפול הוא ממש כמו סיפור מרתק שהולך ומעמיק...
                                <br />
                                העיקר שהוא חי ונושם - והגיבור סקרן לדעת מה ההמשך"
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex flex-col gap-4 justify-center items-center mb-16 w-full px-2"
                    >
                        <button
                            onClick={scrollToContact}
                            className="w-full sm:w-auto bg-[#A2673E] hover:bg-[#8d5a36] text-white px-8 py-3 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-lg font-light flex items-center justify-center gap-3"
                        >
                            <Phone className="w-5 h-5" />
                            קביעת שיחת היכרות
                        </button>
                        
                        <button
                            onClick={scrollToAbout}
                            className="w-full sm:w-auto border border-[#D3C1B1] bg-white/80 backdrop-blur-sm text-[#6B6867] hover:bg-white px-8 py-3 rounded-lg text-base sm:text-lg transition-all duration-300 font-light flex items-center justify-center gap-3"
                        >
                            עוד עליי ועל הגישה שלי
                            <ArrowDown className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}