import React from 'react';
import FormSection from './components/Layout/FormSection';
import PreviewSection from './components/Layout/PreviewSection';
import { useCVData } from './hooks/useCVData';
import BarExport from './components/Layout/BarExport';
import { exportPDF } from './utils/export';

const App: React.FC = () => {
  const { cvData, handlePersonalInfoChange, addSkill, removeSkill, addExperience, removeExperience, handleExperienceChange, handleEnhanceDescription, handleDescriptionUpdate, updateSkillProficiency } = useCVData();

  const handleExportPDF = () => exportPDF('preview');

  return (
    <div className="flex flex-col w-full h-screen bg-gray-100 font-sans">
      <BarExport
        onExportPDF={handleExportPDF}
      />
      <div className="flex flex-1 overflow-hidden">
        <FormSection
          handlePersonalInfoChange={handlePersonalInfoChange}
          addSkill={addSkill}
          removeSkill={removeSkill}
          addExperience={addExperience}
          removeExperience={removeExperience}
          handleExperienceChange={handleExperienceChange}
          handleDescriptionUpdate={handleDescriptionUpdate}
          handleEnhanceDescription={handleEnhanceDescription}
          updateSkillProficiency={updateSkillProficiency}
          cvData={cvData}
        />
        <PreviewSection data={cvData} />
      </div>
    </div>
  );
};

export default App
