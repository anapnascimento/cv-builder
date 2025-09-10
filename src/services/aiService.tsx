import type { GeminiResponse } from '../types/api.types';

const API_URL = import.meta.env.VITE_GEMINI_API_URL;
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const generateAIEnhancement = async (description: string): Promise<string> => {
  if (!description.trim()) {
    throw new Error('A descrição da experiência não pode estar vazia.');
  }

  const prompt = `Melhore a seguinte descrição de uma experiência de trabalho para o currículo, tornando-a mais profissional, detalhada e focada em resultados. Use uma linguagem de ação. O texto original é: "${description}". Responda apenas com o texto aprimorado, sem introduções ou explicações adicionais, toda a resposta deve ser em primeira pessoa do singular.`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
  };

  const response = await fetch(`${API_URL}?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro da API: ${response.statusText} - ${errorText}`);
  }

  const result: GeminiResponse = await response.json();
  const enhancedText = result?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!enhancedText) {
    throw new Error('Resposta da API sem texto válido.');
  }

  return enhancedText;
};