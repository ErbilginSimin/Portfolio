import React from 'react';
import useSeasonColors from '../../hooks/useSeasonColors';
import { BackgroundGradient } from '../Motions/BackgroundGradient';

type SkillCategory =
  | 'Langages de Programmation'
  | 'Frameworks et Bibliothèques'
  | 'Backend'
  | 'Base de Données'
  | 'Outils'
  | 'Méthodologies';

interface SkillsCategoryProps {
  title: SkillCategory;
  skills: string[];
  icon: React.ReactElement;
}

const SkillsCategory: React.FC<SkillsCategoryProps> = ({
  title,
  skills,
  icon,
}) => {
  const { text } = useSeasonColors();

  return (
    <BackgroundGradient
      className="relative h-full w-full rounded-[20px] p-4 sm:p-6 font-light bg-white/90"
      containerClassName=""
    >
      <div className="flex items-start space-x-4">
        <div className="text-xl flex-shrink-0">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold mb-2" style={{ color: text }}>
            {title}
          </h3>
          <ul className="list-disc list-inside space-y-1">
            {skills.map((skill) => (
              <li key={skill} className="text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default SkillsCategory;
