// [Category A: UI / Design / Layout]
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import FloralDivider from '@/components/FloralDivider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Play } from 'lucide-react';
import { useAudio } from '@/contexts/AudioContext';

export default function ReservistsWorkshops() {
    const { setShowPlayer } = useAudio();
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
            q: "מה כוללת הסדנה?",
            a: "הסדנה כוללת עיבוד של חוויות השירות, מתן כלים פרקטיים להתמודדות עם מצבי לחץ, ותמיכה רגשית קבוצתית המאפשרת לחזור לשגרה האזרחית, המשפחתית והתעסוקתית בצורה הדרגתית ובריאה."
        },
        {
            q: "האם צריך לדבר בפני כולם בסדנה?",
            a: "לא. כל אחד מגיע לקצב שלו. יש כאלה שמדברים הרבה ויש כאלה שבעיקר מקשיבים — ושניהם מרוויחים מהתהליך בדיוק אותו הדבר."
        },
        {
            q: "האם אפשר להצטרף גם בזום?",
            a: "כן. הסדנאות מתקיימות גם בזום ומאפשרות השתתפות מכל מקום בארץ."
        }
    ];

    return (
        <Layout>
            <SEO 
                title="סדנאות למילואימניקים | אביהו סיטון" 
                description="סדנאות תמיכה למילואימניקים בחזרה לשגרה — עיבוד חוויות, כלים פרקטיים וחזרה לזוגיות ולמשפחה. בשיתוף ויצו, ברמת נגב ובזום. 8 מפגשים בקבוצה קטנה."
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
                        <h1 className="text-4xl sm:text-6xl text-[#4C4A49] mb-8 font-light text-center">להוריד את המדים - גם בתוך הנפש</h1>
                        <div className="w-32 h-px bg-[#D3C1B1] mx-auto mb-12"></div>
                        
                        <div className="text-lg text-[#4C4A49] leading-relaxed space-y-8 mb-16 font-light text-center">
                            <p className="text-xl font-normal border-r-4 border-[#A2673E] pr-6 py-4 bg-[#FDF8F0]/50 rounded-lg">
                                לחזור הביתה זה לא אירוע — זה תהליך. הגוף נסע, אבל חלק מהראש עדיין שם. ואנשים שאוהבים אותך לא תמיד יודעים איך לשאול, ואתה לא תמיד יודע איך לענות. הסדנה הזו היא מרחב שבו אפשר סוף סוף להוריד את המדים — גם בתוך הנפש.
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

                            <div className="flex justify-center my-12">
                                <button
                                    onClick={() => setShowPlayer(true)}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        backgroundColor: 'transparent',
                                        border: '1px solid rgba(162, 103, 62, 0.4)',
                                        borderRadius: '24px',
                                        padding: '10px 24px',
                                        cursor: 'pointer',
                                        color: '#A2673E',
                                        fontSize: '15px',
                                        fontWeight: '500',
                                        transition: 'all 0.2s',
                                    }}
                                    className="hover:bg-[#A2673E]/5 hover:border-[#A2673E] transition-all"
                                >
                                    <Play size={14} fill="#A2673E" />
                                    האזן לראיון בגלי צה״ל (קולה של אמא)
                                </button>
                            </div>
                            
                            <div className="text-right">
                                <p>
                                    המעבר החד מהדריכות של השטח לשקט של הסלון, מהפיקוד והמשימה - לחיתולים, לעבודה ולזוגיות, הוא תהליך מורכב. אם אתם מרגישים שחזרתם פיזית אבל הלב שלכם עדיין קצת "שם", או שהשגרה נראית פתאום זרה ומתישה - אתם לא לבד. זהו שלב שדורש מרחב וזמן לעיבוד.
                                </p>
                                <p>
                                    בסדנאות שלנו אנחנו יוצרים את המרחב הזה בדיוק. זהו מקום שבו אפשר להוריד את המדים רגשית, לדבר עם אנשים שעברו את אותן חוויות, ולמצוא את הדרך חזרה לעצמכם. נלמד להכיר את דפוסי התגובה שאימצנו בשירות ואיך לגשר על הפער שנוצר מול הבית והמשפחה.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 mb-20">
                            <div className="bg-[#FDF8F0] p-8 rounded-xl shadow-sm">
                                <h2 className="text-2xl text-[#4C4A49] mb-6 font-normal">מה נשיג בתהליך?</h2>
                                <ul className="space-y-4 text-[#555251] font-light">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#A2673E] mt-2.5 flex-shrink-0"></div>
                                        <span>עיבוד חוויות השירות במרחב בטוח ונטול שיפוטיות</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#A2673E] mt-2.5 flex-shrink-0"></div>
                                        <span>כלים פרקטיים לגישור על הפער בין ה"שטח" ל"בית"</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#A2673E] mt-2.5 flex-shrink-0"></div>
                                        <span>התמודדות עם מתח, דריכות יתר ושינויים רגשיים</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#A2673E] mt-2.5 flex-shrink-0"></div>
                                        <span>מציאת הקצב האישי מחדש בתוך השגרה האזרחית</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-[#FDF8F0] p-8 rounded-xl shadow-sm">
                                <h2 className="text-2xl text-[#4C4A49] mb-6 font-normal">איך זה עובד?</h2>
                                <p className="text-[#555251] font-light leading-relaxed">
                                    הסדנאות מתקיימות בקבוצות קטנות ואינטימיות, שבהן לכל לוחם יש מקום להביא את עצמו. התהליך משלב שיח פתוח יחד עם לימוד של שיטת "דרך", כדי לתת לכם כלים אמיתיים לחזרה מלאה ובריאה למשפחה ולחיים.
                                </p>
                            </div>
                        </div>

                        <FloralDivider />

                        <div className="py-20">
                            <h2 className="text-3xl text-[#4C4A49] mb-12 font-light text-center">מה תיקח איתך מהסדנה</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-[#FDF8F0] p-6 rounded-xl border border-[#D3C1B1]/30">
                                    <div className="text-3xl text-[#A2673E]/40 font-serif mb-4">01</div>
                                    <p className="text-[#4C4A49] font-light leading-relaxed">
                                        כלים פרקטיים לניהול מצבי לחץ שעובדים גם בשטח האזרחי
                                    </p>
                                </div>
                                <div className="bg-[#FDF8F0] p-6 rounded-xl border border-[#D3C1B1]/30">
                                    <div className="text-3xl text-[#A2673E]/40 font-serif mb-4">02</div>
                                    <p className="text-[#4C4A49] font-light leading-relaxed">
                                        הבנה של מה קורה לך רגשית — בלי פסיכולוגיזציה מיותרת
                                    </p>
                                </div>
                                <div className="bg-[#FDF8F0] p-6 rounded-xl border border-[#D3C1B1]/30">
                                    <div className="text-3xl text-[#A2673E]/40 font-serif mb-4">03</div>
                                    <p className="text-[#4C4A49] font-light leading-relaxed">
                                        דרך לחזור לזוגיות ולמשפחה בלי להרגיש זר בתוך הבית שלך
                                    </p>
                                </div>
                                <div className="bg-[#FDF8F0] p-6 rounded-xl border border-[#D3C1B1]/30">
                                    <div className="text-3xl text-[#A2673E]/40 font-serif mb-4">04</div>
                                    <p className="text-[#4C4A49] font-light leading-relaxed">
                                        קבוצה של אנשים שמבינים — כי עברו את אותו הדבר
                                    </p>
                                </div>
                            </div>
                        </div>

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
                            <h3 className="text-2xl mb-6 font-light">חזרתם מהמילואים? בואו נחזור יחד לשגרה</h3>
                            <p className="mb-8 text-[#D3C1B1] font-light">צרו קשר לבירור מועדי הסדנאות הקרובות.</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a 
                                    href="https://wa.me/972532853235?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%91%D7%99%D7%94%D7%95%20-%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%95%D7%93%20%D7%A2%D7%9C%20%D7%94%D7%A1%D7%93%D7%A0%D7%94%20%D7%9C%D7%9E%D7%99%D7%9C%D7%95%D7%90%D7%99%D7%9E%D7%A0%D7%99%D7%A7%D7%99%D7%9D" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#A2673E] hover:bg-[#8d5a36] px-8 py-3 rounded-lg transition-all shadow-md"
                                >
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
