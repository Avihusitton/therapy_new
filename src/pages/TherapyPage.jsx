import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import FloralDivider from '../components/FloralDivider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function TherapyPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "טיפול רגשי אישי — שיטת דרך",
        "description": "פסיכותרפיה אישית, זיהוי דפוסי נפש ובניית תשתית רגשית איתנה למבוגרים ונוער",
        "provider": {
            "@type": "Person",
            "name": "אביהו סיטון",
            "url": "https://avihusitton.com"
        },
        "areaServed": {
            "@type": "Place",
            "name": "רמת נגב, ישראל"
        },
        "url": "https://avihusitton.com/therapy"
    };

    const faqs = [
        {
            q: "למי מתאים טיפול רגשי?",
            a: "הטיפול מתאים לכל מי שחווה משבר, מצוקה רגשית, תחושת תקיעות או רצון להעמיק את ההיכרות עם עצמו. הוא מתאים למבוגרים ונוער המתמודדים עם חרדה, דיכאון, קשיים במערכות יחסים או שאלות של זהות ומשמעות."
        },
        {
            q: "איך נראה טיפול בשיטת 'דרך'?",
            a: "שיטת 'דרך' מתמקדת בזיהוי דפוסי הנפש הייחודיים שלך ובבניית עצמאות רגשית. אנחנו עובדים עם המציאות כפי שהיא, לומדים לקחת אחריות על החלקים הלא מעובדים שלנו ולהפוך אתגרי חיים להזדמנויות לצמיחה."
        }
    ];

    return (
        <Layout>
            <SEO 
                title="טיפול רגשי אישי" 
                description="טיפול רגשי אישי בשיטת דרך עם אביהו סיטון. מסע של גילוי, ריפוי וצמיחה אישית בקליניקה ברמת נגב או במפגשים מקוונים."
                canonical="/therapy"
                schema={schema}
            />
            
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-6xl text-[#4C4A49] mb-8 font-light text-center">לחזור להיות הגיבור של הסיפור שלך</h1>
                        <div className="w-32 h-px bg-[#D3C1B1] mx-auto mb-12"></div>
                        
                        <div className="text-lg text-[#4C4A49] leading-relaxed space-y-8 mb-16 font-light">
                            <p className="text-xl font-normal border-r-4 border-[#A2673E] pr-6 py-2 bg-[#FDF8F0]/50 rounded-lg">
                                לפעמים זה מרגיש שהחיים פשוט "קורים" לנו. אנחנו מגיבים לאירועים, מתמודדים עם לחצים, ומוצאים את עצמנו בלופ של תגובות אוטומטיות שמשאירות אותנו עייפים ובתחושת תקיעות.
                            </p>
                            <p>
                                אם אתם מרגישים שהקול הפנימי שלכם קצת הלך לאיבוד בתוך הרעש של היום-יום, או שיש דפוסים שחוזרים על עצמם ושואבים מכם אנרגיה - אתם לא לבד. הטיפול בשיטת "דרך" הוא לא רק "לדבר על הבעיות". זהו מרחב שבו נלמד יחד לזהות את מבנה הנפש הייחודי שלכם.
                            </p>
                            <p>
                                נבין איפה אתם מאבדים את הבחירה החופשית ואיך להחזיר אותה לידיים שלכם. המטרה שלי היא לא שתהיו תלויים במטפל, אלא שתלמדו להכיר את ה"פעימה" הפנימית שלכם ולהפוך למטפלים הטובים ביותר של עצמכם.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 mb-20">
                            <div className="bg-[#FDF8F0] p-8 rounded-xl shadow-sm">
                                <h2 className="text-2xl text-[#4C4A49] mb-6 font-normal">מה נשיג בתהליך?</h2>
                                <ul className="space-y-4 text-[#555251] font-light">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#A2673E] mt-1">•</span>
                                        זיהוי הדפוסים שגורמים לכם להגיב ב"אוטומט" ושינוי שלהם
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#A2673E] mt-1">•</span>
                                        הפיכת משברים והתמודדויות להזדמנויות לצמיחה וריפוי
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#A2673E] mt-1">•</span>
                                        פיתוח חוסן רגשי פנימי שאינו תלוי בנסיבות חיצוניות
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#A2673E] mt-1">•</span>
                                        יצירת שקט נפשי ובניית בסיס משמעותי לשינוי בחיים
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-[#FDF8F0] p-8 rounded-xl shadow-sm">
                                <h2 className="text-2xl text-[#4C4A49] mb-6 font-normal">איך זה עובד?</h2>
                                <p className="text-[#555251] font-light leading-relaxed">
                                    הטיפול משלב עבודה רגשית עמוקה יחד עם כלים פרקטיים שניתן ליישם כבר מחר בבוקר. המפגשים מתקיימים בקליניקה שקטה ברמת נגב או בשיחת וידאו, באווירה של הקשבה נקייה ואמונה מלאה ביכולת שלכם להוביל את עצמכם קדימה.
                                </p>
                            </div>
                        </div>

                        <FloralDivider />

                        <div className="mt-20">
                            <h2 className="text-3xl text-[#4C4A49] mb-10 font-light text-center">שאלות נפוצות</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, i) => (
                                    <AccordionItem key={i} value={`item-${i}`}>
                                        <AccordionTrigger className="text-right text-[#4C4A49] text-lg font-light">
                                            {faq.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-right text-[#6B6867] text-base leading-relaxed">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        <div className="mt-24 p-10 bg-[#4C4A49] text-white rounded-2xl text-center">
                            <h3 className="text-2xl mb-6 font-light">מרגישים שזה הזמן הנכון להתחיל?</h3>
                            <p className="mb-8 text-[#D3C1B1] font-light">אני מזמין אתכם לשיחה קצרה שבה נבדוק יחד אם המרחב הזה נכון לכם עכשיו.</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="/contact" className="bg-[#A2673E] hover:bg-[#8d5a36] px-8 py-3 rounded-lg transition-all shadow-md">
                                    בואו נדבר
                                </a>
                                <a href="/couples" className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg transition-all">
                                    לפרטים על ליווי זוגי
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}
