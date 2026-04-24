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
                        <h1 className="text-4xl sm:text-6xl text-[#4C4A49] mb-8 font-light text-center">טיפול רגשי אישי</h1>
                        <div className="w-32 h-px bg-[#D3C1B1] mx-auto mb-12"></div>
                        
                        <div className="text-lg text-[#6B6867] leading-relaxed space-y-8 mb-16">
                            <p className="text-xl text-[#4C4A49] font-normal border-right-4 border-[#A2673E] pr-6 py-2 bg-[#FDF8F0]/30 rounded-lg">
                                מחפשים טיפול רגשי ברמת נגב? אביהו סיטון מציע פסיכותרפיה אישית בשיטת "דרך" למבוגרים ונוער, המתמקדת בזיהוי דפוסי נפש ובניית חוסן רגשי להתמודדות עם אתגרי החיים.
                            </p>
                            <p>
                                הטיפול הרגשי הוא מרחב בטוח ומכיל שבו ניתן להניח את כל מה שיושב על הלב. בשיטת "דרך", אנחנו חוקרים את הדינמיקה הפנימית שלנו, מזהים את ה"פעימה" האישית שלנו ולומדים איך לפעול מתוך בחירה חופשית ולא מתוך תגובתיות אוטומטית. 
                            </p>
                            <p>
                                הטיפול משלב עבודה רגשית עמוקה יחד עם כלים פרקטיים להתמודדות עם מצבי לחץ, חרדה ותחושת חוסר משמעות. הוא מתקיים באווירה של כבוד הדדי, הקשבה עמוקה ואמונה בלתי מתפשרת ביכולת של כל אדם להירפא ולצמוח בקליניקה ברמת נגב או במפגשים מקוונים.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 mb-20">
                            <div className="bg-[#FDF8F0] p-8 rounded-xl shadow-sm">
                                <h2 className="text-2xl text-[#4C4A49] mb-6 font-normal">למי זה מתאים?</h2>
                                <ul className="space-y-4 text-[#6B6867] list-disc list-inside">
                                    <li>אנשים החווים תקופות של משבר או שינוי משמעותי</li>
                                    <li>המתמודדים עם חרדה, מתח או תחושת חוסר שקט</li>
                                    <li>מי שמרגיש "תקוע" במערכות יחסים או בקריירה</li>
                                    <li>כאלו המחפשים משמעות וחיבור עמוק יותר לעצמם</li>
                                    <li>נוער ומבוגרים בתהליכי גיבוש זהות</li>
                                </ul>
                            </div>
                            <div className="bg-[#FDF8F0] p-8 rounded-xl shadow-sm">
                                <h2 className="text-2xl text-[#4C4A49] mb-6 font-normal">איך נראה התהליך?</h2>
                                <ol className="space-y-4 text-[#6B6867] list-decimal list-inside">
                                    <li>שיחת היכרות ראשונית לתיאום ציפיות</li>
                                    <li>זיהוי האתגרים המרכזיים והגדרת מטרות</li>
                                    <li>מפגשים שבועיים בני 50 דקות</li>
                                    <li>עבודה על פי שיטת "דרך" לבניית עצמאות רגשית</li>
                                    <li>שילוב כלים פרקטיים ליישום במציאות היום-יומית</li>
                                </ol>
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
                            <p className="mb-8 text-[#D3C1B1] font-light">אני מזמין אתכם לשיחת היכרות קצרה ללא התחייבות.</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="/contact" className="bg-[#A2673E] hover:bg-[#8d5a36] px-8 py-3 rounded-lg transition-all shadow-md">
                                    צרו קשר לתיאום
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
