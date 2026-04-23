
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function EmotionalToolsCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const slides = [
        {
            title: "עצמאות רגשית: לחיות חיים מלאים",
            content: "בעולם רווי גירויים, עצמאות רגשית מאפשרת לקבוע את הרגשות שלכם. זהו מסע של וויסות תגובות, הפחתת תלות באישור חיצוני, ובניית ביטחון פנימי. ככל שמחזקים עצמאות רגשית, מתאפשרות החלטות אותנטיות יותר, בחירת מערכות יחסים מזינות, וחיים מלאים ומשמעותיים."
        },
        {
            title: "זוגיות: הריקוד של עצמאות וחיבור",
            content: "זוגיות אמיתית היא מסע מתמיד בין עצמאות אישית וחיבור עמוק. זהו המקום ללמוד לשמור על הנפרדות והייחודיות - הערכים, הרצונות והזהות הפנימית - ובמקביל לחוות אחדות וקרבה. חוזק הזוגיות טמון ביכולת לאפשר צמיחה נפרדת, ובכך להעשיר את המרחב המשותף."
        },
        {
            title: "מעגל ההתחדשות: לשחרר, להמתין, לצמוח",
            content: "התחדשות אמיתית היא תהליך מעגלי בן שלושה שלבים. ראשית, שחרור דפוסים ישנים כדי לאפשר מקום לחדש. לאחר מכן, שלב ההמתנה - מרחב של ריק ואי-ודאות שיש להכיל באמונה. רק בוויתור על אחיזה ובהסכמה להמתין, מתאפשרות צמיחה והתחדשות. אימוץ מעגל זה מאפשר התקדמות וחיים מלאים."
        }
    ];

    // הזזה אוטומטית כל 7 שניות רק אם לא מועמד
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 7000);
            return () => clearInterval(interval);
        }
    }, [slides.length, isPaused]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="py-16 bg-[#FDF8F0]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl text-[#4C4A49] mb-6">הדרך לעצמאות רגשית</h2>
                    <div className="w-24 h-px bg-[#D3C1B1] mx-auto"></div>
                </motion.div>

                <div 
                    className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    {/* כפתורי ניווט */}
                    <Button
                        onClick={prevSlide}
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/40 hover:bg-white/60 shadow-md"
                    >
                        <ChevronRight className="w-5 h-5 text-[#A2673E]" />
                    </Button>
                    
                    <Button
                        onClick={nextSlide}
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/40 hover:bg-white/60 shadow-md"
                    >
                        <ChevronLeft className="w-5 h-5 text-[#A2673E]" />
                    </Button>

                    {/* תוכן הקרוסלה */}
                    <div className="h-72 md:h-96 flex items-center justify-center px-12 md:px-16 py-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="text-center"
                            >
                                <h3 className="text-lg md:text-2xl text-[#4C4A49] mb-4 md:mb-6 font-medium">
                                    {slides[currentSlide].title}
                                </h3>
                                <p className="text-[#6B6867] leading-relaxed text-sm md:text-lg max-w-4xl mx-auto">
                                    {slides[currentSlide].content}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* נקודות ניווט */}
                    <div className="flex justify-center gap-2 pb-6">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 ${
                                    index === currentSlide
                                        ? 'w-8 h-2 bg-[#A2673E] rounded-full'
                                        : 'w-2 h-2 bg-[#D3C1B1] rounded-full hover:bg-[#A2673E]/50'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
