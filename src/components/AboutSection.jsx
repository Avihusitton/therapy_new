
import React from 'react';
import { motion } from 'framer-motion';
import GrowthElements from './GrowthElements';
import FloralDivider from './FloralDivider';

export default function AboutSection() {
    return (
        <section className="py-16 sm:py-24 bg-white relative overflow-x-hidden w-full">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* תמונה אישית */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="relative">
                            <div className="w-52 h-64 sm:w-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl mx-auto lg:mx-0">
                                <img 
                                    src="/images/about-profile.jpg"
                                    alt="אביהו סיטון"
                                    width="256"
                                    height="320"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* תוכן */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2 text-center"
                    >
                        <div className="mb-8 sm:mb-12 flex flex-col items-center">
                            <h2 className="text-3xl sm:text-5xl text-[#4C4A49] mb-4 sm:mb-6">
                                הגישה שלי
                            </h2>
                            <div className="w-24 h-px bg-[#D3C1B1]"></div>
                        </div>
                        
                        <div className="text-base sm:text-lg text-[#4C4A49] leading-relaxed space-y-4 sm:space-y-6">
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
                            
                            <div className="pt-4 sm:pt-6 text-center text-base sm:text-xl bg-[#FDF8F0] p-4 sm:p-6 rounded-lg mt-6 sm:mt-8">
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
