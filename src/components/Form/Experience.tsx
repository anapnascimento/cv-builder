import React from 'react';
import type { ChangeEvent } from 'react';
import AIEnhanceButton from './AIEnhanceButton';
import type { Experience as ExperienceType } from '../../types/cv.types';
import { useToast } from '../../hooks/useToast';
import { isValidMonthYear } from '../../utils/validation';

type ExperienceProps = {
  experiences: ExperienceType[];
  addExperience: () => void;
  removeExperience: (id: string) => void;
  handleExperienceChange: (id: string, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleEnhanceDescription: (id: string, description: string, company: string) => void;
  handleDescriptionUpdate: (id: string, enhancedDesc: string) => void;
};

const Experience: React.FC<ExperienceProps> = ({ experiences, addExperience, removeExperience, handleExperienceChange, handleEnhanceDescription }) => {
  const { showNotification, showToast, toastMessage, hideNotification } = useToast();

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Experiência Profissional</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex justify-end">
              <button
                onClick={() => removeExperience(exp.id)}
                className="text-red-500 hover:text-red-700 transition-colors duration-200"
                aria-label="Remover experiência"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Cargo</label>
                <input
                  type="text"
                  name="jobRole"
                  value={exp.jobRole}
                  onChange={(e) => handleExperienceChange(exp.id, e)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Empresa</label>
                <input
                  type="text"
                  name="company"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(exp.id, e)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Início</label>
                <input
                  type="month"
                  name="startDate"
                  value={exp.startDate}
                  onChange={(e) => handleExperienceChange(exp.id, e)}
                  onBlur={(e) => {
                    if (!isValidMonthYear(e.target.value)) {
                      showNotification('Data inválida');
                    } else {
                      hideNotification();
                    }
                  }}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                {showToast && (
                  <div className="mt-2 text-sm text-red-600">
                    <span>{toastMessage}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Fim</label>
                <input
                  type="month"
                  name="endDate"
                  value={exp.endDate}
                  onChange={(e) => handleExperienceChange(exp.id, e)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700">Descrição</label>
              </div>
              <textarea
                name="description"
                value={exp.description}
                onChange={(e) => handleExperienceChange(exp.id, e)}
                rows={4}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Descreva suas responsabilidades e conquistas..."
              ></textarea>
            </div>
            <div className="mt-4">
              <AIEnhanceButton
                onEnhance={() => handleEnhanceDescription(exp.id, exp.description, exp.company)}
                loading={false}
              />
            </div>

          </div>
        ))}
      </div>
      <button
        onClick={addExperience}
        className="mt-4 w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors duration-300"
      >
        Adicionar Experiência
      </button>
    </div>
  );
};

export default Experience;