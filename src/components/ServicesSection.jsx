// [Category A: UI / Design / Layout]
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Users, Shield } from 'lucide-react';
import FloralDivider from './FloralDivider';

export default function ServicesSection() {
    const services = [
        {
            icon: Users,
            title: 'המרחב המשותף — קבוצת תכלס',
            highlight: true,
            description:
                'לא באים רק לפרוק. באים לקבל עזרה מהקבוצה, לעשות סדר ולקחת שליטה חזרה על החיים. קבוצה קטנה ובטוחה של גברים שעושים עבודה אמיתית — מותאם למילואימניקים שחוזרים לשגרה ולגברים בצומת חיים.',
            cta: 'פרטים על הסדנה הקרובה',
            href: '/reservists-workshops',
        },
        {
            icon: Shield,
            title: 'צעד ראשון — קריאת כיוון',
            description:
                'יושבים יחד, מדברים פתוח, ועושים קריאת כיוון ראשונית — להבין איפה אתה עומד היום ולאן הולכים מכאן. שעה אחת, כוס קפה, ללא התחייבות.',
            cta: 'לשיחה ראשונה בוואטסאפ',
            href: '/reservists-workshops',
        },
        {
            icon: Users,
            title: 'שולחן עגול לשניים',
            description:
                'לא "ייעוץ זוגי" קלאסי. אנחנו מפרקים את הבעיות בקשר, לומדים לריב נכון, ובונים יחד תקשורת שעובדת ביומיום. עבודת צוות, שוויון, ואחריות משותפת.',
            cta: 'לתיאום פגישה',
            href: '/couples',
        },
        {
            icon: User,
            title: 'המרחב האישי',
            description:
                'מקום בטוח, נקי מרעשים, שנועד נטו לעבודה פנימית — פירוק הפלונטר, הבנת הלופים שחוזרים, ובניית יציבות אמיתית. אתה לא יוצא תלוי במטפל, אתה יוצא עם ארגז כלים.',
            cta: 'לשיחת היכרות',
            href: '/therapy',
        },
    ];

    return (
        <section id="workshops" className="py-16 sm:py-24 bg-[#FDF8F0] relative overflow-x-hidden w-full">
            {/* רקע עדין */}
            <div className="absolute inset-0 opacity-5">
                <img
                    src="/images/services-bg.webp"
                    alt=""
                    width="1920"
                    height="1080"
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl sm:text-6xl text-[#4C4A49] mb-4 sm:mb-6">איך אוכל ללוות אותך</h2>
                        <div className="w-24 h-px bg-[#D3C1B1] mx-auto mb-4"></div>
                        <p className="text-base sm:text-lg text-[#4A4847] font-light max-w-2xl mx-auto leading-relaxed">
                            ארבע דרכים להיכנס לתהליך — בחר את הדרך שמתאימה לרגע שאתה נמצא בו.
                        </p>
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
                    {services.map((s, index) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg flex flex-col ${
                                s.highlight ? 'ring-2 ring-[#A2673E]/30' : ''
                            }`}
                        >
                            {s.highlight && (
                                <span className="absolute -top-3 right-6 bg-[#A2673E] text-white text-xs font-light px-3 py-1 rounded-full shadow-md">
                                    הפעילות המרכזית
                                </span>
                            )}
                            {s.href ? (
                                <Link href={s.href} className="flex items-center gap-3 mb-4 group/header">
                                    <div className="w-12 h-12 rounded-full bg-[#A2673E]/10 flex items-center justify-center flex-shrink-0 group-hover/header:bg-[#A2673E]/20 transition-colors">
                                        <s.icon className="w-6 h-6 text-[#A2673E]" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl text-[#4C4A49] font-normal group-hover/header:text-[#A2673E] transition-colors">{s.title}</h3>
                                </Link>
                            ) : (
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-[#A2673E]/10 flex items-center justify-center flex-shrink-0">
                                        <s.icon className="w-6 h-6 text-[#A2673E]" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl text-[#4C4A49] font-normal">{s.title}</h3>
                                </div>
                            )}
                            <div className="w-16 h-px bg-[#D3C1B1] mb-4"></div>
                            <p className="text-sm sm:text-base text-[#4C4A49] leading-relaxed mb-6 text-right flex-1">
                                {s.description}
                            </p>
                            {s.href ? (
                                <Link
                                    href={s.href}
                                    className="self-start text-sm sm:text-base text-[#A2673E] hover:text-[#8d5a36] font-medium flex items-center gap-2 transition-colors group/cta"
                                >
                                    {s.cta}
                                    <span className="group-hover/cta:translate-x-[-4px] transition-transform" aria-hidden>←</span>
                                </Link>
                            ) : (
                                <div className="text-sm sm:text-base text-[#B5A89D] font-light flex items-center gap-2">
                                    {s.cta}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <FloralDivider />

                {/* תמונת הקליניקה */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-8 sm:mt-12 text-center"
                >
                    <div className="w-full max-w-4xl mx-auto">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/services-bg.webp"
                                alt="קליניקה ברתמים"
                                width="800"
                                height="450"
                                loading="lazy"
                                className="w-full h-48 sm:h-96 object-cover"
                            />
                        </div>
                        <p className="text-sm text-[#8B7355] mt-4 font-light">קליניקה ברתמים • מפגשים בקבוצות גם בזום</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
