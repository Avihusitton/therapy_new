import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Palette, PenTool, Flower2 } from 'lucide-react';

export default function TherapyMethodSection() {
    const tools = [
        { icon: Heart, label: "פסיכודרמה" },
        { icon: Palette, label: "דמיון" },
        { icon: PenTool, label: "כתיבה" },
        { icon: Flower2, label: "הרפיות" }
    ];

    return (
        <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-[#FDF8F0] overflow-x-hidden w-full">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl text-[#4C4A49] mb-4 sm:mb-6">אופן הטיפול</h2>
                    <div className="w-24 h-px bg-[#D3C1B1] mx-auto mb-6 sm:mb-8"></div>
                    
                    <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-8 rounded-xl shadow-lg w-full max-w-4xl mx-auto">
                        <p className="text-base sm:text-lg text-[#6B6867] leading-relaxed mb-6 sm:mb-8">
                            הטיפול קורה דרך שיח ומשלב כלים שונים מהעולם הרגשי כולל:
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-4 sm:mb-6">
                            {tools.map((tool, index) => (
                                <motion.div
                                    key={tool.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center gap-2 bg-[#A2673E]/10 px-3 sm:px-4 py-2 rounded-full"
                                >
                                    <tool.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#A2673E]" />
                                    <span className="text-sm sm:text-base text-[#6B6867]">{tool.label}</span>
                                </motion.div>
                            ))}
                            <div className="flex items-center gap-2 bg-[#A2673E]/10 px-3 sm:px-4 py-2 rounded-full">
                                <span className="text-sm sm:text-base text-[#6B6867]">ועוד</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}