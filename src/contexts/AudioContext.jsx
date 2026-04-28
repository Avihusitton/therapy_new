import { createContext, useContext, useState, useEffect } from 'react';

const AudioContext = createContext({ showPlayer: false, setShowPlayer: () => {} });

export const useAudio = () => useContext(AudioContext);

export function AudioProvider({ children }) {
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let router;
    try {
      router = require('next/router').default;
    } catch {
      return;
    }

    if (!router || !router.events) return;

    const handleRouteChange = () => setShowPlayer(false);

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('hashChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('hashChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <AudioContext.Provider value={{ showPlayer, setShowPlayer }}>
      {children}
    </AudioContext.Provider>
  );
}
