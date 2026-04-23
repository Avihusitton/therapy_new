import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const dragX = useMotionValue(0);

    const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRuKXRoldf0arwdSvlNVUPwndJDlvzsUQTmHR1fjplSrjOoz2Wya-8UwNQAPjlamjopk8iXyACCJVa0/pub?output=csv";

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(SHEET_URL);
                const csvData = await response.text();
                
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
                const parsedReviews = allRows.map((columns, index) => {
                    let content = columns[1]?.trim() || "";
                    if (content.includes("(Translated by Google)")) {
                        content = content.split("(Translated by Google)")[0].trim();
                    }
                    let rating = 5;
                    const rawRating = columns[2]?.toUpperCase().trim();
                    if (rawRating === "FIVE") rating = 5;
                    else if (rawRating === "FOUR") rating = 4;
                    
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

                setReviews(parsedReviews);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    const onDragEnd = () => {
        const x = dragX.get();
        if (x <= -50 && currentIndex < reviews.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else if (x >= 50 && currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    return (
        <section className="py-20 sm:py-28 bg-[#FDF8F0] relative overflow-hidden w-full">
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl text-[#4C4A49] mb-4">מה אומרים בגוגל</h2>
                    
                    {/* 5 Stars Rating */}
                    <div className="flex items-center justify-center gap-1 mb-4 text-[#FFD700]">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>

                    <div className="flex items-center justify-center gap-3 mb-8 text-[#1a73e8] bg-white w-fit mx-auto px-5 py-2 rounded-full shadow-sm border border-[#e0e0e0]">
                        <GoogleLogo />
                        <span className="text-xs font-bold tracking-wider uppercase">Verified Reviews</span>
                        <CheckCircle2 className="w-4 h-4 fill-current" />
                    </div>

                    <div className="w-24 h-px bg-[#D3C1B1] mx-auto mb-6"></div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="w-8 h-8 text-[#A2673E] animate-spin" />
                    </div>
                ) : (
                    <div className="relative">
                        <div className="flex items-center overflow-visible">
                            <motion.div
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                style={{ x: dragX }}
                                animate={{
                                    translateX: `calc(-${currentIndex * (100 / (window.innerWidth < 640 ? 1 : 2.5))}% - ${currentIndex * 24}px)`
                                }}
                                onDragEnd={onDragEnd}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="flex gap-6 cursor-grab active:cursor-grabbing w-full"
                            >
                                {reviews.map((review, index) => (
                                    <motion.div
                                        key={review.id}
                                        animate={{
                                            scale: currentIndex === index ? 1 : 0.95,
                                            opacity: (index >= currentIndex && index < currentIndex + 3) || (index >= currentIndex - 1 && index <= currentIndex + 1) ? 1 : 0.3,
                                        }}
                                        className="w-[85%] sm:w-[calc(40%-16px)] bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-[#EDE4D8]/50 flex flex-col h-full relative shrink-0"
                                    >
                                        <Quote className="absolute top-6 left-6 w-10 h-10 text-[#D3C1B1] opacity-10" />
                                        
                                        <div className="flex gap-1 mb-5 text-[#FFD700]">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-current" />
                                            ))}
                                        </div>

                                        <p className="text-[#4C4A49] text-base sm:text-lg leading-relaxed mb-8 text-right italic whitespace-pre-line flex-grow">
                                            "{review.content}"
                                        </p>
                                        
                                        <div className="flex items-center gap-4 pt-6 border-t border-[#FDF8F0]">
                                            <div className="w-10 h-10 rounded-full bg-[#FDF8F0] flex items-center justify-center border border-[#D3C1B1]/30">
                                                <User className="w-5 h-5 text-[#D3C1B1]" />
                                            </div>
                                            <div className="text-right">
                                                <h4 className="text-[#4C4A49] font-semibold text-base">{review.author}</h4>
                                                <p className="text-xs text-[#A2673E] opacity-80">{review.date}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center gap-4 mt-12">
                            <button 
                                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                                className={`p-4 rounded-full bg-white shadow-md text-[#4C4A49] hover:text-[#A2673E] transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'}`}
                                disabled={currentIndex === 0}
                                title="הקודם"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                            <button 
                                onClick={() => setCurrentIndex(prev => Math.min(reviews.length - 1, prev + 1))}
                                className={`p-4 rounded-full bg-white shadow-md text-[#4C4A49] hover:text-[#A2673E] transition-all ${currentIndex === reviews.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'}`}
                                disabled={currentIndex === reviews.length - 1}
                                title="הבא"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {reviews.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-[#A2673E] w-6' : 'bg-[#D3C1B1] w-1.5'}`}
                                />
                            ))}
                        </div>
                    </div>
                )}

                <div className="mt-16 text-center">
                    <a 
                        href="https://g.page/r/CXrRjxeYVWw_EAI/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#A2673E] hover:text-[#8d5a36] transition-colors font-medium border-b border-[#A2673E]/30 pb-1"
                    >
                        צפו בכל הביקורות והוסיפו משלכם בגוגל
                    </a>
                </div>
            </div>
        </section>
    );
}
