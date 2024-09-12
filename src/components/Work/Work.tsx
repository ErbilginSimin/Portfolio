import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useSeasonColors } from '../../contexts/SeasonColorsContext';

function Work() {
  const { background, text } = useSeasonColors();

  return (
    <section className={`p-10 ${background} ${text}`} id="Work">
      <h2 className="text-4xl uppercase font-semibold mb-10 text-center tracking-wide">
        Projets
      </h2>
    </section>
  );
}

export default Work;
