import React from 'react';

interface BarExportProps {
  onExportPDF: () => void;
}

const BarExport: React.FC<BarExportProps> = ({ onExportPDF }) => {
  return (
    <div className="w-full bg-white p-4 shadow flex justify-end gap-4">
      <button onClick={onExportPDF} className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
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
          className="lucide lucide-download"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
        Exportar para PDF
      </button>

    </div>
  );
};

export default BarExport;
