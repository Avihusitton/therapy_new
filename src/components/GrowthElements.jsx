// [Category A: UI / Design / Layout]
import React from 'react';
import { motion } from 'framer-motion';

export default function GrowthElements() {
    const leafPath = "M12 2C12 2 8 6 8 12s4 10 4 10s4-4 4-10S12 2 12 2z";
    const stemPath = "M12 12v10";
    
    return (
        <div className="flex justify-center my-16">
            <motion.svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                className="text-[#8B9F6B]"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <motion.path
                    d={stemPath}
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                />
                <motion.path
                    d={leafPath}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="rgba(139, 159, 107, 0.2)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.8 }}
                />
                <motion.circle
                    cx="12"
                    cy="8"
                    r="2"
                    fill="rgba(162, 103, 62, 0.3)"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                />
            </motion.svg>
        </div>
    );
}