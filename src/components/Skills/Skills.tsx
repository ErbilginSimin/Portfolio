import React from "react";
import { useSeasonColors } from "../../contexts/SeasonColorsContext";
import SkillsCategory from "./SkillsCategory";
import SeasonMenu from "../SeasonMenu/SeasonMenu";

// Définir le type pour les catégories de compétences
type SkillCategory =
  | "Langages de Programmation"
  | "Frameworks et Bibliothèques"
  | "Backend"
  | "Base de Données"
  | "Outils"
  | "Méthodologies";

// Définir les icônes pour chaque catégorie
const icons: Record<SkillCategory, React.ReactElement> = {
  "Langages de Programmation": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  ),
  "Frameworks et Bibliothèques": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  ),
  "Backend": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  ),
  "Base de Données": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0z" />
    </svg>
  ),
  "Outils": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  ),
  "Méthodologies": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  ),
};

// Définir les données des compétences
const skillsData: Record<SkillCategory, string[]> = {
  "Langages de Programmation": ["JavaScript", "TypeScript", "PHP"],
  "Frameworks et Bibliothèques": ["React", "Redux", "Bootstrap", "Tailwind"],
  "Backend": ["Node.js", "Express"],
  "Base de Données": ["SQL (Postgres)", "NoSQL (MongoDB)"],
  "Outils": ["API", "Tests unitaires (JEST)"],
  "Méthodologies": ["Programmation Orientée Objet (POO)", "Agile", "SCRUM"],
};

function Skills() {
  const { background } = useSeasonColors();

  return (
    <section id="Skills" className="py-12" style={{ backgroundColor: background }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-8 text-center">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([title, skills]) => (
            <SkillsCategory
              key={title}
              title={title as SkillCategory} // Assure-toi que le titre est d'un type correct
              skills={skills}
              icon={icons[title as SkillCategory]} // Utilise `as SkillCategory` pour le type
            />
          ))}
        </div>
        <SeasonMenu />
      </div>
    </section>
  );
}

export default Skills;
