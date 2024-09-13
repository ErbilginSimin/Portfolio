import { useSeasonColors } from '../../contexts/SeasonColorsContext';

function Footer() {
  const { background, text } = useSeasonColors();

  return (
    <footer className={`${background}`}>
      <div
        className={`${text} container mx-auto text-center text-lg font-thin`}
      >
        <p>&copy; 2024 Simin. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
