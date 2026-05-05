import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { Play, Heart, Shield, Users, Award, BookOpen, MessageCircle } from 'lucide-react';
import { useAudio } from '@/contexts/AudioContext';
import FloralDivider from '@/components/FloralDivider';

export default function About() {
    const { setShowPlayer } = useAudio();
    
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "אביהו סיטון",
        "jobTitle": "פסיכותרפיסט",
        "description": "אביהו סיטון — פסיכותרפיסט ומנחה קבוצות בשיטת דרך. מלווה מילואימניקים, זוגות ואנשים בצומת דרכים.",
        "url": "https://avihusitton.com/about"
    };

    return (
        <Layout>
            <SEO 
                title="אודות | אביהו סיטון — פסיכותרפיסט" 
                description="נעים להכיר, אני אביהו סיטון. פסיכותרפיסט בשיטת דרך. כאן תוכלו לקרוא על הדרך המקצועית שלי, על הגישה הטיפולית ועל האמונה שלי בתהליכי צמיחה ושינוי."
                canonical="/about"
                schema={aboutSchema}
            />
            
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <h1 className="text-4xl sm:text-6xl text-[#4C4A49] font-light mb-8 leading-tight">
                                לחזור לעצמך, <br />
                                <span className="text-[#A2673E]">בדרך שלך</span>
                            </h1>
                            <div className="text-lg text-[#4C4A49] leading-relaxed space-y-6 font-light">
                                <p>
                                    נעים להכיר, אני אביהו. המפגש הראשון שלי עם עולם הטיפול התחיל ב-2014, ומאז אני צועד בדרך הזו — לומד, מעמיק ומלווה אנשים ברגעים של צומת, משבר או חיפוש.
                                </p>
                                <p className="text-xl font-normal border-r-4 border-[#A2673E] pr-6 py-2 bg-[#FDF8F0]/50 rounded-lg italic">
                                    "אני עוזר לאנשים בשיטה המתאימה להם, מתוך אמונה מלאה שהם אלו שיכולים וצריכים להוביל את עצמם במסע הזה."
                                </p>
                                <p>
                                    אני מאמין ששינוי הוא כמו זרע שנטמן בנפש. הוא מתחיל את המסע שלו בשקט, ובתנאים המתאימים — עם מספיק כבוד, עדינות וסבלנות — הוא ינבוט ויצמח. התפקיד שלי הוא לעזור לכם ליצור את התנאים האלו.
                                </p>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="order-1 lg:order-2 flex justify-center"
                        >
                            <div className="relative">
                                <div className="w-64 h-80 sm:w-80 sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl z-10 relative border-8 border-white">
                                    <img 
                                        src="/images/about-profile.jpg"
                                        alt="אביהו סיטון"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#D3C1B1]/20 rounded-full blur-3xl -z-10"></div>
                                <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#A2673E]/10 rounded-full blur-3xl -z-10"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why I Chose This Section */}
            <section className="py-16 bg-[#FDF8F0]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl sm:text-4xl text-[#4C4A49] font-light mb-6">למה בחרתי בזה</h2>
                        <div className="w-24 h-px bg-[#D3C1B1] mx-auto"></div>
                    </div>
                    <div className="text-lg text-[#6B6867] font-light leading-relaxed text-right">
                        <p>[PLACEHOLDER — אביהו ימלא כאן סיפור אישי קצר]</p>
                    </div>
                </div>
            </section>

            {/* How I Work Section */}
            <section className="py-20 bg-[#FDF8F0]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl text-[#4C4A49] font-light mb-6">איך אני פוגש אנשים</h2>
                        <div className="w-24 h-px bg-[#D3C1B1] mx-auto"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#D3C1B1]/10">
                            <div className="w-12 h-12 bg-[#A2673E]/10 rounded-full flex items-center justify-center mb-6">
                                <Heart className="text-[#A2673E]" size={24} />
                            </div>
                            <h3 className="text-xl text-[#4C4A49] mb-4 font-normal">נוכחות ויציבות</h3>
                            <p className="text-[#6B6867] font-light leading-relaxed">
                                המרחב שאני מייצר הוא מקום יציב ובטוח. אנשים פוגשים אצלי עיניים שמאמינות בהם, גם כשהם מתקשים להאמין בעצמם. אני כאן כדי להחזיק יחד אתכם את התקווה והאמונה בתהליך.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#D3C1B1]/10">
                            <div className="w-12 h-12 bg-[#A2673E]/10 rounded-full flex items-center justify-center mb-6">
                                <Shield className="text-[#A2673E]" size={24} />
                            </div>
                            <h3 className="text-xl text-[#4C4A49] mb-4 font-normal">חיבור פרקטי ורוחני</h3>
                            <p className="text-[#6B6867] font-light leading-relaxed">
                                אני מאמין בחיבור עמוק בין גוף, נפש ורוח, אבל בדרך שהיא "רגליים על הקרקע". הגישה שלי היא פרקטית, יהודית ואמיתית — כזו שאפשר לקחת איתכם לחיים עצמם, למשפחה ולעבודה.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Method Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center mb-12">
                        <Award className="text-[#A2673E] mb-4" size={32} />
                        <h2 className="text-3xl text-[#4C4A49] font-light mb-6">שיטת דרך — השפה שבה אני עובד</h2>
                        <div className="w-24 h-px bg-[#D3C1B1] mb-8"></div>
                        <p className="text-lg text-[#6B6867] font-light leading-relaxed">
                            אני עובד בשיטת "דרך", שרואה את הנפש כזרם חי שמחפש כל הזמן תנועה ואיזון.
                        </p>
                    </div>
                    
                    <div className="space-y-8 text-lg text-[#4C4A49] font-light leading-relaxed">
                        <div className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-[#A2673E] mt-3 flex-shrink-0"></div>
                            <p>אני לא רואה בסימפטומים או בקשיים רגשיים רק "בעיות" שצריך לפתור, אלא ניסיון של הנפש לשמור על עצמה ולהתארגן מחדש מול אתגרי החיים.</p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-[#A2673E] mt-3 flex-shrink-0"></div>
                            <p>העבודה שלנו יחד מבוססת על חמלה וראיית הטוב שבכם, לצד פיתוח אחריות אישית, יכולת בחירה וחוסן פנימי.</p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-[#A2673E] mt-3 flex-shrink-0"></div>
                            <p>זו שיטה שמשלבת מבט עמוק מאוד על מבנה הנפש יחד עם כלים מעשיים לעבודה רגשית יום-יומית.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Training Section */}
            <section className="py-20 bg-[#FDF8F0]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="bg-[#4C4A49] text-white p-10 rounded-2xl shadow-xl">
                            <div className="flex items-center gap-4 mb-8">
                                <BookOpen size={28} className="text-[#D3C1B1]" />
                                <h2 className="text-2xl font-light">הכשרה וניסיון מקצועי</h2>
                            </div>
                            <div className="space-y-6 font-light text-white/90">
                                <p>
                                    עברתי הכשרה מעמיקה של 3 שנים בבית הספר למטפלים בשיטת "דרך". הלימודים כללו לא רק ידע תיאורטי, אלא תהליך אישי עמוק שבו פגשתי את החלקים הנסתרים של עצמי — כי אני מאמין שמטפל טוב הוא קודם כל אדם שעבר בעצמו את הדרך.
                                </p>
                                <ul className="space-y-3 border-t border-white/10 pt-6">
                                    <li className="flex items-center gap-2">✓ פסיכופתולוגיה והתמכרויות</li>
                                    <li className="flex items-center gap-2">✓ חרדה ודיכאון</li>
                                    <li className="flex items-center gap-2">✓ זוגיות, משפחה ועבודה עם נוער</li>
                                    <li className="flex items-center gap-2">✓ הנחיית קבוצות וסימולציות קליניות</li>
                                </ul>
                                <p className="text-sm italic text-[#D3C1B1] mt-4">
                                    ההכשרה העניקה לי את היכולת לייצר מרחב טיפולי נקי, כזה שמאפשר לכם להיות מי שאתם באמת.
                                </p>
                            </div>
                        </div>
                        
                        <div className="space-y-8">
                            <div className="text-center lg:text-right">
                                <h2 className="text-3xl text-[#4C4A49] font-light mb-6">עם מי אני עובד?</h2>
                                <div className="w-24 h-px bg-[#D3C1B1] mb-8 lg:mr-0 lg:ml-auto"></div>
                            </div>
                            <div className="grid gap-4">
                                {[
                                    { title: "צעירים ובוגרים (20-40)", desc: "אנשים שמחפשים את דרכם המקצועית, האישית או הזוגית.", icon: Users },
                                    { title: "זוגות", desc: "שרוצים להחזיר את הזרימה, התשוקה והחיבור לקשר.", icon: Heart },
                                    { title: "מילואימניקים", desc: "שזקוקים למרחב של עיבוד וחזרה לשגרה אחרי שירות.", icon: Shield },
                                    { title: "אנשים בצומת שינוי", desc: "שמרגישים שזה הזמן לעשות צעד קדימה בחיים.", icon: Award }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-[#D3C1B1]/20">
                                        <div className="w-10 h-10 bg-[#A2673E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <item.icon size={20} className="text-[#A2673E]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[#4C4A49] font-normal">{item.title}</h4>
                                            <p className="text-sm text-[#6B6867] font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Media/Interview Section (Relocated and refined) */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl text-[#4C4A49] font-light mb-10 text-center">ראיונות ותקשורת</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg bg-[#4C4A49]">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/FYTVnIEOAWM"
                                title="אביהו סיטון - ראיון טלוויזיוני"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="bg-[#FDF8F0] p-8 rounded-xl flex flex-col items-center justify-center text-center">
                            <h3 className="text-xl font-light text-[#4C4A49] mb-4">ראיון בגלי צה״ל</h3>
                            <p className="text-sm text-[#6B6867] mb-6 font-light">
                                מוזמנים להאזין לשיחה פתוחה על חזרה לשגרה, טיפול ומה שביניהם.
                            </p>
                            <button
                                onClick={() => setShowPlayer(true)}
                                className="inline-flex items-center gap-2 border border-[#A2673E] text-[#A2673E] px-6 py-2.5 rounded-full hover:bg-[#A2673E] hover:text-white transition-all text-sm"
                            >
                                <Play size={14} fill="currentColor" />
                                האזן לראיון המלא
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <FloralDivider />

            {/* Final CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <MessageCircle className="text-[#A2673E] mx-auto mb-6" size={40} />
                    <h2 className="text-3xl sm:text-4xl text-[#4C4A49] font-light mb-8">נשמע לכם שהגעתם למקום הנכון?</h2>
                    <p className="text-xl text-[#6B6867] font-light leading-relaxed mb-12">
                        אני מזמין אתכם לשיחה פתוחה, בגובה העיניים, שבה נבדוק יחד איך אפשר להתחיל את המסע שלכם. בואו נדבר.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="https://wa.me/972532853235" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#A2673E] text-white px-10 py-4 rounded-xl shadow-lg hover:bg-[#8d5a36] transition-all text-lg font-light"
                        >
                            שלח הודעה בוואטסאפ
                        </a>
                        <a 
                            href="/contact" 
                            className="border border-[#A2673E] text-[#A2673E] px-10 py-4 rounded-xl hover:bg-[#A2673E]/5 transition-all text-lg font-light"
                        >
                            השאר פרטים באתר
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}