import { useState } from 'react';
import { generateAIEnhancement } from '../services/aiService';
import type { Experience } from '../types/cv.types';

type UseAIEnhancementResult = {
  loadingAI: boolean;
  aiError: string | null;
  handleAIEnhance: (experience: Experience, updateDescription: (newDescription: string) => void) => Promise<void>;
};

export const useAIEnhancement = (showNotification: (message: string) => void): UseAIEnhancementResult => {
  const [loadingAI, setLoadingAI] = useState<boolean>(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const handleAIEnhance = async (experience: Experience, updateDescription: (newDescription: string) => void) => {
    setLoadingAI(true);
    setAiError(null);
    try {
      const enhancedText = await generateAIEnhancement(experience.description);
      updateDescription(enhancedText);
      showNotification('Descrição aprimorada com sucesso!');
    } catch (error: any) {
      console.error('Erro ao aprimorar a descrição:', error);
      setAiError(error.message || 'Ocorreu um erro ao aprimorar o texto.');
      showNotification('Erro ao aprimorar: ' + (error.message || 'Erro desconhecido.'));
    } finally {
      setLoadingAI(false);
    }
  };

  return { loadingAI, aiError, handleAIEnhance };
};