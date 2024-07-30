import { useContext } from 'react';
import { SeasonColorsContext } from '../contexts/SeasonColorsContext'; 

// Create a custom hook to use colors depending on the season
const useSeasonColors = () => {
  const context = useContext(SeasonColorsContext);
  if (!context) {
    throw new Error('useSeasonColors must be used within a SeasonColorsProvider');
  }
  return context;
};

export default useSeasonColors;