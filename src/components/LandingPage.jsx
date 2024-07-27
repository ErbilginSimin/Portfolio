// components/LandingPage/LandingPage.jsx
import React from 'react';
import { useSeasonContext } from '../contexts/SeasonContext';
import { BackgroundGradientAnimation } from '../components/Motions/Gradient';
import Header from '../components/Header/Header';


function LandingPage() {
  const { season } = useSeasonContext();

  let gradientBackgroundStart, gradientBackgroundEnd, firstColor, secondColor, thirdColor, fourthColor, fifthColor, pointerColor;

  switch (season) {
    case 'Summer':
      gradientBackgroundStart = 'rgba(255, 243, 224, 1),';
      gradientBackgroundEnd = 'rgba(255, 255, 255, 0)';
      firstColor = '255, 204, 92';
      secondColor = '255, 69, 0';
      thirdColor = '255, 128, 0';
      fourthColor = '255, 255, 102';
      fifthColor = '255, 222, 173';
      pointerColor = '255, 194, 102';
      break;
    case 'Autumn':
      gradientBackgroundStart = 'rgba(255, 150, 75, 1)';
      gradientBackgroundEnd = 'rgba(255, 150, 75, 0)';
      firstColor = '255, 140, 0';
      secondColor = '255, 69, 0';
      thirdColor = '139, 69, 19';
      fourthColor = '210, 105, 30';
      fifthColor = '205, 92, 92';
      pointerColor = '255, 140, 0';
      break;
    case 'Winter':
      gradientBackgroundStart = 'rgba(173, 216, 230, 1)';
      gradientBackgroundEnd = 'rgba(173, 216, 230, 0)';
      firstColor = '255, 250, 250';
      secondColor = '176, 224, 230';
      thirdColor = '135, 206, 250';
      fourthColor = '0, 191, 255';
      fifthColor = '70, 130, 180';
      pointerColor = '240, 255, 255';
      break;
    case 'Spring':
      gradientBackgroundStart = 'rgba(144, 238, 144, 1)';
      gradientBackgroundEnd = 'rgba(144, 238, 144, 0)';
      firstColor = '60, 179, 113';
      secondColor = '32, 178, 170';
      thirdColor = '50, 205, 50';
      fourthColor = '0, 255, 127';
      fifthColor = '127, 255, 212';
      pointerColor = '144, 238, 144';
      break;
    default:
      gradientBackgroundStart = 'rgba(255, 204, 128, 1)';
      gradientBackgroundEnd = 'rgba(255, 204, 128, 0)';
      firstColor = '255, 215, 0';
      secondColor = '255, 140, 0';
      thirdColor = '255, 69, 0';
      fourthColor = '255, 99, 71';
      fifthColor = '255, 160, 122';
      pointerColor = '255, 215, 0';
  }

  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="LandingPage relative w-full h-screen text-primary">
      <Header />
      <BackgroundGradientAnimation
        gradientBackgroundStart={gradientBackgroundStart}
        gradientBackgroundEnd={gradientBackgroundEnd}
        firstColor={firstColor}
        secondColor={secondColor}
        thirdColor={thirdColor}
        fourthColor={fourthColor}
        fifthColor={fifthColor}
        pointerColor={pointerColor}
        size="100%"
        blendingValue="soft-light"
        className="absolute "
        containerClassName="absolute inset-0 -z-10"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-5 w-5/6 ">
      <h2 className='text-5xl pb-4'>Qui suis-je ?</h2>
      <p className=''>
        lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis, eros in bibendum interdum, nisl erat tempor augue, ut gravida velit odio non nisi. Nullam non purus nec leo egestas sollicitudin. Phasellus elementum pharetra orci

      </p>
      </div>
      <button onClick={scrollToNextSection} className='animate-bounce absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
</svg>
</button> 
    </section>
  );
}

export default LandingPage;
