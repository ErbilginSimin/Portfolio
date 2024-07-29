import React, { createContext, useContext, ReactNode } from 'react';

interface SeasonColors {
  background: string;
  text: string;
  firstColor: string;
  secondColor: string;
  thirdColor: string;
  fourthColor: string;
  fifthColor: string;
}

const SeasonColorsContext = createContext<SeasonColors | undefined>(undefined);

export const useSeasonColors = (): SeasonColors => {
  const context = useContext(SeasonColorsContext);
  if (!context) {
    throw new Error('useSeasonColors must be used within a SeasonColorsProvider');
  }
  return context;
};

const seasonColors: Record<string, SeasonColors> = {
  Summer: {
    background: "rgb(254,248,238)",
    text: "rgb(35,67,45)",
    firstColor: "255, 204, 92",
    secondColor: "255, 69, 0",
    thirdColor: "255, 128, 0",
    fourthColor: "255, 255, 102",
    fifthColor: "255, 222, 173"
  },
  Autumn: {
    background: "rgba(255, 150, 75, 1)",
    text: "rgba(255, 69, 0, 1)",
    firstColor: "255, 140, 0",
    secondColor: "210, 105, 30",
    thirdColor: "139, 69, 19",
    fourthColor: "205, 92, 92",
    fifthColor: "165, 42, 42"
  },
  Winter: {
    background: "rgba(173, 216, 230, 1)",
    text: "rgba(0, 191, 255, 1)",
    firstColor: "255, 250, 250",
    secondColor: "176, 224, 230",
    thirdColor: "135, 206, 250",
    fourthColor: "0, 191, 255",
    fifthColor: "70, 130, 180"
  },
  Spring: {
    background: "rgba(144, 238, 144, 1)",
    text: "rgba(50, 205, 50, 1)",
    firstColor: "144, 238, 144",
    secondColor: "60, 179, 113",
    thirdColor: "32, 178, 170",
    fourthColor: "152, 251, 152",
    fifthColor: "0, 255, 127"
  },
  Default: {
    background: "rgba(255, 204, 128, 1)",
    text: "rgba(255, 140, 0, 1)",
    firstColor: "255, 215, 0",
    secondColor: "255, 140, 0",
    thirdColor: "255, 69, 0",
    fourthColor: "255, 99, 71",
    fifthColor: "255, 160, 122"
  }
};

interface SeasonColorsProviderProps {
  season: string;
  children: ReactNode;
}

export function SeasonColorsProvider({ season, children }: SeasonColorsProviderProps) {
  const colors = seasonColors[season] || seasonColors.Default;

  return (
    <SeasonColorsContext.Provider value={colors}>
      {children}
    </SeasonColorsContext.Provider>
  );
}
