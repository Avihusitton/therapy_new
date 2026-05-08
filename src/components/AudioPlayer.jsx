// [Category A: UI / Design / Layout]
import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

export default function AudioPlayer({ src, title, subtitle }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="bg-[#FDF8F0] p-4 sm:p-6 rounded-xl border border-[#D3C1B1]/30 shadow-sm max-w-2xl mx-auto my-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
                <button 
                    onClick={togglePlay}
                    className="w-16 h-16 bg-[#A2673E] text-white rounded-full flex items-center justify-center hover:bg-[#8d5a36] transition-all shadow-md flex-shrink-0"
                    aria-label={isPlaying ? "השהה" : "נגן"}
                >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 mr-[-4px]" />}
                </button>
                
                <div className="text-right flex-1">
                    <h3 className="text-lg font-medium text-[#4C4A49] mb-1">{title}</h3>
                    <p className="text-sm text-[#4A4847] font-light">{subtitle}</p>
                    
                    <audio 
                        ref={audioRef} 
                        src={src} 
                        onEnded={() => setIsPlaying(false)}
                        className="hidden"
                    />
                </div>
                
                <div className="hidden sm:flex items-center text-[#D3C1B1]">
                    <Volume2 className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
}
