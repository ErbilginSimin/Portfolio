import React from 'react';
import './Intro.scss';
import { useSeasonContext } from '../../contexts/SeasonContext';

function Intro() {
  const { season } = useSeasonContext();

  return (
    <section id="intro" className="size-full h-52 md:h-96 lg:h-120 xl:h-144 flex flex-col lg:px-12">
      <h2 className="Tittle uppercase text-4xl font-semibold mb-4 text-white">
        Qui suis-je ?
      </h2>
    </section>
  );
}

export default Intro;
