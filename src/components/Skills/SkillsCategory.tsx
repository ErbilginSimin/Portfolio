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
    <BackgroundGradient className="relative h-full w-full p-4 sm:p-6 font-light bg-white rounded-[20px] flex flex-col justify-start">
      <div className="flex items-center mb-4">
        <div className="text-xl flex-shrink-0 w-6 h-6 mr-2">{icon}</div>
        <h3 className="text-lg font-semibold" style={{ color: text }}>
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
