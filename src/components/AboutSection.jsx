
import React from 'react';
import { motion } from 'framer-motion';
import GrowthElements from './GrowthElements';
import FloralDivider from './FloralDivider';

export default function AboutSection() {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* תמונה אישית */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="relative">
                            <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl mx-auto lg:mx-0">
                                <img 
                                    src="/images/about-profile.jpg"
                                    alt="אביהו סיטון"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#8B9F6B]/20 rounded-full"></div>
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#A2673E]/20 rounded-full"></div>
                        </div>
                    </motion.div>

                    {/* תוכן */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2 text-right"
                    >
                        <div className="mb-12">
                            <h2 className="text-5xl text-[#4C4A49] mb-6">
                                הגישה שלי
                            </h2>
                            <div className="w-24 h-px bg-[#D3C1B1] mb-8"></div>
                        </div>
                        
                        <div className="text-lg text-[#6B6867] leading-relaxed space-y-6">
                            <p>
                                אני מאמין שכל אדם יכול להיות המטפל הטוב ביותר של עצמו, הרי מי חווה אותנו באופן כל כך אינטנסיבי כמונו? לשם כך עלינו להכיר את מבנה הנפש הייחודי שלנו, את תנועת הפעימה הקיימת במציאות, ואת סל הכלים מתוכו נשלוף את הכלי המתאים.
                            </p>
                            
                            <GrowthElements />
                            
                            <p>
                                בקליניקה נראה איך כל אתגר או נקודת קושי מול המציאות מהווה עבורנו הזדמנות לגדילה וריפוי. נוכל לבחור לאמץ אותם, להתעמת איתם, ואולי אף לשמוח בהם. נלמד איך לקחת אחריות על החלקים הלא מעובדים שלנו ומתוך כך נניח בסיס משמעותי לשינוי בהיבטי החיים הפרטיים, הזוגיים, המשפחתיים, ובכלל.
                            </p>
                            
                            <FloralDivider />
                            
                            <p>
                                הטיפול מכבד את הקצב של כל אחד ואחת, ומשלב היבטי גוף נפש ורוח.
                            </p>
                            
                            <div className="pt-6 text-center text-xl bg-[#FDF8F0] p-6 rounded-lg mt-8">
                                אני כאן כדי ללוות אותך במסע הזה ולגלות יחד איתך את המשך הסיפור,
                                <br />
                                <span className="font-normal text-[#A2673E]">באמונה גדולה, אביהו</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
