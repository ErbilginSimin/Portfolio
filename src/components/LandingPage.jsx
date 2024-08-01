import React from 'react';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { FlipWords } from '../components/Motions/flip-words';
import { BackgroundGradientAnimation } from '../components/Motions/Gradient';
import { Vortex } from '../components/Motions/Vortex';
import Skills from '../components/Skills/Skills';
import { SeasonColorsProvider } from '../contexts/SeasonColorsContext';
import { useSeasonContext } from '../contexts/SeasonContext';

function LandingPage() {
  const { season } = useSeasonContext();

  const FlipWordsComponent = () => {
    const words = ['Bienvenue', 'Un Projet ?', 'Parlons-en !'];

    return (
      <span className="inline-block">
        <FlipWords className="text-primary" words={words} loop delay={3000} />
      </span>
    );
  };

  const renderAnimation = () => {
    switch (season) {
      case 'Summer':
        return (
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgba(255, 243, 224, 1)"
            gradientBackgroundEnd="rgba(255, 255, 255, 0)"
            firstColor="255, 204, 92"
            secondColor="255, 69, 0"
            thirdColor="255, 128, 0"
            fourthColor="255, 255, 102"
            fifthColor="255, 222, 173"
            pointerColor="255, 255, 224, 0.9"
            size="100%"
            blendingValue="hard-light"
            className="absolute"
            containerClassName="absolute inset-0 -z-10"
            interactive={true}
          />
        );
      case 'Autumn':
        return (
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgba(255, 150, 75, 1)"
            gradientBackgroundEnd="rgba(255, 150, 75, 0)"
            firstColor="255, 140, 0"
            secondColor="255, 69, 0"
            thirdColor="139, 69, 19"
            fourthColor="210, 105, 30"
            fifthColor="205, 92, 92"
            pointerColor="255, 140, 0"
            size="100%"
            blendingValue="soft-light"
            className="absolute"
            containerClassName="absolute inset-0 -z-10"
          />
        );
      case 'Winter':
        return (
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgba(173, 216, 230, 1)"
            gradientBackgroundEnd="rgba(173, 216, 230, 0)"
            firstColor="255, 250, 250"
            secondColor="176, 224, 230"
            thirdColor="135, 206, 250"
            fourthColor="0, 191, 255"
            fifthColor="70, 130, 180"
            pointerColor="240, 255, 255"
            size="100%"
            blendingValue="soft-light"
            className="absolute"
            containerClassName="absolute inset-0 -z-10"
          />
        );
      case 'Spring':
        return (
          <Vortex
            particleCount={700}
            rangeY={100}
            baseSpeed={0.0}
            rangeSpeed={1.5}
            baseRadius={5}
            rangeRadius={3}
            backgroundColor="rgba(255, 255, 255, 1)"
            className="absolute"
            containerClassName="absolute inset-0 -z-10"
          />
        );
      default:
        return (
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgba(255, 204, 128, 1)"
            gradientBackgroundEnd="rgba(255, 204, 128, 0)"
            firstColor="255, 215, 0"
            secondColor="255, 140, 0"
            thirdColor="255, 69, 0"
            fourthColor="255, 99, 71"
            fifthColor="255, 160, 122"
            pointerColor="255, 215, 0"
            size="100%"
            blendingValue="soft-light"
            className="absolute"
            containerClassName="absolute inset-0 -z-10"
          />
        );
    }
  };

  // Scroll to the next section
  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <SeasonColorsProvider season={season}>
      <section className="LandingPage relative w-full h-screen text-primary flex flex-col items-center">
        <Header />
        {renderAnimation()}

        <div className="flex flex-col items-center justify-center w-full h-full mt-16">
          <div className="text-center p-5 w-5/6 bg-white/10 rounded-lg border-0 shadow-lg lg:w-2/4 mb-10">
            <h2 className="uppercase text-5xl pb-4 font-semibold">
              <FlipWordsComponent />
            </h2>
            <p className="text-lg lg:text-2xl">
              Je m'appelle Simin et je suis une développeuse web et web mobile
              fullstack avec une appétence pour le front-end. Si vous avez un
              projet ou une idée, n'hésitez pas à me contacter.
            </p>
          </div>

          <div className="Seasons flex justify-center items-center space-x-10 py-10 bg-transparent">
            <img src="/Snow.png" alt="Snowflake icon" className="w-10 h-10" />
            <img src="/Leaf.png" alt="Leaf icon" className="w-10 h-10" />
            <img src="/Flower.png" alt="Flower icon" className="w-10 h-10" />
            <img src="/Sun.png" alt="Sun icon" className="w-10 h-10" />
          </div>
        </div>

        <button
          onClick={scrollToNextSection}
          className="animate-bounce absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 5.25l7.5 7.5 7.5-7.5M4.5 11.25l7.5 7.5 7.5-7.5"
            />
          </svg>
        </button>
      </section>

      <Skills />
      <About />
      <Footer />
    </SeasonColorsProvider>
  );
}

export default LandingPage;
