import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function WhoIsThisFor() {
    const items = [
        "רוצים להוביל שינוי",
        "מוכנים לקחת אחריות", 
        "רוצים לחזור לבחור"
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-4xl text-[#4C4A49] mb-6">למי הטיפול מתאים</h2>
                    <div className="w-24 h-px bg-[#D3C1B1] mx-auto mb-12"></div>
                    
                    <div className="bg-[#FDF8F0]/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                        <div className="inline-block mx-auto">
                            <div className="space-y-6">
                                {items.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        className="flex items-center justify-start text-right gap-4"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                                            className="w-6 h-6 rounded-full bg-[#A2673E] flex items-center justify-center flex-shrink-0"
                                        >
                                            <Check className="w-4 h-4 text-white" />
                                        </motion.div>
                                        <span className="text-lg text-[#6B6867]">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}