import { useState } from 'react';

type UseToastResult = {
  showToast: boolean;
  toastMessage: string;
  showNotification: (message: string) => void;
  hideNotification: () => void;
};

export const useToast = (): UseToastResult => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const showNotification = (message: string) => {
    setToastMessage(message); 
    setShowToast(true); 
  };

  const hideNotification = () =>{
    setShowToast(false);
  };

  return { showToast, toastMessage, showNotification, hideNotification };
};
