import React, { createContext, useContext } from 'react';
import { useSeason } from './SeasonContext';

const seasonColors = {
  spring: {
    background: 'bg-gradient-to-r from-green-300 to-green-500',
    text: 'text-white',
    boxShadow: 'shadow-lg',
    firstColor: '0, 204, 92',
    secondColor: '0, 69, 0',
    thirdColor: '0, 128, 0',
    fourthColor: '0, 171, 145',
    fifthColor: '0, 255, 0',
    pointerColor: '0, 0, 255',
  },
  summer: {
    background: 'bg-[rgb(255,255,255)]',
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
    background: 'bg-gradient-to-b from-[#f5f5f5] to-[#ffffff]',
    text: 'text-black',
    boxShadow: 'shadow-lg',
    firstColor: '255, 165, 0', // Orange automnal
    secondColor: '95, 158, 160', // Bleu-gris
    thirdColor: '176, 196, 222', // Bleu clair/gris
    fourthColor: '245, 245, 245', // Blanc très léger
    fifthColor: '224, 224, 224', // Gris clair
    pointerColor: '139, 69, 19', // Brun
  },
  winter: {
    background: 'bg-gradient-to-r from-blue-300 to-blue-500',
    text: 'text-white',
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
