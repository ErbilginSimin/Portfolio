import React, { createContext, useContext } from 'react';
import { useSeason } from './SeasonContext';

const seasonColors = {
  spring: {
    background: 'bg-[rgb(241, 246, 244)]',
    text: 'text-black',
    boxShadow: 'shadow-lg',
    firstColor: '202, 233, 202',
    secondColor: '255, 182, 193',
    thirdColor: '186, 85, 211',
    fourthColor: '0, 255, 127',
    fifthColor: '255, 105, 180',
    pointerColor: '173, 216, 230',
  },
  summer: {
    background: 'bg-[rgb(255,255,255)]',
    text: 'text-black',
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
    firstColor: '50, 150, 200',
    secondColor: '100, 200, 150',
    thirdColor: '150, 200, 255',
    fourthColor: '180, 100, 255',
    fifthColor: '220, 255, 230',
    pointerColor: '150, 200, 255',
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
