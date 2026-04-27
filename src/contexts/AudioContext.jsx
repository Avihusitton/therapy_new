import { createContext, useContext, useState } from 'react';

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export function AudioProvider({ children }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <AudioContext.Provider value={{ showPlayer, setShowPlayer }}>
      {children}
    </AudioContext.Provider>
  );
}
