import React from 'react';
import type { ChangeEvent } from 'react';
import type { PersonalInfo as PersonalInfoType } from '../../types/cv.types';
import { useToast } from '../../hooks/useToast';
import { isValidEmail } from '../../utils/validation';

type PersonalInfoProps = {
  personalInfo: PersonalInfoType;
  onUpdate: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const PersonalInfo: React.FC<PersonalInfoProps> = ({ personalInfo, onUpdate }) => {
  const { showNotification, showToast, toastMessage, hideNotification } = useToast();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onUpdate(e);
  };
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Informações Pessoais</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
          <input
            type="text"
            name="fullName"
            value={personalInfo.fullName}
            onChange={onUpdate}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Cargo Desejado</label>
          <input
            type="text"
            name="jobTitle"
            value={personalInfo.jobTitle}
            onChange={onUpdate}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={handleInputChange}
            onBlur={(e) => {
              if (!isValidEmail(e.target.value)) {
                showNotification('Email inválido');
              }else{
                hideNotification();
              }
            }}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
        </div>
        {showToast && (
          <div className="mt-2 text-sm text-red-600">
            <span>{toastMessage}</span>
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700">Telefone</label>
          <input
            type="tel"
            name="phone"
            value={personalInfo.phone}
            onChange={onUpdate}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Link do LinkedIn</label>
          <input
            type="url"
            name="linkedin"
            value={personalInfo.linkedin}
            onChange={onUpdate}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Link do Github</label>
          <input
            type="url"
            name="github"
            value={personalInfo.github}
            onChange={onUpdate}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Descrição das suas habilidades</label>
          <textarea
                name="descriptionSkills"
                value={personalInfo.descriptionSkills}
                onChange={onUpdate}
                rows={4}
                className="mt-1 blosck w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Uma breve introdução"
              ></textarea>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;