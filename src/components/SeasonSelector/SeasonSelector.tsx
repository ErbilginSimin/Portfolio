import { useSeason } from '../../contexts/SeasonContext';

const seasons = [
  { name: 'spring', icon: '/Flower.svg' },
  { name: 'summer', icon: '/Sun.svg' },
  { name: 'autumn', icon: '/Leaf.svg' },
  { name: 'winter', icon: '/Snow.svg' },
];

function SeasonSelector() {
  const { setSeason } = useSeason();

  const handleSeasonClick = (season: string) => {
    setSeason(season as 'spring' | 'summer' | 'autumn' | 'winter');
  };

  return (
    <div className="Seasons flex justify-center items-center space-x-10 py-10 bg-transparent ">
      {/* Loop through the seasons array and display the icons */}
      {seasons.map((season) => (
        <img
          key={season.name}
          src={season.icon}
          alt={`${season.name} icon`}
          className="w-10 h-10 cursor-pointer hover:bg-white transform transition duration-300 ease-in-out rounded-md"
          onClick={() => handleSeasonClick(season.name)}
        />
      ))}
    </div>
  );
}

export default SeasonSelector;
