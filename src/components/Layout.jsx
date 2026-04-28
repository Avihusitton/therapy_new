import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import FloatingAudioPlayer from './FloatingAudioPlayer';
import { useAudio } from '@/contexts/AudioContext';

export default function Layout({ children }) {
    const { showPlayer, setShowPlayer } = useAudio();

    return (
        <div className="min-h-screen bg-[#FDF8F0] text-[#4C4A49] flex flex-col" dir="rtl" lang="he">
            <Header />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
            <FloatingAudioPlayer
                isOpen={showPlayer}
                onClose={() => setShowPlayer(false)}
            />
        </div>
    );
}
