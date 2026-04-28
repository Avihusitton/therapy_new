import { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Mic } from 'lucide-react';

export default function FloatingAudioPlayer({ isOpen, onClose }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // טוען את הקובץ רק בלחיצה ראשונה — לא מראש
  const handlePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setProgress(0);
    onClose();
  };

  useEffect(() => {
    if (isOpen && audioRef.current) {
      // נותן לדפדפן רגע לעבד את אלמנט ה-audio החדש
      const playTimeout = setTimeout(() => {
        audioRef.current.play().catch(err => console.log("Autoplay blocked:", err));
        setIsPlaying(true);
      }, 100);
      return () => clearTimeout(playTimeout);
    } else if (!isOpen && audioRef.current) {
      // מוודא שהסאונד נעצר כשהנגן נסגר
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [isOpen]);

  // Cleanup מוחלט בעת unmount של הקומפוננטה
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setDuration(audio.duration);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    return () => audio.removeEventListener('timeupdate', updateProgress);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* audio element — לא נטען עד שהקומפוננטה נפתחת */}
      <audio
        ref={audioRef}
        src="/audio/glz-interview.mp3"
        preload="none"
        onEnded={() => setIsPlaying(false)}
      />

      {/* הנגן הצף */}
      <div
        role="region"
        aria-label="נגן ראיון רדיו"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 48px)',
          maxWidth: '520px',
          zIndex: 9998,
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(76, 74, 73, 0.15)',
          border: '1px solid rgba(211, 193, 177, 0.4)',
          padding: '14px 18px',
          direction: 'rtl',
        }}
      >
        {/* שורה עליונה: כותרת + כפתור סגירה */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Mic size={15} color="#A2673E" />
            <div>
              <p style={{
                margin: 0,
                fontSize: '13px',
                fontWeight: '500',
                color: '#4C4A49',
                lineHeight: 1.3,
              }}>
                ראיון גלי צה״ל
              </p>
              <p style={{
                margin: 0,
                fontSize: '11px',
                color: '#8d5a36',
                fontWeight: '300',
              }}>
                קולה של אמא — חזרה לשגרה ממילואים
              </p>
            </div>
          </div>

          {/* כפתור סגירה — בולט וברור */}
          <button
            onClick={handleClose}
            aria-label="סגור נגן"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              backgroundColor: '#FDF8F0',
              border: '1px solid rgba(211,193,177,0.5)',
              borderRadius: '20px',
              padding: '4px 10px',
              cursor: 'pointer',
              color: '#6B6867',
              fontSize: '12px',
            }}
          >
            <X size={12} />
            <span>סגור</span>
          </button>
        </div>

        {/* שורה תחתונה: Play/Pause + Progress Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          {/* כפתור Play/Pause */}
          <button
            onClick={handlePlay}
            aria-label={isPlaying ? 'השהה' : 'הפעל'}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#A2673E',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'background-color 0.2s',
            }}
          >
            {isPlaying
              ? <Pause size={16} color="white" fill="white" />
              : <Play size={16} color="white" fill="white" />
            }
          </button>

          {/* Progress Bar */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                width: '100%',
                height: '4px',
                backgroundColor: '#EDE4D8',
                borderRadius: '2px',
                cursor: 'pointer',
                overflow: 'hidden',
              }}
              onClick={(e) => {
                if (!audioRef.current) return;
                const rect = e.currentTarget.getBoundingClientRect();
                const ratio = (e.clientX - rect.left) / rect.width;
                audioRef.current.currentTime = ratio * audioRef.current.duration;
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: '100%',
                  backgroundColor: '#A2673E',
                  borderRadius: '2px',
                  transition: 'width 0.5s linear',
                }}
              />
            </div>
            {duration > 0 && (
              <p style={{
                margin: '4px 0 0',
                fontSize: '10px',
                color: '#B5A89D',
                textAlign: 'left',
              }}>
                {formatTime(audioRef.current?.currentTime || 0)} / 
                {formatTime(duration)}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
