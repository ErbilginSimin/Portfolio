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
    firstColor: '255, 165, 0',
    secondColor: '95, 158, 160',
    thirdColor: '176, 196, 222',
    fourthColor: '245, 245, 245',
    fifthColor: '224, 224, 224',
    pointerColor: '139, 69, 19',
  },
  winter: {
    background: 'bg-[#000a19]',
    text: 'text-white',
    boxShadow: 'shadow-lg',
    firstColor: '50, 150, 200', // Bleu avec une teinte verte
    secondColor: '100, 200, 150', // Vert clair évoquant les aurores boréales
    thirdColor: '150, 200, 255', // Bleu ciel lumineux
    fourthColor: '180, 100, 255', // Violet scintillant
    fifthColor: '220, 255, 230', // Vert très clair et lumineux
    pointerColor: '150, 200, 255', // Bleu éclatant pour pointer
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
