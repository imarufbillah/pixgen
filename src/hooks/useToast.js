import { useState, useCallback } from 'react';

let toastId = 0;

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
    const id = ++toastId;
    const newToast = {
      id,
      type: 'info',
      duration: 4000,
      ...toast,
    };

    setToasts((prev) => [...prev, newToast]);

    // Auto remove after duration
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, newToast.duration + 300); // Add 300ms for animation

    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const toast = {
    success: (message, title = 'Success') => 
      addToast({ type: 'success', message, title }),
    error: (message, title = 'Error') => 
      addToast({ type: 'error', message, title }),
    warning: (message, title = 'Warning') => 
      addToast({ type: 'warning', message, title }),
    info: (message, title = 'Info') => 
      addToast({ type: 'info', message, title }),
  };

  return {
    toasts,
    toast,
    removeToast,
  };
};