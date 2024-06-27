import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header w-full text-black">
      <nav className="container mx-auto flex justify-between">
        <div className="text-2xl">My Portfolio</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#intro" className="hover:underline">
              Intro
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
