import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SeasonContextProps {
  season: string;
  setSeason: (season: string) => void;
}

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

export function SeasonProvider({ children }: SeasonProviderProps) {
  const [season, setSeason] = useState<string>(getSeason());

  useEffect(() => {
    const interval = setInterval(() => {
      setSeason(getSeason());
    }, 86400000); // Check daily
    return () => clearInterval(interval);
  }, []);

  return (
    <SeasonContext.Provider value={{ season, setSeason }}>
      {children}
    </SeasonContext.Provider>
  );
}

export function useSeasonContext() {
  const context = useContext(SeasonContext);
  if (!context) {
    throw new Error('useSeasonContext must be used within a SeasonProvider');
  }
  return context;
}
