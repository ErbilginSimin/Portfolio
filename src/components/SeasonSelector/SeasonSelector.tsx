import { useSeasonContext } from '../../contexts/SeasonContext';

const seasons = [
  { name: 'Spring', icon: '/Flower.png' },
  { name: 'Summer', icon: '/Sun.png' },
  { name: 'Autumn', icon: '/Leaf.png' },
  { name: 'Winter', icon: '/Snow.png' },
];

function SeasonSelector() {
  const { setSeason } = useSeasonContext();

  const handleSeasonClick = (season: string) => {
    setSeason(season);
  };

  return (
    <div className="Seasons flex justify-center items-center space-x-10 py-10 bg-transparent">
      {/* Loop through the seasons array and display the icons */}
      {seasons.map((season) => (
        <img
          key={season.name}
          src={season.icon}
          alt={'${season.name} icon'}
          className="w-10 h-10 cursor-pointer"
          onClick={() => handleSeasonClick(season.name)}
        />
      ))}
    </div>
  );
}

export default SeasonSelector;
