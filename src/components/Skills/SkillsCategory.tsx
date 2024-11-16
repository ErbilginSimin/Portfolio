import React from 'react';
import useSeasonColors from '../../hooks/useSeasonColors';
import { SkillCategory } from '../../types';
import { BackgroundGradient } from '../Motions/BackgroundGradient';

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
    <BackgroundGradient className="relative h-full w-full sm:p-6 p-3 font-light bg-white/90 rounded-lg flex flex-col justify-start">
      <div className="flex items-center ">
        <div className="flex-shrink-0 mr-2 pb-3  ">{icon}</div>
        <h3 className="text-sm font-semibold pb-3" style={{ color: text }}>
          {title}
        </h3>
      </div>

      <ul className="list-disc list-inside space-y-1">
        {skills.map((skill) => (
          <li key={skill} className="text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </BackgroundGradient>
  );
};

export default SkillsCategory;
