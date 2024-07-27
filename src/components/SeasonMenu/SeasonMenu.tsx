import React from 'react';
import useSeason from '../../hooks/useSeason';
import './SeasonMenu.scss';

function SeasonMenu() {
  const { season, setSeason } = useSeason() as {
    season: string;
    setSeason: (value: string) => void;
  };

  const handleSeasonChange = (event: { target: { value: string; }; }) => {
    setSeason(event.target.value);
  };

  return (
    <div className="season-menu">
      <label htmlFor="season">Choisir la saison</label>
      <select
        id="season"
        name="season"
        value={season}
        onChange={handleSeasonChange}
      >
        <option value="Spring">Spring</option>
        <option value="Summer">Summer</option>
        <option value="Autumn">Autumn</option>
        <option value="Winter">Winter</option>
      </select>
    </div>
  );
}

export default SeasonMenu;