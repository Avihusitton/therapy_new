// [Category A: UI / Design / Layout]
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';

export default function Terms() {
    return (
        <Layout>
            <SEO 
                title="תקנון ותנאי שימוש" 
                description="תקנון ותנאי שימוש באתר אביהו סיטון - הבהרה מקצועית, אחריות וקניין רוחני."
                canonical="/terms"
                noindex={true}
            />
            
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl sm:text-5xl text-[#4C4A49] mb-8 font-light text-center">תקנון ותנאי שימוש</h1>
                        <div className="w-24 h-px bg-[#D3C1B1] mx-auto mb-16"></div>
                        
                        <div className="text-lg text-[#6B6867] leading-relaxed space-y-12 text-right">
                            <div className="bg-[#FDF8F0] p-8 rounded-2xl border-r-4 border-[#A2673E]">
                                <h2 className="text-xl font-medium text-[#4C4A49] mb-4">הבהרה מקצועית חשובה</h2>
                                <p>
                                    אביהו סיטון הוא מטפל מוסמך בשיטת Authentic Path Therapy (A.P.T) — 
                                    שיטת דרך, מבית הספר למטפלים בשיטת דרך (מוסמך אוגוסט 2024). 
                                    אביהו סיטון אינו פסיכולוג קליני ואינו עובד סוציאלי קליני, 
                                    ואינו מחזיק ברישיון ממשרד הבריאות למקצועות אלו.
                                </p>
                            </div>

                            <section>
                                <p className="mb-4">
                                    התוכן באתר זה נועד להעשרה והכרות בלבד. אין לראות בו תחליף לטיפול 
                                    מקצועי אישי, אבחנה רפואית או פסיכיאטרית.
                                </p>
                                <div className="p-4 bg-red-50 text-red-800 rounded-lg border border-red-100 font-medium">
                                    בכל מצב חירום נפשי יש לפנות מיידית למיון הקרוב או לער"ן: 1201.
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-medium text-[#4C4A49] mb-4">שיטת דרך / Authentic Path Therapy</h2>
                                <p>
                                    שיטת דרך פותחה על ידי נועם בכור. אביהו סיטון הוא מטפל מוסמך 
                                    המורשה להשתמש בשיטה זו על פי הכשרתו מבית הספר למטפלים בשיטת דרך.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-medium text-[#4C4A49] mb-4">קישורים חיצוניים</h2>
                                <p>
                                    האתר עשוי להכיל קישורים לאתרים חיצוניים (כגון פייסבוק, ויצו ואתרי 
                                    חדשות). אין לראות בקישור כזה המלצה, ובעל האתר אינו אחראי לתוכן 
                                    או למדיניות הפרטיות של אתרים אלו.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-medium text-[#4C4A49] mb-4">קניין רוחני</h2>
                                <p>
                                    כל התכנים המקצועיים, המאמרים והטקסטים באתר הם קניינו הרוחני של 
                                    אביהו סיטון ואין להעתיק או להפיץ אותם ללא אישור מראש בכתב. 
                                    שיתוף תכנים מותר בתנאי ציון שם המחבר וקישור לאתר המקורי.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-medium text-[#4C4A49] mb-4">אחריות כללית</h2>
                                <p>
                                    בעל האתר אינו אחראי לכל שימוש שיעשה בתכנים המפורסמים באתר. 
                                    התכנים אינם מהווים אבחנה, המלצה רפואית או התחייבות לתוצאה טיפולית.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}
