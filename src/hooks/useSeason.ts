import { useSeason } from '../contexts/SeasonContext';

export const useSeasonHook = () => {
  const { season, setSeason } = useSeason();

  const changeSeason = (
    newSeason: 'spring' | 'summer' | 'autumn' | 'winter'
  ) => {
    setSeason(newSeason);
  };

  return {
    season,
    changeSeason,
  };
};
