import React from 'react';
import { motion } from 'framer-motion';
import { User, Users } from 'lucide-react';
import FloralDivider from './FloralDivider';

export default function ServicesSection() {
    return (
        <section className="py-24 bg-[#FDF8F0] relative">
            {/* תמונת רקע של הקליניקה */}
            <div className="absolute inset-0 opacity-5">
                <img 
                    src="/images/services-bg.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl text-[#4C4A49] mb-6">איך אוכל לעזור?</h2>
                        <div className="w-24 h-px bg-[#D3C1B1] mx-auto"></div>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* טיפול אישי */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/80 backdrop-blur-sm p-10 text-center rounded-xl shadow-lg"
                    >
                        <User className="w-10 h-10 text-[#A2673E] mx-auto mb-6" />
                        <h3 className="text-3xl text-[#4C4A49] mb-4">טיפול אישי</h3>
                        <div className="w-16 h-px bg-[#D3C1B1] mx-auto mb-6"></div>
                        <p className="text-[#6B6867] leading-relaxed">
                            מסע אישי של גילוי, ריפוי וצמיחה. נלמד יחד להכיר את מבנה הנפש הייחודי שלך, לעבוד עם אתגרים כהזדמנויות, ולקחת אחריות על החיים שלך מתוך בחירה, עוצמה וחופש.
                        </p>
                    </motion.div>
                    
                    {/* מסע זוגי */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/80 backdrop-blur-sm p-10 text-center rounded-xl shadow-lg"
                    >
                        <Users className="w-10 h-10 text-[#A2673E] mx-auto mb-6" />
                        <h3 className="text-3xl text-[#4C4A49] mb-4">מסע זוגי</h3>
                        <div className="w-16 h-px bg-[#D3C1B1] mx-auto mb-6"></div>
                        <p className="text-[#6B6867] leading-relaxed">
                            לעבור "דרך" ביחד כדי להניח בסיס לזוגיות בריאה, המשלבת אחדות ועצמאות. מסע להחזרת התשוקה, הסקרנות והצמיחה המשותפת למרחב הזוגי, תוך מתן מקום לכל אחד מבני הזוג.
                        </p>
                    </motion.div>
                </div>
                
                <FloralDivider />
                
                {/* תמונת הקליניקה */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img 
                                src="/images/services-bg.jpg"
                                alt="הקליניקה ברתמים"
                                className="w-full h-60 md:h-96 object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}