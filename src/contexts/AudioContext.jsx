import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export function AudioProvider({ children }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setShowPlayer(false); // סוגר את הנגן בכל ניווט
    };
    
    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('hashChangeStart', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('hashChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <AudioContext.Provider value={{ showPlayer, setShowPlayer }}>
      {children}
    </AudioContext.Provider>
  );
}
