import React from 'react';
import { motion } from 'framer-motion';

export default function FloralDivider() {
    return (
        <div className="flex justify-center items-center my-12">
            <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="w-2 h-2 rounded-full bg-[#B5A89D]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.div
                    className="w-16 h-px bg-gradient-to-r from-transparent via-[#D3C1B1] to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                />
                <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="text-[#8B9F6B]"
                    initial={{ rotate: -90, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                >
                    <path
                        d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="rgba(139, 159, 107, 0.1)"
                    />
                </motion.svg>
                <motion.div
                    className="w-16 h-px bg-gradient-to-r from-transparent via-[#D3C1B1] to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                />
                <motion.div
                    className="w-2 h-2 rounded-full bg-[#B5A89D]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                />
            </motion.div>
        </div>
    );
}