import React from 'react';
import PersonalHeader from './PersonalHeader';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import type { CVData } from '../../types/cv.types';

type CVPreviewProps = {
  data: CVData;
};

const CVPreview: React.FC<CVPreviewProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto h-full overflow-y-auto">
      <PersonalHeader personalInfo={data.personalInfo} />
      <SkillsSection skills={data.skills} />
      <ExperienceSection experiences={data.experiences} />
    </div>
  );
};

export default CVPreview;