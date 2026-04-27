import React from 'react';
import { ArrowDown, Phone, Users, Shield, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToWorkshops = () => {
        document.getElementById('workshops').scrollIntoView({ behavior: 'smooth' });
    };

    const audiences = [
        { icon: Shield, label: 'מילואימניקים בחזרה לשגרה' },
        { icon: Heart, label: 'זוגות בצומת' },
        { icon: Users, label: 'קבוצות וסדנאות' },
    ];

    return (
        <section
            className="min-h-screen relative overflow-x-hidden w-full"
            itemScope
            itemType="https://schema.org/Person"
        >
            {/* Background Image with softer gradient */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-colors duration-500"
                style={{
                    backgroundImage: `linear-gradient(var(--hero-overlay-1, rgba(253, 248, 240, 0.78)), var(--hero-overlay-2, rgba(253, 248, 240, 0.88))), url('/images/hero-bg.jpg')`
                }}
            />

            <div className="relative z-10 min-h-screen flex items-center justify-center pt-12 pb-16 w-full">
                <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="mb-8 sm:mb-10 flex flex-col items-center">
                            <div className="mb-4 sm:mb-6">
                                <img
                                    src="/images/therapy-logo.png"
                                    alt="לוגו טיפול רגשי"
                                    width="96"
                                    height="96"
                                    fetchpriority="high"
                                    decoding="async"
                                    className="w-20 h-20 sm:w-24 sm:h-24"
                                />
                            </div>

                            <h1
                                className="text-3xl sm:text-5xl font-light text-brand-text tracking-wide mb-3"
                                itemProp="name"
                            >
                                אביהו סיטון
                            </h1>

                            <p
                                className="text-base sm:text-lg text-brand-primary font-medium mb-4 tracking-wide"
                                itemProp="jobTitle"
                            >
                                מנחה קבוצות, סדנאות ופסיכותרפיסט בשיטת "דרך"
                            </p>

                            <h2 className="text-lg sm:text-2xl text-brand-text font-light mb-3 leading-relaxed px-2 max-w-2xl mx-auto">
                                מרחב לחזור לעצמך — אחרי מילואים, בתוך הזוגיות, או בצומת דרכים
                            </h2>

                            <p className="text-sm sm:text-base text-brand-text/80 font-light leading-relaxed max-w-xl mx-auto">
                                סדנאות וקבוצות למילואימניקים בחזרה לשגרה, מסעות זוגיים וטיפול אישי —
                                מתוך אמונה שכל אחד יכול להיות המטפל הטוב ביותר של עצמו.
                            </p>

                            <meta itemProp="url" content="https://avihusitton.com" />
                            <meta itemProp="telephone" content="+972-53-2853235" />
                        </div>

                        {/* Audience pills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-2"
                            role="list"
                            aria-label="קהלי יעד"
                        >
                            {audiences.map((a) => (
                                <div
                                    key={a.label}
                                    className="flex items-center gap-2 bg-white/70 dark:bg-brand-secondary/40 backdrop-blur-sm border border-brand-border/60 px-3 sm:px-4 py-2 rounded-full"
                                    role="listitem"
                                >
                                    <a.icon className="w-4 h-4 text-brand-primary" aria-hidden="true" />
                                    <span className="text-xs sm:text-sm text-brand-text font-light">{a.label}</span>
                                </div>
                            ))}
                        </motion.div>

                        <div className="bg-white/80 dark:bg-brand-secondary/50 backdrop-blur-sm border border-brand-border/30 p-5 sm:p-8 w-full mx-auto mb-8 sm:mb-10 rounded-lg max-w-2xl">
                            <p className="text-base sm:text-lg text-brand-text/90 leading-relaxed italic">
                                "הטיפול הוא ממש כמו סיפור מרתק שהולך ומעמיק...
                                <br />
                                העיקר שהוא חי ונושם — והגיבור סקרן לדעת מה ההמשך"
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 w-full px-2"
                    >
                        <button
                            onClick={scrollToContact}
                            className="w-full sm:w-auto bg-brand-primary hover:bg-brand-accent text-white px-8 py-3.5 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-lg font-light flex items-center justify-center gap-3"
                        >
                            <Phone className="w-5 h-5" />
                            שיחת היכרות ללא עלות
                        </button>

                        <button
                            onClick={scrollToWorkshops}
                            className="w-full sm:w-auto border border-brand-primary/60 bg-white/80 dark:bg-brand-secondary/30 backdrop-blur-sm text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-3.5 rounded-lg text-base sm:text-lg transition-all duration-300 font-light flex items-center justify-center gap-3"
                        >
                            <Users className="w-5 h-5" />
                            הסדנה הקרובה
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
