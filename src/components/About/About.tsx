import { useSeasonColors } from '../../contexts/SeasonColorsContext';

function About() {
  const { text, background, shadowColor } = useSeasonColors();
  return (
    <div>
      <section id="About" className={`relative p-6 lg:p-12 ${background}`}>
        {/* Title */}
        <h2
          className={`text-4xl uppercase font-semibold mb-5 text-center pb-5 ${text}`}
        >
          À propos de moi
        </h2>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6">
          {/* Photo Section */}
          <div className="flex-shrink-0 lg:w-1/3 flex items-center justify-center">
            <img
              src="/Portrait1.png"
              alt="Photo de Simin"
              className={`w-10/12 max-w-xs md:max-w-sm lg:max-w-full object-cover rounded-full ${shadowColor}`}
            />
          </div>

          {/* Text Section */}
          <div className="flex-1">
            <p
              className={`md:text-lg leading-relaxed text-justify px-4 md:px-8 ${text}`}
            >
              Je suis une professionnelle du développement web avec un parcours
              unique et diversifié qui enrichit ma pratique. Après des études en
              psychologie, où j'ai approfondi ma compréhension de l'humain, j'ai
              travaillé en tant qu'assistante de direction dans une start-up.
              Cette expérience m'a permis de développer des compétences
              organisationnelles et une belle capacité d'adaptation.
              <br />
              <br />
              Ma transition vers le développement web est née d'un attrait pour{' '}
              <a>la résolution de problèmes</a> et d'un désir constant{' '}
              <a>d'apprendre et d'évoluer</a>. Ce domaine me permet de combiner{' '}
              <a>créativité et rigueur technique</a>
              , tout en restant stimulée par l'évolution rapide des
              technologies.
              <br />
              <br />
              En tant que développeuse web, je mets à profit ma curiosité, ma
              capacité à analyser les besoins des utilisateurs et mon aptitude à
              créer des solutions innovantes pour offrir des expériences
              numériques optimisées. Mon approche est centrée sur la
              collaboration, la communication et l'engagement envers
              l'excellence.
              <br />
              <br />
              Si vous recherchez une professionnelle dynamique et adaptable,
              capable de comprendre vos besoins et de les transformer en
              solutions techniques efficaces, je serais ravie de discuter de
              votre projet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
