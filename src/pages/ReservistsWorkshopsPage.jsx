import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import FloralDivider from '../components/FloralDivider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AudioPlayer from '../components/AudioPlayer';

export default function ReservistsWorkshopsPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "סדנאות למילואימניקים — חזרה לשגרה",
        "description": "תהליך חזרה לשגרה, כלים פרקטיים ותמיכה נפשית למשרתי מילואים, בשיתוף ויצו.",
        "provider": {
            "@type": "Person",
            "name": "אביהו סיטון",
            "url": "https://avihusitton.com"
        },
        "areaServed": {
            "@type": "Place",
            "name": "רמת נגב, ישראל"
        },
        "url": "https://avihusitton.com/reservists-workshops"
    };

    const faqs = [
        {
            q: "האם הסדנה מתאימה גם לבני ובנות הזוג?",
            a: "הסדנה מיועדת ספציפית למשרתי מילואים ועוסקת בתהליך החזרה האישי שלהם. עם זאת, ישנם דגשים רבים על חזרה לזוגיות ולמשפחה, וניתן לתאם ליווי זוגי משלים במידת הצורך."
        },
        {
            q: "מה כוללת הסדנה בשיתוף ויצו?",
            a: "הסדנה כוללת עיבוד של חוויות השירות, מתן כלים פרקטיים להתמודדות עם מצבי לחץ, ותמיכה רגשית קבוצתית המאפשרת לחזור לשגרה האזרחית, המשפחתית והתעסוקתית בצורה הדרגתית ובריאה."
        }
    ];

    return (
        <Layout>
            <SEO 
                title="סדנאות למילואימניקים" 
                description="סדנאות תמיכה וכלים פרקטיים למשרתי מילואים בחזרה לשגרה. ליווי מקצועי בשיתוף ויצו לעיבוד חוויות השירות וחזרה לחיים האזרחיים."
                canonical="/reservists-workshops"
                schema={schema}
            />
            
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-6xl text-[#4C4A49] mb-8 font-light text-center">סדנאות למילואימניקים</h1>
                        <div className="w-32 h-px bg-[#D3C1B1] mx-auto mb-12"></div>
                        
                        <div className="text-lg text-[#6B6867] leading-relaxed space-y-8 mb-16">
                            <p className="text-xl text-[#4C4A49] font-normal border-right-4 border-[#A2673E] pr-6 py-2 bg-[#FDF8F0]/30 rounded-lg">
                                מחפשים סדנה למילואימניקים חזרה לשגרה? אביהו סיטון, בשיתוף ארגון ויצו, מקיים סדנאות לעיבוד חוויות שירות ומתן כלים פרקטיים למעבר בריא מהמילואים לחיים האזרחיים והמשפחתיים.
                            </p>

                            <div className="my-12">
                                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-2xl bg-[#4C4A49]">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://www.youtube.com/embed/FYTVnIEOAWM"
                                        title="אביהו סיטון - ראיון טלוויזיוני בנושא חזרה לשגרה ממילואים"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <p className="text-center text-sm text-[#B5A89D] mt-4 font-light">
                                    ראיון טלוויזיוני: אביהו סיטון על חזרה לשגרה לאחר מילואים בשיתוף ארגון ויצו
                                </p>
                            </div>

                            <AudioPlayer 
                                src="/audio/glz-interview.mp3"
                                title="ראיון ברדיו: קולה של אמא"
                                subtitle="אביהו סיטון בשיחה על תהליך החזרה הביתה וליווי מילואימניקים (גלי צה״ל)"
                            />
                            <p>
                                החזרה ממילואים ארוכים היא לא רק חזרה פיזית הביתה, אלא תהליך פסיכולוגי מורכב. המעבר החד מהאינטנסיביות של השירות לשגרה האזרחית והמשפחתית דורש זמן, הבנה ועיבוד. הסדנאות שלנו נועדו להעניק בדיוק את המרחב הזה עבור משרתי מילואים בדרום ובכל הארץ.
                            </p>
                            <p>
                                בשיתוף פעולה עם ארגון ויצו, אנחנו מציעים סדנאות קבוצתיות שבהן מילואימניקים נפגשים עם אנשים שעברו חוויות דומות. אנחנו לומדים איך לגשר על הפער שנוצר בין הבית לשטח, איך להתמודד עם רגשות שעולים רק כשמורידים את המדים, ואיך לחזור לתפקידי הבעל, האב והעובד מתוך עוצמה ובחירה בשיטת "דרך".
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 mb-20">
                            <div className="bg-[#FDF8F0] p-8 rounded-xl shadow-sm">
                                <h2 className="text-2xl text-[#4C4A49] mb-6 font-normal">למי זה מתאים?</h2>
                                <ul className="space-y-4 text-[#6B6867] list-disc list-inside">
                                    <li>משרתי מילואים שחזרו משירות ממושך</li>
                                    <li>מי שחווה קושי להסתגל לשגרת הבית והעבודה</li>
                                    <li>אנשים המרגישים פער רגשי מול הסביבה הקרובה</li>
                                    <li>מי שמחפש כלים פרקטיים להתמודדות עם מתח</li>
                                    <li>אלו שרוצים לעבד את חוויות השירות במרחב תומך</li>
                                </ul>
                            </div>
                            <div className="bg-[#FDF8F0] p-8 rounded-xl shadow-sm">
                                <h2 className="text-2xl text-[#4C4A49] mb-6 font-normal">איך נראה התהליך?</h2>
                                <ol className="space-y-4 text-[#6B6867] list-decimal list-inside">
                                    <li>פנייה ראשונית לבירור התאמה לסדנה</li>
                                    <li>סדרה של 5-10 מפגשים קבוצתיים</li>
                                    <li>עיבוד חוויות וזיהוי דפוסי תגובה</li>
                                    <li>למידת כלים בשיטת "דרך" לחזרה לשגרה</li>
                                    <li>יצירת קהילה תומכת של שותפים לדרך</li>
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
                            <h3 className="text-2xl mb-6 font-light">חזרתם מהמילואים? בואו נחזור יחד לשגרה</h3>
                            <p className="mb-8 text-[#D3C1B1] font-light">צרו קשר לבירור מועדי הסדנאות הקרובות.</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="/contact" className="bg-[#A2673E] hover:bg-[#8d5a36] px-8 py-3 rounded-lg transition-all shadow-md">
                                    צרו קשר לבירור
                                </a>
                                <a href="/therapy" className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg transition-all">
                                    לטיפול רגשי אישי
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}
