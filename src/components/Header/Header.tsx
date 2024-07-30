import React, { useState } from 'react';
import { useSeasonContext } from '../../contexts/SeasonContext';
import { BackgroundGradientAnimation } from '../Motions/Gradient';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

function Header() {
  // Set the season context
  const { season } = useSeasonContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  return (
    <header className={`Header relative top-0 left-0 w-full h-auto md:h-56 z-100 text-primary box-content ${season.toLowerCase()}`}>
      <div className="relative z-20 flex items-center justify-between w-full px-4 md:px-12 py-4 md:py-0 ">
        <div className=' flex items-center'>
          <img src="/SiminLogo.png" alt="Logo Simin" className="w-20 h-20 md:w-24 md:h-24" />
          <h1 className='text-4xl font-bold text-primary'><span className="Name text-6xl font-semibold">S</span>imin</h1>
        </div>
        <div className="hidden md:flex items-center space-x-4">
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
        <div className="md:hidden">
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
