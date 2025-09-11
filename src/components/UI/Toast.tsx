import React from 'react';

type ToastProps = {
  message: string;
  show: boolean;
};

const Toast: React.FC<ToastProps> = ({ message, show }) => {
  const toastClasses = show
    ? "transform translate-x-0"
    : "transform translate-x-full";

  return (
    <div className={`fixed top-4 right-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-xl z-50 transition-transform duration-300 ${toastClasses}`}>
      {message}
    </div>
  );
};

export default Toast;