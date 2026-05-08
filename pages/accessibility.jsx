// [Category A: UI / Design / Layout]
import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';

export default function Accessibility() {
    return (
        <Layout>
            <SEO 
                title="הצהרת נגישות" 
                description="הצהרת נגישות של אתר אביהו סיטון - מידע על נגישות האתר, נגישות הקליניקה ופתרונות חלופיים."
                canonical="/accessibility"
                noindex={true}
            />
            
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl sm:text-5xl text-[#4C4A49] mb-8 font-light text-center">הצהרת נגישות</h1>
                        <div className="w-24 h-px bg-[#D3C1B1] mx-auto mb-16"></div>
                        
                        <div className="text-lg text-[#6B6867] leading-relaxed space-y-12 text-right">
                            <section>
                                <h2 className="text-xl font-medium text-[#4C4A49] mb-4">האתר</h2>
                                <p>
                                    האתר עומד בדרישות תקן נגישות AA של WCAG 2.1 בהתאם לתקנות 
                                    שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות) תשע"ג-2013.
                                </p>
                            </section>

                            <section className="bg-orange-50/50 p-6 rounded-xl border border-orange-100">
                                <h2 className="text-xl font-medium text-[#4C4A49] mb-4">נגישות הקליניקה הפיזית</h2>
                                <p>
                                    הקליניקה ב
                                    <a 
                                        href="https://www.google.com/maps/search/?api=1&query=31.05365127751188,34.69029811783664" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="underline hover:text-[#A2673E]"
                                    >
                                        רתמים 17, רמת נגב
                                    </a> אינה נגישה לכיסאות גלגלים 
                                    ולבעלי מוגבלות פיזית בשלב זה.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-medium text-[#4C4A49] mb-4">טיפול אונליין — פתרון נגיש</h2>
                                <p className="mb-4">
                                    למטופלים שאינם יכולים להגיע פיזית לקליניקה, אביהו סיטון מציע 
                                    טיפולים וסדנאות באופן מלא אונליין.
                                </p>
                                <p className="font-medium text-[#4C4A49]">
                                    לתיאום: טלפון <a href="tel:0532853235" className="ltr-text underline">053-285-3235</a> | מייל: <a href="mailto:avihu.sitton@gmail.com" className="underline">avihu.sitton@gmail.com</a>
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-medium text-[#4C4A49] mb-4">פניות בנושא נגישות</h2>
                                <p className="mb-4">
                                    לדיווח על בעיית נגישות באתר או לקבלת סיוע ניתן לפנות ל:
                                </p>
                                <div className="p-6 bg-[#FDF8F0] rounded-xl border border-[#D3C1B1]/30">
                                    <p className="font-medium text-[#4C4A49]">אביהו סיטון</p>
                                    <p>טלפון: <a href="tel:0532853235" className="ltr-text">053-285-3235</a></p>
                                    <p>מייל: <a href="mailto:avihu.sitton@gmail.com">avihu.sitton@gmail.com</a></p>
                                </div>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}
