import type { CSSProperties } from 'react';

export type Skill = {
  name: string;
  proficiency: string;
};

export type Experience = {
  id: string;
  jobRole: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type PersonalInfo = {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  jobTitle: string;
  descriptionSkills: string;
};

export type CVData = {
  personalInfo: PersonalInfo;
  skills: Skill[];
  experiences: Experience[];
};

export type PreviewStyle = {
  container: CSSProperties;
  header: CSSProperties;
  section: CSSProperties;
  title: CSSProperties;
  text: CSSProperties;
};

export type AIEnhancePayload = {
  prompt: string;
};

export type AIEnhanceResponse = {
  description: string;
};

export type APIError = {
  message: string;
  code?: number;
};