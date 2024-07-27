import React from 'react';
import SeasonMenu from '../SeasonMenu/SeasonMenu';

function DefaultIntro() {
  return (
    <section id="intro" className="intro mt-20 mb-20 flex flex-col justify-center items-center">
      <div className="Frame relative size-full h-96">
        <div className="Presentation flex flex-col z-5 pl-20 max-w-2xl pt-20">
          <div className="text-2xl text-black font-bold ">Bienvenue,</div>
          <p className="text-2xl text-black font-bold">
            moi c'est <span className="firstname text-4xl font-bold">Simin</span>
          </p>
          <p className="spec text-xl text-black font-bold">
            et je suis développeuse <span className="type text-3xl text-black font-bold">Full Stack</span>
          </p>
        </div>
      </div>
      <SeasonMenu />

    </section>
  );
}

export default DefaultIntro;
