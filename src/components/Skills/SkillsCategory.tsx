import React from "react";
import useSeasonColors from "../../hooks/useSeasonColors"; 
import { BackgroundGradient } from "../Motions/BackgroundGradient";

// Define the SkillCategory type
type SkillCategory =
  | "Langages de Programmation"
  | "Frameworks et Bibliothèques"
  | "Backend"
  | "Base de Données"
  | "Outils"
  | "Méthodologies";

  // Define the SkillsCategoryProps interface
interface SkillsCategoryProps {
  title: SkillCategory;
  skills: string[];
  icon: React.ReactElement;
}
// Define the SkillsCategory component
const SkillsCategory: React.FC<SkillsCategoryProps> = ({ title, skills, icon }) => { // Destructure the title, skills, and icon props
  const { text, boxShadow } = useSeasonColors(); // Get the text and boxShadow colors depending on the season

  return (
    <BackgroundGradient
      className="relative h-full w-full rounded-[10px] p-4 sm:p-6 shadow-lg font-light"
      containerClassName="shadow-lg"
      style={{ boxShadow: `0 4px 8px rgba(${boxShadow}, 0.3)` }} 
    >
      <div className="flex items-start space-x-4">
        <div className="text-xl flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2" style={{ color: text }}>
            {title}
          </h3>
          <ul className="list-disc list-inside space-y-1">
            {skills.map((skill) => (
              <li key={skill} className="text-sm">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default SkillsCategory;
