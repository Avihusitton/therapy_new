// [Category A: UI / Design / Layout]
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-brand-text dark:bg-brand-secondary text-brand-secondary dark:text-brand-text py-14 sm:py-16 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <div className="mb-10 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-light mb-2">אביהו סיטון</h2>
                    <p className="text-sm text-[#B5A89D] dark:text-brand-text/60 font-light mb-1">פסיכותרפיסט | קליניקה ברתמים ובזום</p>
                    <p className="text-sm italic text-brand-secondary/70 dark:text-brand-text/50 font-light mb-6">"לא לעבור את זה לבד. לחזור לעצמך, ביחד."</p>
                    <div className="w-24 h-px bg-brand-border/30 mx-auto mb-8"></div>

                    <nav aria-label="ניווט תחתון" className="flex flex-wrap justify-center gap-6 mb-10 text-sm font-light text-brand-secondary/80 dark:text-brand-text/80">
                        <Link href="/" className="hover:text-white transition-colors">בית</Link>
                        <Link href="/therapy" className="hover:text-white transition-colors">המרחב האישי</Link>
                        <Link href="/couples" className="hover:text-white transition-colors">שולחן עגול לשניים</Link>
                        <Link href="/reservists-workshops" className="hover:text-white transition-colors">קבוצת תכלס | סדנאות</Link>
                        <Link href="/about" className="hover:text-white transition-colors">אודות</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">צור קשר</Link>
                    </nav>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 text-brand-secondary/80 dark:text-brand-text/80 font-light">
                        <a
                            href="tel:053-285-3235"
                            className="flex items-center gap-3 hover:text-white transition-colors"
                            onClick={() => {
                                if (typeof gtag === 'function') {
                                    gtag('event', 'click_phone', {
                                        event_category: 'lead',
                                        event_label: 'phone_cta'
                                    });
                                }
                            }}
                        >
                            <span aria-hidden>📞</span>
                            <span className="ltr-text">053-285-3235</span>
                        </a>
                        <a href="mailto:therapy@avihusitton.com" className="flex items-center gap-3 hover:text-white transition-colors">
                            <span aria-hidden>✉️</span>
                            <span className="ltr-text">therapy@avihusitton.com</span>
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
                    <div className="mt-6 text-center">
                        <a
                            href="https://g.page/r/CXrRjxeYVWw_EAI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[#B5A89D] dark:text-brand-text/60 hover:text-white transition-colors underline underline-offset-4 decoration-brand-secondary/10 dark:decoration-brand-text/10"
                        >
                            ⭐ כתוב ביקורת בגוגל
                        </a>
                    </div>
                </div>

                <div className="border-t border-brand-secondary/10 dark:border-brand-text/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-brand-secondary/90 dark:text-brand-text/90 font-light text-sm order-2 sm:order-1">
                        © {new Date().getFullYear()} אביהו סיטון | מטפל A.P.T בשיטת דרך | כל הזכויות שמורות
                    </p>
                    <nav aria-label="קישורי מדיניות" className="order-1 sm:order-2 flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <Link href="/terms" className="text-brand-secondary/80 dark:text-brand-text/80 hover:text-white dark:hover:text-brand-primary transition-colors text-sm font-light underline underline-offset-4 decoration-brand-secondary/20 dark:decoration-brand-text/20">
                            תקנון ותנאי שימוש
                        </Link>
                        <Link href="/privacy" className="text-brand-secondary/80 dark:text-brand-text/80 hover:text-white dark:hover:text-brand-primary transition-colors text-sm font-light underline underline-offset-4 decoration-brand-secondary/20 dark:decoration-brand-text/20">
                            מדיניות פרטיות
                        </Link>
                        <Link href="/accessibility" className="text-brand-secondary/80 dark:text-brand-text/80 hover:text-white dark:hover:text-brand-primary transition-colors text-sm font-light underline underline-offset-4 decoration-brand-secondary/20 dark:decoration-brand-text/20">
                            הצהרת נגישות
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
