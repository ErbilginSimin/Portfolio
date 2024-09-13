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
    firstColor: '15, 82, 186', // Un bleu plus foncé et froid
    secondColor: '173, 216, 230', // Un bleu glacé très pâle
    thirdColor: '0, 191, 255', // Un bleu cyan froid
    fourthColor: '70, 130, 180', // Un bleu acier froid
    fifthColor: '144, 202, 249', // Un bleu clair avec un effet glacé
    pointerColor: '15, 82, 186', // Pour les interactions avec un bleu foncé
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
