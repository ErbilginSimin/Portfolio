import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SeasonContextProps {
  season: string;
  setSeason: (season: string) => void;
}

// Create a context with default value of undefined
const SeasonContext = createContext<SeasonContextProps | undefined>(undefined);

function getSeason() {
  const month = new Date().getMonth();
  if (month >= 5 && month <= 7) return 'Summer';
  if (month >= 8 && month <= 10) return 'Autumn';
  if (month >= 11 || month <= 1) return 'Winter';
  return 'Spring';
}

interface SeasonProviderProps {
  children: ReactNode;
}
// Create a provider component
export function SeasonProvider({ children }: SeasonProviderProps) {
  const [season, setSeason] = useState<string>(getSeason());

  // Update season daily
  useEffect(() => {
    const interval = setInterval(() => {
      setSeason(getSeason());
    }, 86400000); // Check daily
    return () => clearInterval(interval);
  }, []);

  // console.log('Current season in provider:', season); 

  return (
    <SeasonContext.Provider value={{ season, setSeason }}>
      {children}
    </SeasonContext.Provider>
  );
}

// Custom hook to use the season context
export function useSeasonContext() {
  const context = useContext(SeasonContext);
  if (!context) {
    throw new Error('useSeasonContext must be used within a SeasonProvider');
  }
  return context;
}
