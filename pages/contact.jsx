// [Category A: UI / Design / Layout]
import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <Layout>
            <SEO 
                title="צור קשר | אביהו סיטון" 
                description="צרו קשר עם אביהו סיטון — פסיכותרפיסט ומנחה קבוצות. שיחת היכרות ראשונה ללא עלות. מפגשים ברמת נגב או בזום. זמין ימים א׳-ה׳ 09:00-20:00."
                canonical="/contact"
            />
            
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-6xl text-[#4C4A49] mb-8 font-light text-center">צרו קשר</h1>
                        <div className="w-32 h-px bg-[#D3C1B1] mx-auto mb-16"></div>
                        
                        <div className="max-w-3xl mx-auto text-center mb-20">
                            <p className="text-xl text-[#6B6867] leading-relaxed font-light">
                                לפעמים הצעד הכי קשה הוא הראשון — לשלוח הודעה, להרים טלפון, לומר 'אני צריך עזרה'. אז תדע: אין כאן שאלות נכונות או לא נכונות. רק שיחה קצרה שבה נבדוק יחד אם המרחב הזה נכון לך עכשיו.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                                <a href="https://wa.me/972532853235?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%91%D7%99%D7%94%D7%95%20%F0%9F%8C%BF%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%95%D7%97%D7%90" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl border border-[#D3C1B1] hover:shadow-md transition-all text-center group">
                                    <div className="w-10 h-10 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                                    </div>
                                    <h3 className="text-[#4C4A49] text-sm mb-1">העדפת וואטסאפ?</h3>
                                    <span className="text-[#A2673E] text-xs font-medium">שלח הודעה עכשיו</span>
                                </a>
                                
                                <a href="tel:0532853235" className="bg-white p-6 rounded-xl border border-[#D3C1B1] hover:shadow-md transition-all text-center">
                                    <div className="w-10 h-10 bg-[#A2673E]/10 text-[#A2673E] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-[#4C4A49] text-sm mb-1">מעדיף לדבר?</h3>
                                    <span className="text-[#A2673E] text-xs font-medium ltr-text">053-2853235</span>
                                </a>

                                <div className="bg-white p-6 rounded-xl border border-[#D3C1B1] text-center">
                                    <div className="w-10 h-10 bg-[#4C4A49]/10 text-[#4C4A49] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-[#4C4A49] text-sm mb-1">נמצא מחוץ לאזור?</h3>
                                    <span className="text-[#6B6867] text-xs font-light">מפגשים זמינים גם בזום</span>
                                </div>
                            </div>
                            
                            <div className="bg-[#FDF8F0] p-8 sm:p-12 rounded-2xl shadow-sm border border-[#D3C1B1]/20 relative">
                                <h2 className="text-2xl text-[#4C4A49] mb-8 font-normal text-center">השאירו פרטים ואחזור אליכם</h2>
                                <ContactForm />
                                <div className="mt-8 text-center">
                                    <p className="text-xs text-[#6B6867] font-light">
                                        בדרך כלל חוזר תוך יום עסקים אחד.
                                        <br />
                                        שיחת ההיכרות הראשונה היא ללא עלות וללא התחייבות.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-24 text-center">
                            <h2 className="text-xl text-[#4C4A49] mb-4 font-light">זמינות</h2>
                            <div className="text-[#6B6867] font-light space-y-2">
                                <p>ימים א׳-ה׳ | 09:00-20:00</p>
                                <p>
                                    מפגשים פיזיים: 
                                    <a 
                                        href="https://www.google.com/maps/search/?api=1&query=31.05365127751188,34.69029811783664" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="hover:text-[#A2673E] transition-colors underline underline-offset-4"
                                    >
                                        רמת נגב
                                    </a> 
                                    | מפגשים בזום: בכל מקום בארץ
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}
