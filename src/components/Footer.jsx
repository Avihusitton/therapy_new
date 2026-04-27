import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#4C4A49] text-[#FDF8F0] py-14 sm:py-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <div className="mb-10 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-light mb-2">אביהו סיטון</h2>
                    <p className="text-sm text-[#B5A89D] font-light mb-6">מנחה קבוצות, סדנאות ופסיכותרפיסט בשיטת "דרך"</p>
                    <div className="w-24 h-px bg-[#8d7a6b] mx-auto mb-8"></div>
                    
                    <nav aria-label="ניווט תחתון" className="flex flex-wrap justify-center gap-6 mb-10 text-sm font-light text-[#D3C1B1]">
                        <Link href="/" className="hover:text-white transition-colors">בית</Link>
                        <Link href="/therapy" className="hover:text-white transition-colors">טיפול אישי</Link>
                        <Link href="/couples" className="hover:text-white transition-colors">מסע זוגי</Link>
                        <Link href="/reservists-workshops" className="hover:text-white transition-colors">סדנאות מילואימניקים</Link>
                        <Link href="/about" className="hover:text-white transition-colors">אודות</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">צור קשר</Link>
                    </nav>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 text-[#D3C1B1] font-light">
                        <a href="tel:0532853235" className="flex items-center gap-3 hover:text-white transition-colors">
                            <span aria-hidden>📞</span>
                            <span className="ltr-text">053-2853235</span>
                        </a>
                        <a href="mailto:Avihu.sitton@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                            <span aria-hidden>✉️</span>
                            <span className="ltr-text">Avihu.sitton@gmail.com</span>
                        </a>
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=31.05365127751188,34.69029811783664" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-3 hover:text-white transition-colors"
                        >
                            <span aria-hidden>📍</span>
                            <span>קליניקה ברתמים | מפגשים בזום</span>
                        </a>
                    </div>
                </div>

                <div className="border-t border-[#6B6867] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-[#FDF8F0]/90 font-light text-sm order-2 sm:order-1">
                        © {new Date().getFullYear()} אביהו סיטון | מטפל A.P.T בשיטת דרך | כל הזכויות שמורות
                    </p>
                    <nav aria-label="קישורי מדיניות" className="order-1 sm:order-2 flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <Link href="/terms" className="text-[#FDF8F0]/80 hover:text-white transition-colors text-sm font-light underline underline-offset-4 decoration-[#6B6867]">
                            תקנון ותנאי שימוש
                        </Link>
                        <Link href="/privacy" className="text-[#FDF8F0]/80 hover:text-white transition-colors text-sm font-light underline underline-offset-4 decoration-[#6B6867]">
                            מדיניות פרטיות
                        </Link>
                        <Link href="/accessibility" className="text-[#FDF8F0]/80 hover:text-white transition-colors text-sm font-light underline underline-offset-4 decoration-[#6B6867]">
                            הצהרת נגישות
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
