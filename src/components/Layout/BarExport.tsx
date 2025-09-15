import React from 'react';

interface BarExportProps {
  onExportPDF: () => void;
}

const BarExport: React.FC<BarExportProps> = ({ onExportPDF }) => {
  return (
    <div className="w-full bg-white p-4 shadow flex justify-end gap-4">
      <button onClick={onExportPDF} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Exportar para PDF</button>
    </div>
  );
};

export default BarExport;
