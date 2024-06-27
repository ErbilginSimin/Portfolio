import React from 'react';
import useSeason from '../../hooks/useSeason';

function SeasonMenu() {
  const { season, setSeason } = useSeason() as {
    season: string;
    setSeason: (value: string) => void;
  };

  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
  };

  return (
    <div className="season-menu">
      <label htmlFor="season">Choose a season:</label>
      <select
        id="season"
        name="season"
        value={season}
        onChange={handleSeasonChange}
      >
        <option value="spring">Spring</option>
        <option value="summer">Summer</option>
        <option value="autumn">Autumn</option>
        <option value="winter">Winter</option>
      </select>
    </div>
  );
}

export default SeasonMenu;
