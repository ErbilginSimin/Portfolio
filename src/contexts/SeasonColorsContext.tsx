import React, { createContext, useContext } from 'react';
import { useSeason } from './SeasonContext';

const seasonColors = {
  spring: {
    background: 'rgb(234,248,238)',
    text: 'rgb(25,67,45)',
    boxShadow: 'rgba(0, 255, 0, 0.5)',
    firstColor: '0, 204, 92',
    secondColor: '0, 69, 0',
    thirdColor: '0, 128, 0',
    fourthColor: '0, 171, 145',
    fifthColor: '0, 255, 0',
    pointerColor: '0, 0, 255',
  },
  summer: {
    background: 'rgb(254,248,238)',
    text: 'rgb(35,67,45)',
    boxShadow: 'rgba(255, 69, 0, 1)',
    firstColor: '255, 204, 92',
    secondColor: '255, 69, 0',
    thirdColor: '255, 128, 0',
    fourthColor: '255, 171, 145',
    fifthColor: '255, 255, 255',
    pointerColor: '0, 0, 139',
  },
  autumn: {
    background: 'rgb(255, 235, 205)',
    text: 'rgb(139, 69, 19)',
    boxShadow: 'rgba(255, 140, 0, 1)',
    firstColor: '255, 127, 80',
    secondColor: '255, 99, 71',
    thirdColor: '255, 69, 0',
    fourthColor: '255, 228, 196',
    fifthColor: '255, 255, 240',
    pointerColor: '165, 42, 42',
  },
  winter: {
    background: 'rgb(240,248,255)',
    text: 'rgb(25,25,112)',
    boxShadow: 'rgba(0, 0, 139, 1)',
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
