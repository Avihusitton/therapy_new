import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <Layout>
            <SEO 
                title="צור קשר" 
                description="צרו קשר עם אביהו סיטון לתיאום שיחת היכרות ללא עלות. קליניקה ברתמים, רמת נגב או מפגשים מקוונים בזום."
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
                        
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div>
                                <h2 className="text-3xl text-[#4C4A49] mb-8 font-light">איך אפשר להשיג אותי?</h2>
                                <p className="text-lg text-[#6B6867] leading-relaxed mb-12">
                                    אני מאמין שהשיחה הראשונה היא התחלה של דרך. אם אתם מרגישים שזה הזמן הנכון, אני מזמין אתכם ליצור קשר בכל אחת מהדרכים הבאות או להשאיר פרטים בטופס ואחזור אליכם בהקדם.
                                </p>
                                
                                <div className="space-y-8">
                                    <div className="flex items-center gap-6 group">
                                        <div className="w-14 h-14 bg-[#FDF8F0] rounded-full flex items-center justify-center text-[#A2673E] group-hover:bg-[#A2673E] group-hover:text-white transition-all">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm text-[#B5A89D] uppercase tracking-wider mb-1">טלפון</h3>
                                            <a href="tel:0532853235" className="text-xl text-[#4C4A49] hover:text-[#A2673E] transition-colors ltr-text">053-2853235</a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-6 group">
                                        <div className="w-14 h-14 bg-[#FDF8F0] rounded-full flex items-center justify-center text-[#A2673E] group-hover:bg-[#A2673E] group-hover:text-white transition-all">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm text-[#B5A89D] uppercase tracking-wider mb-1">מייל</h3>
                                            <a href="mailto:Avihu.sitton@gmail.com" className="text-xl text-[#4C4A49] hover:text-[#A2673E] transition-colors ltr-text">Avihu.sitton@gmail.com</a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-6 group">
                                        <div className="w-14 h-14 bg-[#FDF8F0] rounded-full flex items-center justify-center text-[#A2673E] group-hover:bg-[#A2673E] group-hover:text-white transition-all">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm text-[#B5A89D] uppercase tracking-wider mb-1">מיקום</h3>
                                            <p className="text-xl text-[#4C4A49]">רתמים 17, רמת נגב | מפגשים בזום</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-[#FDF8F0] p-8 sm:p-12 rounded-2xl shadow-sm border border-[#D3C1B1]/20">
                                <h2 className="text-2xl text-[#4C4A49] mb-8 font-normal text-center">השאירו פרטים ואחזור אליכם</h2>
                                <ContactForm />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}
