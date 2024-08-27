import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSeasonColors } from '../../contexts/SeasonColorsContext';

function Work() {
  const { background, text } = useSeasonColors();

  const content = [
    {
      title: 'Site vitrine 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: (
        <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white rounded-lg shadow-lg">
          Naturopathe
        </div>
      ),
    },
    {
      title: 'Site vitrine 2',
      description: 'See changes as they happen...',
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <img
            src="/Flower.png"
            className="h-full w-full object-cover rounded-xl shadow-lg"
            alt="Flower"
          />
        </div>
      ),
    },
    {
      title: 'Version control',
      description: 'Experience real-time updates...',
      content: (
        <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white rounded-lg shadow-lg">
          Version control
        </div>
      ),
    },
  ];

  return (
    <section className={`Work p-10 ${background} ${text}`}>
      <h2 className="text-4xl uppercase font-semibold mb-10 text-center tracking-wide">
        Projets
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
      >
        {content.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 bg-white rounded-xl shadow-md overflow-hidden">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <div className="relative h-48">{item.content}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Work;
