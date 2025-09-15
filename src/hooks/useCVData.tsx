import { useState } from 'react';
import type { CVData, Experience, Skill } from '../types/cv.types';
import { generateAIEnhancement } from '../services/aiService';

export const useCVData = () => {
  const [cvData, setCvData] = useState<CVData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      jobTitle: '',
      descriptionSkills: '',
    },
    skills: [
      { name: 'JavaScript', proficiency: 'Avançado' },
      { name: 'React', proficiency: 'Básico' },
      { name: 'Tailwind CSS', proficiency: 'Básico' },
    ],
    experiences: [
      {
        id: '1',
        company: 'Tech Solutions Inc.',
        jobRole: 'Desenvolvedor Full Stack',
        startDate: 'Jan/22',
        endDate: 'Presente',
        description: 'Desenvolvi e mantive aplicações web usando React e Node.js. Colaborei em equipes ágeis para entregar funcionalidades de alta qualidade.',
      },
    ],
  });

  //Atualiza informações pessoais quando input modificado
  const handlePersonalInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCvData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value,
      },
    }));
  };


  //Adiciona nova experiência
  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: '',
      jobRole: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    setCvData(prev => ({
      ...prev,
      experiences: [...prev.experiences, newExperience],
    }));
  };

  //Remove experiência por ID
  const removeExperience = (id: string) => {
    setCvData(prev => ({
      ...prev,
      experiences: prev.experiences.filter(exp => exp.id !== id),
    }));
  };

  //Atualiza campo de experiência específica
  const handleExperienceChange = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCvData(prev => ({
      ...prev,
      experiences: prev.experiences.map(exp =>
        exp.id === id ? { ...exp, [name]: value } : exp
      ),
    }));
  };

  // Função para melhorar a descrição com IA
  const handleEnhanceDescription = async (
    id: string,
    description: string
  ) => {
    try {
      // Chama o serviço
      const enhancedDesc = await generateAIEnhancement(description);

      // Atualiza a descrição
      handleDescriptionUpdate(id, enhancedDesc);
    } catch (error) {
      console.error('Erro ao melhorar a descrição com IA:', error);
    }
  };

  // Função para atualizar a descrição diretamente
  const handleDescriptionUpdate = (id: string, enhancedDesc: string) => {
    setCvData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp) =>
        exp.id === id ? { ...exp, description: enhancedDesc } : exp
      ),
    }));
  };

  //Adiciona skill
  const addSkill = (skillName: string) => {
    const newSkill: Skill = { name: skillName, proficiency: 'Básico' };
    setCvData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill],
    }));
  };

  //Atualiza nome ou proficiência de uma skill
  const handleSkillChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.map((skill, i) =>
        i === index ? { ...skill, [name]: value as any } : skill
      ),
    }));
  };

  //Atualiza proficiência de skill por índice
  const updateSkillProficiency = (
    index: number,
    newProficiency: 'Básico' | 'Intermediário' | 'Avançado'
  ) => {
    setCvData(prev => {
      const updatedSkills = [...prev.skills];
      updatedSkills[index] = {
        ...updatedSkills[index],
        proficiency: newProficiency,
      };
      return {
        ...prev,
        skills: updatedSkills,
      };
    });
  };

  //Remove skill por índice
  const removeSkill = (index: number) => {
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  return {
    cvData,
    setCvData,
    handlePersonalInfoChange,
    handleExperienceChange,
    addExperience,
    removeExperience,
    addSkill,
    handleSkillChange,
    removeSkill,
    handleDescriptionUpdate,
    handleEnhanceDescription,
    updateSkillProficiency,
  };
};
