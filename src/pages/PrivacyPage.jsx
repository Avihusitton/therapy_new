import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
    return (
        <Layout>
            <SEO 
                title="מדיניות פרטיות" 
                description="מדיניות הפרטיות של אתר אביהו סיטון - מידע על איסוף נתונים, שימוש במידע וזכויות המשתמש."
                canonical="/privacy"
                noindex={true}
            />
            
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl sm:text-5xl text-[#4C4A49] mb-8 font-light text-center">מדיניות פרטיות</h1>
                        <div className="w-24 h-px bg-[#D3C1B1] mx-auto mb-16"></div>
                        
                        <div className="text-lg text-[#6B6867] leading-relaxed space-y-12 text-right">
                            <section>
                                <h2 className="text-xl font-medium text-[#4C4A49] mb-4">אילו פרטים נאספים</h2>
                                <p>
                                    בעת מילוי טופס "צור קשר" באתר נאספים שם, טלפון ותוכן הפנייה. 
                                    טופס זה מיועד ליצירת קשר ראשוני בלבד ואינו מאובטח לשידור 
                                    מידע רפואי או קליני רגיש.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-medium text-[#4C4A49] mb-4">כיצד המידע משמש</h2>
                                <p>
                                    המידע משמש אך ורק ליצירת קשר חוזרת על ידי אביהו סיטון באופן אישי. 
                                    המידע אינו מועבר לצד שלישי כלשהו.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-medium text-[#4C4A49] mb-4">אבטחת מידע</h2>
                                <p>
                                    הפרטים מאוחסנים בצורה מאובטחת ואינם נשמרים לאחר סיום הקשר.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-medium text-[#4C4A49] mb-4">זכות מחיקה</h2>
                                <p>
                                    כל פונה רשאי לבקש מחיקת פרטיו בפנייה ל: <a href="mailto:avihu.sitton@gmail.com" className="text-[#A2673E] underline">avihu.sitton@gmail.com</a>
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-medium text-[#4C4A49] mb-4">טיפול אונליין</h2>
                                <p>
                                    האתר מציע אפשרות לטיפול וסדנאות אונליין. במסגרת זו לא מבוצעת 
                                    הקלטה של הפגישות ולא נשמר תוכן השיחות.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-medium text-[#4C4A49] mb-4">עוגיות (Cookies)</h2>
                                <p>
                                    האתר משתמש בעוגיות טכניות בלבד לצורך תפקוד תקין.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}
