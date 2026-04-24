import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import FloralDivider from '../components/FloralDivider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CouplesPage() {
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
                title="ליווי זוגי וקבוצות" 
                description="ליווי זוגי וקבוצות זוגיות בשיטת דרך. מחזירים את התקשורת, האינטימיות והצמיחה למרחב הזוגי ברמת נגב או בזום."
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
                        <h1 className="text-4xl sm:text-6xl text-[#4C4A49] mb-8 font-light text-center">ליווי זוגי וקבוצות</h1>
                        <div className="w-32 h-px bg-[#D3C1B1] mx-auto mb-12"></div>
                        
                        <div className="text-lg text-[#6B6867] leading-relaxed space-y-8 mb-16">
                            <p className="text-xl text-[#4C4A49] font-normal border-right-4 border-[#A2673E] pr-6 py-2 bg-[#FDF8F0]/30 rounded-lg">
                                זקוקים לייעוץ או ליווי זוגי בדרום? אביהו סיטון מציע תהליכי ליווי וקבוצות זוגיות בשיטת "דרך", המתמקדים בבניית עצמאות רגשית, שיפור התקשורת ויצירת מרחב לצמיחה משותפת.
                            </p>
                            <p>
                                זוגיות היא מרחב מופלא של גדילה, אך היא גם המקום שבו הפצעים והדפוסים העמוקים ביותר שלנו נוטים לצוף. בליווי הזוגי אנחנו לומדים להפוך את הזוגיות משדה קרב או ממקום של הישרדות, למרחב של צמיחה משותפת המבוססת על עצמאות רגשית.
                            </p>
                            <p>
                                אנחנו לא רק מדברים על בעיות, אלא לומדים איך לנהל דיאלוג ישיר ואמיץ. המטרה היא שכל אחד מבני הזוג ילמד להכיר את הצרכים שלו וייקח אחריות על הרגשות שלו, מתוך הבנה שככל שנהיה שלמים יותר עם עצמנו, כך נוכל להעניק ולהתחבר באמת לצד השני. הליווי מתקיים בקליניקה ברמת נגב או במפגשים מקוונים.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 mb-20">
                            <div className="bg-[#FDF8F0] p-8 rounded-xl shadow-sm">
                                <h2 className="text-2xl text-[#4C4A49] mb-6 font-normal">למי זה מתאים?</h2>
                                <ul className="space-y-4 text-[#6B6867] list-disc list-inside">
                                    <li>זוגות החווים משבר או תחושת ריחוק</li>
                                    <li>זוגות המעוניינים לשפר את התקשורת והשיח</li>
                                    <li>מי שמרגיש שהקונפליקטים חוזרים על עצמם ללא מוצא</li>
                                    <li>זוגות לקראת שינויים משמעותיים (לידה, מעבר מגורים וכו')</li>
                                    <li>זוגות שרוצים להעמיק את האינטימיות והחברות</li>
                                </ul>
                            </div>
                            <div className="bg-[#FDF8F0] p-8 rounded-xl shadow-sm">
                                <h2 className="text-2xl text-[#4C4A49] mb-6 font-normal">איך נראה התהליך?</h2>
                                <ol className="space-y-4 text-[#6B6867] list-decimal list-inside">
                                    <li>שיחה משותפת ראשונית להבנת הצרכים</li>
                                    <li>זיהוי ה"ריקוד" הזוגי והדפוסים המעכבים</li>
                                    <li>מפגשים מובנים המשלבים שיח ותרגול</li>
                                    <li>עבודה על עצמאות רגשית בתוך הביחד</li>
                                    <li>קבוצות חווייתיות (במידה ובוחרים במסלול קבוצתי)</li>
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
                            <h3 className="text-2xl mb-6 font-light">מוכנים להחזיר את הזרימה לזוגיות?</h3>
                            <p className="mb-8 text-[#D3C1B1] font-light">צרו קשר לתיאום פגישת היכרות זוגית.</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="/contact" className="bg-[#A2673E] hover:bg-[#8d5a36] px-8 py-3 rounded-lg transition-all shadow-md">
                                    צרו קשר לתיאום
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
