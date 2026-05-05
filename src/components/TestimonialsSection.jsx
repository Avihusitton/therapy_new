import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Loader2, User, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

// לוגו גוגל מקורי ב-SVG כדי להבטיח טעינה תקינה
const GoogleLogo = () => (
    <svg width="18" height="18" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

export default function TestimonialsSection() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [windowWidth, setWindowWidth] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const trackRef = useRef(null);
    const scrollPosRef = useRef(0);
    const rafRef = useRef(null);
    const isDraggingRef = useRef(false);
    const dragStartXRef = useRef(0);
    const dragStartScrollRef = useRef(0);
    const pauseTimeoutRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const SHEET_URL = "/api/reviews";

    useEffect(() => {
        const fetchReviews = async () => {
            console.log("Fetching reviews from Google Sheet...");
            try {
                const response = await fetch(SHEET_URL);
                if (!response.ok) {
                    throw new Error(`Failed to fetch reviews: ${response.status}`);
                }
                const csvData = await response.text();
                console.log("CSV Data received, length:", csvData.length);
                
                const parseCSV = (str) => {
                    const arr = [];
                    let quote = false;
                    let row = [''];
                    let col = 0;
                    for (let c = 0; c < str.length; c++) {
                        let cc = str[c], nc = str[c+1];
                        if (cc === '"' && quote && nc === '"') { row[col] += cc; ++c; continue; }
                        if (cc === '"') { quote = !quote; continue; }
                        if (cc === ',' && !quote) { row[++col] = ''; continue; }
                        if (cc === '\r' && nc === '\n' && !quote) { arr.push(row); row = ['']; col = 0; ++c; continue; }
                        if (cc === '\n' && !quote) { arr.push(row); row = ['']; col = 0; continue; }
                        if (cc === '\r' && !quote) { arr.push(row); row = ['']; col = 0; continue; }
                        row[col] += cc;
                    }
                    if (row.length > 1 || row[0] !== '') arr.push(row);
                    return arr;
                };

                const allRows = parseCSV(csvData).slice(1);
                console.log("Parsed rows count:", allRows.length);

                const parsedReviews = allRows.map((columns, index) => {
                    if (columns.length < 3) return null;

                    let content = columns[1]?.trim() || "";
                    if (content.includes("(Translated by Google)")) {
                        content = content.split("(Translated by Google)")[0].trim();
                    }
                    let rating = 5;
                    const rawRating = columns[2]?.toUpperCase().trim();
                    if (rawRating === "FIVE" || rawRating === "5") rating = 5;
                    else if (rawRating === "FOUR" || rawRating === "4") rating = 4;
                    
                    let author = columns[0]?.trim() || "מטופל/ת";
                    if (author.startsWith('accounts/')) author = "מטופל/ת בקליניקה";

                    if (!content || content.length < 5) return null;

                    return {
                        id: index,
                        author: author,
                        content: content,
                        rating: rating,
                        date: columns[3]?.split('T')[0] || ""
                    };
                }).filter(Boolean);

                console.log("Final reviews count:", parsedReviews.length);
                setReviews(parsedReviews);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    // Duplicate reviews for seamless infinite loop
    const duplicatedReviews = reviews.length > 0 ? [...reviews, ...reviews] : [];

    // RAF-based continuous smooth scroll
    useEffect(() => {
        if (reviews.length <= 1) return;

        const SPEED = 0.5; // pixels per frame ≈ 30px/sec

        const animate = () => {
            const track = trackRef.current;
            if (!track) {
                rafRef.current = requestAnimationFrame(animate);
                return;
            }

            if (!isPaused && !isDraggingRef.current) {
                scrollPosRef.current -= SPEED;
                const halfWidth = track.scrollWidth / 2;
                if (scrollPosRef.current <= -halfWidth) {
                    scrollPosRef.current += halfWidth;
                }
            }

            track.style.transform = `translateX(${scrollPosRef.current}px)`;
            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [reviews.length, isPaused]);

    // Set initial scroll position when duplicated reviews are ready
    useEffect(() => {
        scrollPosRef.current = 0;
    }, [reviews.length]);

    // Pointer events for drag/swipe
    const handlePointerDown = (e) => {
        isDraggingRef.current = true;
        dragStartXRef.current = e.clientX;
        dragStartScrollRef.current = scrollPosRef.current;
        setIsPaused(true);
        clearTimeout(pauseTimeoutRef.current);
        // Capture pointer to track movement outside the element
        if (e.target.setPointerCapture) {
            e.target.setPointerCapture(e.pointerId);
        }
    };

    const handlePointerMove = (e) => {
        if (!isDraggingRef.current) return;
        const dx = e.clientX - dragStartXRef.current;
        scrollPosRef.current = dragStartScrollRef.current + dx;
    };

    const handlePointerUp = () => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;
        // Resume auto-scroll after a delay
        pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 4000);
    };

    const formatReviewerName = (fullName) => {
        if (!fullName || fullName === "מטופל/ת" || fullName === "מטופל/ת בקליניקה") return "א.פ";
        const parts = fullName.trim().split(" ");
        if (parts.length === 1) return parts[0][0] + ".";
        return parts.map(part => part[0] + ".").join("");
    };

    return (
        <section className="py-20 sm:py-28 bg-brand-secondary relative overflow-hidden w-full transition-colors duration-300">
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl text-brand-text mb-4">מה אומרים בגוגל</h2>
                    
                    {/* 5 Stars Rating */}
                    <div className="flex items-center justify-center gap-1 mb-4 text-[#FFD700]">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>

                    <div className="flex items-center justify-center gap-3 mb-8 text-[#1a73e8] bg-white dark:bg-brand-secondary w-fit mx-auto px-5 py-2 rounded-full shadow-sm border border-brand-border/30">
                        <GoogleLogo />
                        <span className="text-xs font-bold tracking-wider uppercase" aria-label="ביקורות מאומתות מגוגל">Verified Reviews</span>
                        <CheckCircle2 className="w-4 h-4 fill-current" aria-hidden="true" />
                    </div>

                    <div className="w-24 h-px bg-brand-border mx-auto mb-6"></div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="w-8 h-8 text-brand-primary animate-spin" aria-label="טוען ביקורות..." />
                    </div>
                ) : reviews.length === 0 ? (
                    <div className="text-center py-12 text-brand-text/70">
                        כרגע אין ביקורות זמינות להצגה. אפשר לנסות שוב בעוד רגע.
                    </div>
                ) : (
                    <div
                        className="relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => {
                            setIsPaused(true);
                            clearTimeout(pauseTimeoutRef.current);
                        }}
                        onTouchEnd={() => {
                            pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 4000);
                        }}
                    >
                        <div className="overflow-hidden">
                            <div
                                ref={trackRef}
                                className="flex gap-6 cursor-grab active:cursor-grabbing select-none"
                                onPointerDown={handlePointerDown}
                                onPointerMove={handlePointerMove}
                                onPointerUp={handlePointerUp}
                                onPointerCancel={handlePointerUp}
                                style={{ willChange: 'transform' }}
                            >
                                {duplicatedReviews.map((review, index) => (
                                    <motion.div
                                        key={`${review.id}-${index < reviews.length ? 'a' : 'b'}`}
                                        className="w-[85%] sm:w-[calc(40%-16px)] bg-white dark:bg-card p-6 sm:p-10 rounded-3xl shadow-sm border border-brand-border/20 flex flex-col h-full relative shrink-0"
                                        role="group"
                                        aria-roledescription="ביקורת"
                                    >
                                        <Quote className="absolute top-6 left-6 w-10 h-10 text-brand-border opacity-20" aria-hidden="true" />
                                        
                                        <div className="flex gap-1 mb-5 text-[#FFD700]" aria-label={`דירוג: ${review.rating} מתוך 5 כוכבים`}>
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                                            ))}
                                        </div>

                                        <p className="text-brand-text text-base sm:text-lg leading-relaxed mb-8 text-right italic whitespace-pre-line flex-grow">
                                            "{review.content}"
                                        </p>
                                        
                                        <div className="flex items-center gap-4 pt-6 border-t border-brand-secondary">
                                            <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center border border-brand-border/30">
                                                <User className="w-5 h-5 text-brand-border" aria-hidden="true" />
                                            </div>
                                            <div className="text-right">
                                                <h4 className="text-brand-text font-semibold text-base">
                                                    {formatReviewerName(review.author)}
                                                </h4>
                                                <p className="text-xs text-brand-primary font-medium">{review.date}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center gap-4 mt-12">
                            <button 
                                onClick={() => {
                                    scrollPosRef.current += 350;
                                    setIsPaused(true);
                                    clearTimeout(pauseTimeoutRef.current);
                                    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 4000);
                                }}
                                className="p-4 rounded-full bg-white dark:bg-card shadow-md text-brand-text hover:text-brand-primary transition-all hover:scale-110"
                                aria-label="גלול ימינה"
                            >
                                <ChevronRight className="w-6 h-6" aria-hidden="true" />
                            </button>
                            <button 
                                onClick={() => {
                                    scrollPosRef.current -= 350;
                                    setIsPaused(true);
                                    clearTimeout(pauseTimeoutRef.current);
                                    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 4000);
                                }}
                                className="p-4 rounded-full bg-white dark:bg-card shadow-md text-brand-text hover:text-brand-primary transition-all hover:scale-110"
                                aria-label="גלול שמאלה"
                            >
                                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                )}

                <div className="mt-16 text-center">
                    <a 
                        href="https://g.page/r/CXrRjxeYVWw_EAI/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-accent transition-colors font-medium border-b border-brand-primary/30 pb-1"
                    >
                        צפו בכל הביקורות והוסיפו משלכם בגוגל
                    </a>
                </div>
            </div>
        </section>
    );
}