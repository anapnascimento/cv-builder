import React from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';

type AIEnhanceButtonProps = {
  onEnhance: () => void;
  loading: boolean;
};

const AIEnhanceButton: React.FC<AIEnhanceButtonProps> = ({ onEnhance, loading }) => {
  return (
    <button
      onClick={onEnhance}
      disabled={loading}
      className="flex items-center gap-1 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      aria-label="Aprimorar com IA"
    >
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <span>Melhorar com IA</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sparkles"
          >
            <path d="M9.914 11.23a1 1 0 0 0-.749-.749L3.921 9.921l5.244-.216a1 1 0 0 0 .749-.749L11.23 3.921l.216 5.244a1 1 0 0 0 .749.749l5.244.216-5.244.216a1 1 0 0 0-.749.749L12.77 20.079l-.216-5.244a1 1 0 0 0-.749-.749L3.921 12.77l.216-5.244z" />
          </svg>
        </>
      )}
    </button>
  );
};

export default AIEnhanceButton;