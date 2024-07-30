import { useSeasonContext } from '../contexts/SeasonContext';

// Create a custom hook to use the season context
const useSeason = () => {
  return useSeasonContext();
};

export default useSeason;
