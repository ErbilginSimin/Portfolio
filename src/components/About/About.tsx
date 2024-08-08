import { useSeasonColors } from '../../contexts/SeasonColorsContext';

function About() {
  const { background } = useSeasonColors();

  return (
    <div
      id="About"
      className="relative p-6 lg:p-12"
      style={{ backgroundColor: background }}
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-primary pb-5 text-center">
        À propos de moi
      </h2>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6">
        {/* Photo Section */}
        <div className="flex-shrink-0 lg:w-1/3 flex items-center justify-center">
          <img
            src="/Portrait1.png"
            alt="Photo de moi"
            className="w-full max-w-xs md:max-w-sm lg:max-w-full object-cover "
          />
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <p className="text-base md:text-lg leading-relaxed text-justify text-primary px-4 md:px-8">
            Je suis une professionnelle du développement web avec un parcours
            unique et diversifié qui enrichit ma pratique. Après des études en
            psychologie, où j'ai approfondi ma compréhension de l'humain, j'ai
            travaillé en tant qu'assistante de direction dans une start-up.
            Cette expérience m'a permis de développer des compétences
            organisationnelles et une belle capacité d'adaptation.
            <br />
            <br />
            Ma transition vers le développement web est née d'une passion pour{' '}
            <a> la résolution de problèmes </a> et d'un désir constant{' '}
            <a>d'apprendre et d'évoluer</a>. Ce domaine me permet de combiner{' '}
            <a>créativité et rigueur technique</a>
            , tout en restant stimulée par l'évolution rapide des technologies.
            <br />
            <br />
            En tant que développeuse web, je mets à profit ma curiosité, ma
            capacité à analyser les besoins des utilisateurs et mon aptitude à
            créer des solutions innovantes pour offrir des expériences
            numériques optimisées. Mon approche est centrée sur la
            collaboration, la communication et l'engagement envers l'excellence.
            <br />
            <br />
            Si vous recherchez une professionnelle dynamique et adaptable,
            capable de comprendre vos besoins et de les transformer en solutions
            techniques efficaces, je serais ravie de discuter de votre projet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
