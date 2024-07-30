import { useSeasonColors } from "../../contexts/SeasonColorsContext";

function About () {
    const { background } = useSeasonColors();
    return (
        <div id="About" className="relative size-full h-52 md:h-96 lg:h-120 xl:h-144 flex flex-col lg:px-12" style={{backgroundColor : background}}>
            <h2 className="Tittle text-4xl font-semibold mb-5 text-center">À propos</h2>
            <p>Je suis une professionnelle du développement web avec un parcours unique et diversifié qui enrichit ma pratique. Après des études en psychologie, où j'ai approfondi ma compréhension du comportement humain, j'ai travaillé en tant qu'assistante de direction dans une start-up. Cette expérience m'a permis de développer des compétences organisationnelles et une belle capacité d'adaptation.

                Ma transition vers le développement web est née d'une passion pour la résolution de problèmes complexes et d'un désir constant d'apprendre et d'évoluer. Ce domaine me permet de combiner créativité et rigueur technique, tout en restant stimulée par l'évolution rapide des technologies.

                En tant que développeuse web, je mets à profit ma curiosité, ma capacité à analyser les besoins des utilisateurs et mon aptitude à créer des solutions innovantes pour offrir des expériences numériques optimisées. Mon approche est centrée sur la collaboration, la communication et l'engagement envers l'excellence.

                Si vous recherchez une professionnelle dynamique et adaptable, capable de comprendre vos besoins et de les transformer en solutions techniques efficaces, je serais ravie de discuter de votre projet.
</p>
        </div>
    );
}

export default About;