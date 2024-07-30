import React from 'react';
import { useSeasonColors } from '../../contexts/SeasonColorsContext';

function Footer() {
  const { background } = useSeasonColors();

  return (
    <footer className="Footer" style={{ backgroundColor: background }}>
      <div className="container mx-auto text-center text-black font-thin">
        <p>&copy; 2024 Simin. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
