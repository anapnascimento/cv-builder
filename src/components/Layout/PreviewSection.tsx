import React from 'react';
import CVPreview from '../Preview/CVPreview';
import type { CVData } from '../../types/cv.types';

type PreviewSectionProps = {
  data: CVData;
};

const PreviewSection: React.FC<PreviewSectionProps> = ({ data }) => {
  return (
    <div className="w-full md:w-1/2 p-8 overflow-y-auto">
      <CVPreview data={data} />
    </div>
  );
};


export default PreviewSection;