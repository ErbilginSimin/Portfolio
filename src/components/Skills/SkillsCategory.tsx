import React from "react";
import { useSeasonColors } from "../../contexts/SeasonColorsContext";
import { BackgroundGradient } from "../Motions/BackgroundGradient";

// Définir le type pour les catégories de compétences
type SkillCategory =
  | "Langages de Programmation"
  | "Frameworks et Bibliothèques"
  | "Backend"
  | "Base de Données"
  | "Outils"
  | "Méthodologies";

// Mettre à jour l'interface des props
interface SkillsCategoryProps {
  title: SkillCategory;
  skills: string[];
  icon: React.ReactElement; // Change le type à React.ReactElement
}

const SkillsCategory: React.FC<SkillsCategoryProps> = ({ title, skills, icon }) => {
  const { text } = useSeasonColors();

  return (
    <BackgroundGradient className="relative h-full w-full rounded-[15px] p-4 sm:p-10 shadow-lg">
      {/* Conteneur pour l'icône */}
      <div className="absolute top-4 left-4 text-2xl">
        {icon} {/* Affiche l'icône */}
      </div>
      <div className="ml-12 mt-4"> {/* Ajoute une marge pour le texte afin qu'il ne chevauche pas l'icône */}
        <h3 className="text-2xl font-semibold mb-4" style={{ color: text }}>
          {title}
        </h3>
        <ul className="list-disc list-inside space-y-2">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </BackgroundGradient>
  );
};

export default SkillsCategory;
