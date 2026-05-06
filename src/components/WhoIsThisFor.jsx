import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, User } from 'lucide-react';

export default function WhoIsThisFor() {
    const audiences = [
        {
            icon: Shield,
            title: 'מילואימניקים בחזרה לשגרה',
            description:
                'אתה חוזר הביתה אבל משהו נשאר שם. הזוגיות, העבודה, השינה — לא לגמרי מה שהיה. כאן יש מרחב להניח את מה שאתה נושא, ולחזור לעצמך בקצב שלך.',
            color: '#8B9F6B',
        },
        {
            icon: Heart,
            title: 'זוגות בצומת',
            description:
                'אתם אוהבים אבל משהו נתקע. רוצים להעמיק, להחזיר את התשוקה, או פשוט ללמוד לדבר אחרת. סדנאות זוגיות ומסע זוגי שמחזירים את התנועה ביניכם.',
            color: '#A2673E',
        },
        {
            icon: User,
            title: 'יחידים במסע של גדילה',
            description:
                'אתה בצומת, בתהליך, או פשוט סקרן לגלות מה יש בך. הטיפול מכבד את הקצב שלך, משלב גוף נפש ורוח, ומניח תשתית לשינוי אמיתי.',
            color: '#8B7355',
        },
    ];

    return (
        <section className="py-16 sm:py-24 bg-white overflow-x-hidden w-full">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-4xl sm:text-6xl text-[#4C4A49] mb-4 sm:mb-6">למי זה מתאים</h2>
                    <div className="w-24 h-px bg-[#D3C1B1] mx-auto mb-6"></div>
                    <p className="text-base sm:text-lg text-[#4A4847] font-light max-w-2xl mx-auto leading-relaxed">
                        אני עובד עם שלושה קהלים עיקריים — אבל מעל הכל, עם אנשים שמוכנים
                        להוביל שינוי, לקחת אחריות ולחזור לבחור.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                    {audiences.map((a, index) => (
                        <motion.div
                            key={a.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-[#FDF8F0]/70 rounded-2xl p-6 sm:p-8 text-right hover:shadow-lg transition-shadow duration-300"
                        >
                            <div
                                className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                                style={{ backgroundColor: `${a.color}15` }}
                            >
                                <a.icon className="w-7 h-7" style={{ color: a.color }} />
                            </div>
                            <h3 className="text-xl sm:text-2xl text-[#4C4A49] font-normal mb-3 leading-snug">
                                {a.title}
                            </h3>
                            <div
                                className="w-12 h-px mb-4"
                                style={{ backgroundColor: a.color, opacity: 0.5 }}
                            />
                            <p className="text-sm sm:text-base text-[#4A4847] leading-relaxed font-light">
                                {a.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
