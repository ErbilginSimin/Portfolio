import React, { createContext, useContext } from 'react';
import { useSeason } from './SeasonContext';

const seasonColors = {
  spring: {
    background: 'bg-gradient-to-r from-green-300 to-green-500',
    text: 'text-green-800',
    boxShadow: 'shadow-lg',
    firstColor: '0, 204, 92',
    secondColor: '0, 69, 0',
    thirdColor: '0, 128, 0',
    fourthColor: '0, 171, 145',
    fifthColor: '0, 255, 0',
    pointerColor: '0, 0, 255',
  },
  summer: {
    background: 'bg-[rgb(254,248,238)]',
    text: 'text-[rgb(35,67,45)]',
    boxShadow: 'shadow-lg',
    firstColor: '255, 204, 92',
    secondColor: '255, 69, 0',
    thirdColor: '255, 128, 0',
    fourthColor: '255, 171, 145',
    fifthColor: '255, 255, 255',
    pointerColor: '0, 0, 139',
  },
  autumn: {
    background: 'bg-gradient-to-r from-orange-300 to-orange-500',
    text: 'text-orange-800',
    boxShadow: 'shadow-lg',
    firstColor: '255, 127, 80',
    secondColor: '255, 99, 71',
    thirdColor: '255, 69, 0',
    fourthColor: '255, 228, 196',
    fifthColor: '255, 255, 240',
    pointerColor: '165, 42, 42',
  },
  winter: {
    background: 'bg-gradient-to-r from-blue-300 to-blue-500',
    text: 'text-blue-800',
    boxShadow: 'shadow-lg',
    firstColor: '173, 216, 230',
    secondColor: '135, 206, 250',
    thirdColor: '0, 191, 255',
    fourthColor: '70, 130, 180',
    fifthColor: '176, 224, 230',
    pointerColor: '25, 25, 112',
  },
};

export const SeasonColorsContext = createContext(seasonColors.summer);

export const SeasonColorsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { season } = useSeason();

  return (
    <SeasonColorsContext.Provider value={seasonColors[season]}>
      {children}
    </SeasonColorsContext.Provider>
  );
};

export const useSeasonColors = () => {
  const context = useContext(SeasonColorsContext);
  if (!context) {
    throw new Error(
      'useSeasonColors must be used within a SeasonColorsProvider'
    );
  }
  return context;
};
