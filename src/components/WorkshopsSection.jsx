// [Category A: UI / Design / Layout]
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Calendar, MapPin, Users, ArrowLeft } from 'lucide-react';

export default function WorkshopsSection() {
    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    const workshops = [
        {
            icon: Shield,
            badge: 'סדנה קרובה',
            title: 'סדנה למילואימניקים — לחזור לעצמך',
            subtitle: 'תהליך קבוצתי קצר לחזרה הביתה אחרי שירות ממושך',
            bullets: [
                'מרחב לעבד את החוויה, את הפער, ואת החזרה',
                'כלים לחזרה לזוגיות ולמשפחה',
                'חברים לדרך — מי שמבין מבפנים',
            ],
            details: [
                { icon: Calendar, text: '8 מפגשים שבועיים' },
                { icon: MapPin, text: 'בזום או ברחבי הארץ' },
                { icon: Users, text: 'כ-8 משתתפים בקבוצה' },
            ],
            cta: 'להרשמה ולפרטים',
            accent: '#8B9F6B',
            accentBg: 'rgba(139, 159, 107, 0.08)',
        },
        {
            icon: Heart,
            badge: 'סדנה לזוגות',
            title: 'לעבור דרך — ביחד',
            subtitle: 'מסע זוגי במרחב קבוצתי — לעצור, להתבונן ולחזור להתאהב',
            bullets: [
                'לראות את הזוגיות דרך עיניים חדשות',
                'כלים מעשיים לשיח זוגי אמיתי',
                'החזרת הסקרנות והחיות למפגש הזוגי',
            ],
            details: [
                { icon: Calendar, text: '5 מפגשים' },
                { icon: MapPin, text: 'ברחבי הארץ' },
                { icon: Users, text: 'כ-5 זוגות' },
            ],
            cta: 'לתיאום שיחת היכרות',
            accent: '#A2673E',
            accentBg: 'rgba(162, 103, 62, 0.08)',
        },
    ];

    return (
        <section
            id="workshops"
            className="py-16 sm:py-24 bg-gradient-to-b from-[#FDF8F0] via-white to-[#F8F2E9] overflow-x-hidden w-full"
        >
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <p className="text-sm sm:text-base text-[#A2673E] font-medium tracking-widest uppercase mb-3">
                        הלב של העבודה שלי
                    </p>
                    <h2 className="text-4xl sm:text-6xl text-[#4C4A49] mb-4 sm:mb-6">סדנאות וקבוצות</h2>
                    <div className="w-24 h-px bg-[#D3C1B1] mx-auto mb-6"></div>
                    <p className="text-base sm:text-lg text-[#4A4847] font-light max-w-2xl mx-auto leading-relaxed">
                        יש תהליכים שקורים הכי טוב לא לבד. קבוצה קטנה, מנוהלת ומוגנת,
                        היא אחד המרחבים הריפויים החזקים שאני מכיר.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    {workshops.map((w, index) => (
                        <motion.div
                            key={w.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                            className="relative bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
                        >
                            {/* Accent header */}
                            <div
                                className="px-6 sm:px-8 pt-8 pb-6 relative"
                                style={{ backgroundColor: w.accentBg }}
                            >
                                <span
                                    className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                                    style={{ color: w.accent, border: `1px solid ${w.accent}40` }}
                                >
                                    {w.badge}
                                </span>
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: `${w.accent}20` }}
                                    >
                                        <w.icon className="w-7 h-7" style={{ color: w.accent }} />
                                    </div>
                                    <div className="text-right flex-1">
                                        <h3 className="text-xl sm:text-2xl text-[#4C4A49] font-normal leading-snug mb-2">
                                            {w.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-[#4A4847] font-light leading-relaxed">
                                            {w.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="px-6 sm:px-8 py-6 flex-1 flex flex-col">
                                <ul className="space-y-3 mb-6 text-right">
                                    {w.bullets.map((b) => (
                                        <li key={b} className="flex items-start gap-3 text-sm sm:text-base text-[#4C4A49]">
                                            <span
                                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                                style={{ backgroundColor: w.accent }}
                                            />
                                            <span className="leading-relaxed">{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="border-t border-[#EDE4D8] pt-4 mt-auto space-y-2">
                                    {w.details.map((d) => (
                                        <div
                                            key={d.text}
                                            className="flex items-center gap-3 text-sm text-[#4A4847] font-light justify-end"
                                        >
                                            <span>{d.text}</span>
                                            <d.icon className="w-4 h-4" style={{ color: w.accent }} />
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={scrollToContact}
                                    className="mt-6 w-full text-white px-6 py-3 rounded-lg text-lg transition-all duration-300 font-light flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                                    style={{ backgroundColor: w.accent }}
                                >
                                    {w.cta}
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footnote — לא מוצאים את מה שמחפשים */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center mt-10 sm:mt-12"
                >
                    <p className="text-sm sm:text-base text-[#4A4847] font-light">
                        מחפשים סדנה מותאמת אישית לארגון, ליחידה או לקבוצת חברים?{' '}
                        <button
                            onClick={scrollToContact}
                            className="text-[#A2673E] hover:text-[#8d5a36] font-medium underline underline-offset-4"
                        >
                            בואו נדבר
                        </button>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
