import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentSeason } from '../utils/CurrentSeason';

type Season = 'spring' | 'summer' | 'autumn' | 'winter';

interface SeasonContextProps {
  season: Season;
  setSeason: (season: Season) => void;
}

const SeasonContext = createContext<SeasonContextProps | undefined>(undefined);

export const SeasonProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [season, setSeason] = useState<Season>(getCurrentSeason());

  // Update the season if the date changes (e.g., user visits the site on a new day)
  useEffect(() => {
    const interval = setInterval(
      () => {
        const currentSeason = getCurrentSeason();
        setSeason(currentSeason);
      },
      1000 * 60 * 60 * 24
    ); // Check once a day

    return () => clearInterval(interval);
  }, []);

  return (
    <SeasonContext.Provider value={{ season, setSeason }}>
      {children}
    </SeasonContext.Provider>
  );
};

export const useSeason = (): SeasonContextProps => {
  const context = useContext(SeasonContext);
  if (!context) {
    throw new Error('useSeason must be used within a SeasonProvider');
  }
  return context;
};
