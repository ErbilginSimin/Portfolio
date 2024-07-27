import React, { useState } from 'react';
import './Header.scss';
import { useSeasonContext } from '../../contexts/SeasonContext';
import { BackgroundGradientAnimation } from '../Motions/Gradient';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

function Header() {
  const { season } = useSeasonContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let gradientBackgroundStart, gradientBackgroundEnd, firstColor, secondColor, thirdColor, fourthColor, fifthColor, pointerColor;

  switch (season) {
    case 'Summer':
      gradientBackgroundStart = 'rgba(255, 179, 71, 1)';
      gradientBackgroundEnd = 'rgba(255, 179, 71, 0)';
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

  return (
    <header className={`Header sticky top-0 left-0 w-full h-auto md:h-56 z-100 ${season.toLowerCase()} inner-thick-white`}>
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
      <div className="relative z-20 flex items-center justify-between w-full h-full px-4 md:px-12 py-4 md:py-0">
        <div className="flex flex-col justify-center items-start w-full md:w-auto">
          <p className="uppercase text-center md:text-left text-2xl md:text-4xl lg:text-6xl text-outline font-extrabold">
            Vous avez un projet ?
          </p>
          <div className="flex justify-center md:justify-start w-full mt-4">
            <button className="Button uppercase font-medium px-4 py-2 text-white rounded hover:bg-[#020703] hover:text-white duration-300">
              Parlons-en !
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4 absolute top-4 right-4 z-20">
          <nav className="flex space-x-4 uppercase text-grey text-sm font-semibold">
            <a href="#intro" className="hover:underline">
              Introduction
            </a>
            <a href="#skills" className="hover:underline">
              Compétences
            </a>
            <a href="#about" className="hover:underline">
              À propos
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
        <div className="md:hidden absolute top-4 right-4 z-20">
          <button onClick={toggleMenu} className="Menu text-white focus:outline-none">
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
          {isMenuOpen && (
            <nav className="Nav absolute top-12 right-0 bg-white text-black p-4 rounded shadow-hot z-30">
              <ul className="flex flex-col space-y-2">
                <li>
                  <a href="#intro" className="hover:underline">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:underline">
                    Compétences
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
