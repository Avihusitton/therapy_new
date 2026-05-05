import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import FloralDivider from '@/components/FloralDivider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Couples() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "ליווי זוגי — שיטת דרך",
        "description": "בניית עצמאות רגשית, ניהול קונפליקטים ובניית שיח זוגי ישיר ואיתן",
        "provider": {
            "@type": "Person",
            "name": "אביהו סיטון",
            "url": "https://avihusitton.com"
        },
        "areaServed": {
            "@type": "Place",
            "name": "רמת נגב, ישראל"
        },
        "url": "https://avihusitton.com/couples"
    };

    const faqs = [
        {
            q: "מה זה שיטת 'דרך' בליווי זוגי?",
            a: "שיטת דרך היא מתודולוגיה טיפולית המתמקדת בבניית עצמאות רגשית, ניהול קונפליקטים ויצירת שיח זוגי ישיר שמחזיר כבוד וזרימה חיובית למערכת הזוגית."
        },
        {
            q: "כמה מפגשים כוללת קבוצת הזוגיות?",
            a: "הקבוצות הן חווייתיות ומונות 5 עד 10 מפגשים, בהתאם לצרכי הקבוצה ולנושאים שעולים בה."
        }
    ];

    return (
        <Layout>
            <SEO 
                title="ליווי זוגי וקבוצות | אביהו סיטון" 
                description="ליווי זוגי וקבוצות זוגיות בשיטת דרך — להחזיר תקשורת, אינטימיות וצמיחה משותפת. 5 עד 10 מפגשים, ברמת נגב או בזום. פגישת היכרות ראשונה ללא עלות."
                canonical="/couples"
                schema={schema}
            />
            
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-6xl text-[#4C4A49] mb-8 font-light text-center">להיות "ביחד" בלי לאבד את ה"עצמי"</h1>
                        <div className="w-32 h-px bg-[#D3C1B1] mx-auto mb-12"></div>
                        
                        <div className="text-lg text-[#4C4A49] leading-relaxed space-y-8 mb-16 font-light">
                            <p className="text-xl font-normal border-r-4 border-[#A2673E] pr-6 py-2 bg-[#FDF8F0]/50 rounded-lg">
                                איך זה יכול להיות שהאדם הכי קרוב אלינו הופך לפעמים להיות זה שהכי קשה לנו לדבר איתו? 
                            </p>
                            <p>
                                אם אתם מרגישים שהקונפליקטים שלכם חוזרים על עצמם בלופ, שהמרחק ביניכם גדל למרות שאתם באותו בית, או שפשוט איבדתם את הסקרנות והתשוקה - זה הרגע לעצור. זוגיות היא המקום שבו הפצעים הכי עמוקים שלנו צפים, אבל היא גם המרחב הכי חזק לצמיחה.
                            </p>
                            <p>
                                בליווי הזוגי בשיטת "דרך", אנחנו לא רק "פותרים בעיות". אנחנו לומדים להפוך את הזוגיות משדה קרב של הישרדות למרחב של גילוי. נבין יחד את ה"ריקוד" הזוגי שלכם ואיך כל אחד מכם יכול לקחת אחריות על החלק שלו בתוכו. המטרה היא לבנות זוגיות שמבוססת על עצמאות רגשית - כי ככל שנהיה שלמים יותר עם עצמנו, כך נוכל להתחבר באמת לצד השני.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 mb-20">
                            <div className="bg-[#FDF8F0] p-8 rounded-xl shadow-sm">
                                <h2 className="text-2xl text-[#4C4A49] mb-6 font-normal">מה נשיג בתהליך?</h2>
                                <ul className="space-y-4 text-[#555251] font-light">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#A2673E] mt-1">•</span>
                                        זיהוי ה"ריקוד" הזוגי והדפוסים שחוסמים אתכם
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#A2673E] mt-1">•</span>
                                        בניית שיח ישיר, אמיץ ומכבד שיוצר אינטימיות חדשה
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#A2673E] mt-1">•</span>
                                        לימוד כלים לניהול קונפליקטים מתוך צמיחה ולא מתוך פגיעה
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#A2673E] mt-1">•</span>
                                        החזרת הסקרנות והחברות למרכז המערכת הזוגית
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-[#FDF8F0] p-8 rounded-xl shadow-sm">
                                <h2 className="text-2xl text-[#4C4A49] mb-6 font-normal">איך זה עובד?</h2>
                                <p className="text-[#555251] font-light leading-relaxed">
                                    אנחנו נפגשים בקליניקה או בזום לתהליך מובנה שבו כל אחד מכם מקבל מקום. נלמד איך להחליף את ההאשמות ההדדיות בלקיחת אחריות אישית, ונבין איך לבנות "ביחד" חזק שלא מבטל את הייחודיות של כל אחד מכם.
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

                        <section className="mt-20 py-16 bg-[#FDF8F0] rounded-2xl">
                            <div className="max-w-3xl mx-auto px-6 text-center">
                                <h2 className="text-3xl text-[#4C4A49] mb-10 font-light">מה אנשים אומרים</h2>
                                <div className="w-24 h-px bg-[#D3C1B1] mx-auto mb-10"></div>
                            </div>
                        </section>

                        <div className="mt-24 p-10 bg-[#4C4A49] text-white rounded-2xl text-center">
                            <h3 className="text-2xl mb-6 font-light">מוכנים להחזיר את הזרימה לזוגיות?</h3>
                            <p className="mb-8 text-[#D3C1B1] font-light">אני מזמין אתכם לשיחה משותפת, שבה נניח את הבסיס למסע הזוגי החדש שלכם.</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="/contact" className="bg-[#A2673E] hover:bg-[#8d5a36] px-8 py-3 rounded-lg transition-all shadow-md">
                                    בואו נדבר
                                </a>
                                <a href="/reservists-workshops" className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg transition-all">
                                    סדנאות למילואימניקים
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}
