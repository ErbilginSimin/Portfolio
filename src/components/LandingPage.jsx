import React from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { BackgroundBeamsWithCollision } from '../components/Motions/BackgroundBeam';
import { FlipWords } from '../components/Motions/flip-words';
import { BackgroundGradientAnimation } from '../components/Motions/Gradient';
import { SparklesCore } from '../components/Motions/Snow';
import SeasonSelector from '../components/SeasonSelector/SeasonSelector';
import Skills from '../components/Skills/Skills';
import {
  SeasonColorsProvider,
  useSeasonColors,
} from '../contexts/SeasonColorsContext';
import { useSeason } from '../contexts/SeasonContext';

function LandingPage() {
  const { season } = useSeason();
  const { background, text } = useSeasonColors();
  console.log(text);

  const FlipWordsComponent = () => {
    const words = ['Bienvenue !', 'Un Projet ?', 'Parlons-en !'];

    return (
      <span className="inline-block">
        <FlipWords
          className="text-4xl"
          style={{ color: text }}
          words={words}
          loop
          delay={3000}
        />
      </span>
    );
  };

  const renderAnimation = () => {
    switch (season) {
      case 'summer':
        return (
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgba(255, 243, 224, 1)"
            gradientBackgroundEnd="rgba(255, 243, 224, 0)"
            firstColor="255, 204, 92"
            secondColor="255, 69, 0"
            thirdColor="255, 128, 0"
            fourthColor="255, 255, 102"
            fifthColor="255, 222, 173"
            pointerColor="255, 255, 224, 0.9"
            size="100%"
            blendingValue="hard-light"
            className="absolute inset-0 z-0"
            containerClassName="absolute inset-0 -z-10"
            interactive={true}
          />
        );
      case 'autumn':
        return (
          <BackgroundBeamsWithCollision
            className="absolute inset-0 -z-10"
            containerClassName="absolute inset-0"
          />
        );
      case 'winter':
        return (
          <SparklesCore
            size="100%"
            className="absolute inset-0 -z-10"
            containerClassName="absolute inset-0"
          />
        );
      case 'spring':
        return <Vortex className="absolute inset-0 z-0" />;
    }
  };

  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <SeasonColorsProvider>
      <section className="LandingPage relative w-full h-screen flex flex-col items-center">
        <Header />
        {renderAnimation()}

        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="text-center p-5 w-5/6 z-0 bg-white/50 rounded-lg border-0 shadow-lg lg:w-2/4 mb-10 py-20">
            <h2 className="uppercase text-5xl pb-8 font-semibold">
              <FlipWordsComponent />
            </h2>
            <p className="text-lg lg:text-2xl">
              Je m'appelle Simin et je suis une développeuse web et web mobile
              fullstack avec une appétence pour le front-end. Si vous avez un
              projet ou une idée, n'hésitez pas à me contacter.
            </p>
            <SeasonSelector />
          </div>
        </div>

        <button
          onClick={scrollToNextSection}
          style={{ color: text }}
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
      {/* <Work /> */}
      <Skills />
      <About />

      <Contact />
      <Footer />
    </SeasonColorsProvider>
  );
}

export default LandingPage;
